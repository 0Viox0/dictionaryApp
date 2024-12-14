import { useEffect, useRef } from 'react';
import { WordDefinition } from '../../../redux/words/types';
import { text } from '../../../text/text';
import '../styles/expandWordItemSection.scss';

const ExpandSection = ({
    wordListItemInfo,
    isExpanded,
}: {
    wordListItemInfo: WordDefinition;
    isExpanded: boolean;
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
            <h1>{text.definitionHeading}</h1>
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
            <h1>{text.pronunciationHeading}</h1>
            {wordListItemInfo.pronunciations ? (
                <ul>
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

export default ExpandSection;
