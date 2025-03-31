import React, { useEffect, useState, useRef } from 'react';

interface LayoutProps {
    id: string;
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ id, children }) => {
    const ref = useRef<HTMLElement>(null);
    const [vis, setVis] = useState(false);
    const [height, setHeight] = useState<number | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setVis(entry.isIntersecting);
                    if (entry.isIntersecting && ref.current) {
                        requestAnimationFrame(() => setHeight(ref.current!.clientHeight));
                    }
                });
            },
            { threshold: 0.1 }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <section
            id={id.substring(1)}
            ref={ref}
            style={!vis && height ? { height: height, padding: "0" } : {}}
        >
            {vis && children}
        </section>
    );
};