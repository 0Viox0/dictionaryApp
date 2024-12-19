// название файла со стилями должно соответствовать названию компонента 
import './infoComponent.scss';

// выноси пропсы в отдельный тип или интерфейс 
type InfoMessageProps = { text: string }

const InfoMessage = ({ text }: InfoMessageProps) => {
    return (
        <div className="search-query-empty-label">
            <h1>{text}</h1>
        </div>
    );
};

export default InfoMessage;
