import { useState } from 'react';
import { classNames } from 'shared/utils/classNames';
import { text } from 'shared/text';

import './DropArea.scss';

export const DropArea = ({ onDrop }: { onDrop: () => void }) => {
    const [showDrop, setShowDrop] = useState(false);

    const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
        const relatedTarget = event.relatedTarget as HTMLElement;

        if (!relatedTarget || !event.currentTarget.contains(relatedTarget)) {
            setShowDrop(false);
        }
    };

    const handleOnDrop = () => {
        onDrop();
        setShowDrop(false);
    };

    const dropAreaClass = classNames({
        'drop-area-wrapper': showDrop,
        hide_drop: !showDrop,
    });

    return (
        <div
            className={dropAreaClass}
            onDragEnter={() => setShowDrop(true)}
            onDragLeave={handleDragLeave}
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleOnDrop}
        >
            <div className={'drop-area'}>
                <div>{text.placeItem}</div>
            </div>
        </div>
    );
};
