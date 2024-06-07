import { useEffect, useState } from "react";

export const useTouchSection = ({ sectionName }) => {
    const [isScrolled, setIsScrolled] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const nextSection = document.getElementById(sectionName);

            if (nextSection) {
                const nextSectionTop = nextSection.offsetTop;
                const nextSectionBottom = nextSectionTop + nextSection.offsetHeight;

                if (scrollTop >= nextSectionTop && scrollTop < nextSectionBottom) {
                    setIsScrolled(true);
                } else {
                    setIsScrolled(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();  // Check initial position on mount

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [sectionName]);

    return { isScrolled };
};
