import { Dispatch } from 'react';

export type DraggableProps = {
    setActiveCard: Dispatch<React.SetStateAction<string | null>>;
};

export type IconProps = {
    width?: number;
    height?: number;
    fillColor?: string;
    strokeColor?: string;
    className?: '';
};
