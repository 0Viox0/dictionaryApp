import { FC } from 'react';

import './InfoMessage.scss';

type InfoMessageProps = { text: string };

export const InfoMessage: FC<InfoMessageProps> = ({ text }) => {
    return (
        <div className="search-query-empty-label">
            <h1>{text}</h1>
        </div>
    );
};
