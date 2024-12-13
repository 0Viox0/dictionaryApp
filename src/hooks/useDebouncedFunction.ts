import { useEffect, useRef } from 'react';

type DebouncedFunction = (...args: unknown[]) => void;

const useDebouncedFunction = (callback: DebouncedFunction, delay = 500) => {
    const timeoutRef = useRef<number | null>(null);

    const debouncedFunction = (...args: unknown[]) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = window.setTimeout(() => {
            callback(...args);
        }, delay);
    };

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return debouncedFunction;
};

export default useDebouncedFunction;
