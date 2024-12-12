import React from 'react';
import './inpSrcStyles.scss';

const InputSearchWordContainer = ({
    leftContainerContent,
    rightContainerContent,
}: {
    leftContainerContent: React.ReactNode;
    rightContainerContent: React.ReactNode;
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

export default InputSearchWordContainer;
