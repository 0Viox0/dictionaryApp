import { FC } from 'react';

import './InfoMessage.scss';

type InfoMessageProps = { text: string };

export const InfoMessage: FC<InfoMessageProps> = ({ text }) => {
    return <div className="info-message">{text}</div>;
};
