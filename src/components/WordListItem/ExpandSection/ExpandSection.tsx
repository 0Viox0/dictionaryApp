import { FC, useEffect, useRef } from 'react';
import { WordDefinition } from '../../../redux/words/types';
import { text } from '../../../shared/text';

import './ExpandSection.scss';

type ExpandSectionProps = {
    wordListItemInfo: WordDefinition;
    isExpanded: boolean;
};

export const ExpandSection: FC<ExpandSectionProps> = ({
    wordListItemInfo,
    isExpanded,
}) => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (sectionRef.current) {
            sectionRef.current.style.height = isExpanded
                ? `${sectionRef.current.scrollHeight}px`
                : '0px';
        }
    }, [isExpanded]);

    return (
        <div
            className={`expand-section ${!isExpanded && 'hidden'} `}
            ref={sectionRef}
        >
            <div className="line"></div>
            {/* на странице тег h1 может быть только один */}
            <h1>{text.definitionHeading}</h1>
            {/* вместо двух условий можно сделать просто `!wordListItemInfo.definitions?.length` ? ... */}
            {!wordListItemInfo.definitions ||
            wordListItemInfo.definitions.length === 0 ? (
                <div className="not-available-info">
                    {text.informationNotAvail}
                </div>
            ) : (
                <ul>
                    {wordListItemInfo.definitions.map((definition, id) => (
                        <li key={id}>{definition}</li>
                    ))}
                </ul>
            )}
            {/* на странице тег h1 может быть только один */}
            <h1>{text.pronunciationHeading}</h1>
            {wordListItemInfo.pronunciations ? (
                <ul>
                    {/* лучше назвать `pronunciation` - более читабельное и понятное название */}
                    {wordListItemInfo.pronunciations.map((pron, id) => (
                        <li key={id}>{pron.ipa}</li>
                    ))}
                </ul>
            ) : (
                <div className="not-available-info">
                    {text.informationNotAvail}
                </div>
            )}
        </div>
    );
};
