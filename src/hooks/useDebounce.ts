import { useEffect, useState } from 'react';

export const useDebouncedValue = <T>(value: T, delay = 500) => {
    const [debouncedValue, setDebouncedValue] = useState<T>();

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(timeout);
        };
    }, [value, delay]);

    return debouncedValue;
};
