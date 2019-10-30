import { useState, useEffect } from "react";

// Hook
export default function useWindowSize() {
	const isClient = typeof window === "object";

	function getSize() {
		if (window.screen.width < 500)
			return {
				width: window.screen.width,
				height: window.screen.height
			};
			return{
				width: window.innerWidth,
				height: window.innerHeight,
			}
	}

	const [windowSize, setWindowSize] = useState(getSize);

	useEffect(() => {
		if (!isClient) {
			return false;
		}

		function handleResize() {
			setWindowSize(getSize());
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []); // Empty array ensures that effect is only run on mount and unmount

	return windowSize;
}
