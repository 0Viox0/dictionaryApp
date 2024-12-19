import { FC, ReactNode } from 'react';

import './InputSearchWordContainer.scss';

type ContainerProps = {
    leftContainerContent: ReactNode;
    rightContainerContent: ReactNode;
};

export const InputSearchWordContainer: FC<ContainerProps> = ({
    leftContainerContent,
    rightContainerContent,
}) => {
    return (
        <div className="container">
            <div className="container__inner-left">{leftContainerContent}</div>
            <div className="container__inner-right">
                {rightContainerContent}
            </div>
        </div>
    );
};
