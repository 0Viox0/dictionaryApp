import { FC } from 'react';
import { IconProps } from '../../types';

// в папке assets тоже можно добавить index.ts с экспортом иконок
export const BurgerMenuIcon: FC<IconProps> = ({
    width = 24,
    height = 24,
    fillColor = 'none',
    strokeColor = '#33363F',
    className = '',
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
            <path
                d={`M5 7H${width}`}
                stroke={strokeColor}
                strokeWidth={2}
                strokeLinecap="round"
            />
            <path
                d={`M5 12H${width}`}
                stroke={strokeColor}
                strokeWidth={2}
                strokeLinecap="round"
            />
            <path
                d={`M5 17H${width}`}
                stroke={strokeColor}
                strokeWidth={2}
                strokeLinecap="round"
            />
        </svg>
    );
};
