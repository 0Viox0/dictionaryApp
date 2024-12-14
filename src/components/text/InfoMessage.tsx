import './infoComponent.scss';

const InfoMessage = ({ text }: { text: string }) => {
    return (
        <div className="search-query-empty-label">
            <h1>{text}</h1>
        </div>
    );
};

export default InfoMessage;
