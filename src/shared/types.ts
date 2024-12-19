export type DraggableProps = {
    draggable: boolean;
    setActiveCard: React.Dispatch<React.SetStateAction<string | null>>;
};

export type IconProps = {
    width?: number;
    height?: number;
    fillColor?: string;
    strokeColor?: string;
    className?: '';
};
