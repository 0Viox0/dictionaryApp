// import React from 'react';

// название файла стилей 
import './inpSrcStyles.scss';

const InputSearchWordContainer = ({
    leftContainerContent,
    rightContainerContent,
}: {
    // создавай отдельный тип/интерфейс для пропсов компонента
    leftContainerContent: React.ReactNode; // лучше импортировать ReactNode и сократить запись до `leftContainerContent: ReactNode;`
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
