import { FC, MouseEvent, useEffect, useRef } from 'react';
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
            onClick={(event: MouseEvent<HTMLDivElement>) =>
                event.stopPropagation()
            }
        >
            <div className="line"></div>
            <h3>{text.definitionHeading}</h3>
            {!wordListItemInfo.definitions?.length ? (
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
            <h3>{text.pronunciationHeading}</h3>
            {wordListItemInfo.pronunciations ? (
                <ul>
                    {wordListItemInfo.pronunciations.map(
                        (pronunciation, id) => (
                            <li key={id}>{pronunciation.ipa}</li>
                        ),
                    )}
                </ul>
            ) : (
                <div className="not-available-info">
                    {text.informationNotAvail}
                </div>
            )}
        </div>
    );
};