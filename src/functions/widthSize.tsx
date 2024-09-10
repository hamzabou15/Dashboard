"use client"
import { useEffect, useState } from "react";

function useWindowWidth() {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        handleResize(); // Initial setting
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowWidth;
}

export default useWindowWidth;