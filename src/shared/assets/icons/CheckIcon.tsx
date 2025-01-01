import { FC } from 'react';
import { IconProps } from 'shared/types';

export const CheckIcon: FC<IconProps> = ({
    width = 24,
    height = 24,
    fillColor = 'none',
    strokeColor = '#33363F',
    className,
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill={fillColor}
            className={className}
        >
            <path d="M5 14L9 17L18 6" stroke={strokeColor} strokeWidth="2" />
        </svg>
    );
};
