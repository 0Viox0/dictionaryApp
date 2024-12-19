import { FC } from 'react';
import { IconProps } from '../../types';

export const SearchIcon: FC<IconProps> = ({
    width = 24,
    height = 24,
    fillColor = 'none',
    strokeColor = '#33363F',
    className = '',
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill={fillColor}
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <circle
                cx="11"
                cy="11"
                r="7"
                stroke={strokeColor}
                strokeWidth={2}
            />
            <path
                d="M20 20L17 17"
                stroke={strokeColor}
                strokeWidth={2}
                strokeLinecap="round"
            />
        </svg>
    );
};
