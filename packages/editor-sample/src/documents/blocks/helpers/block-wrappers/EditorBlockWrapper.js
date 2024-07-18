import React, { useState } from 'react';
import { Box } from '@mui/material';
import { useCurrentBlockId } from '../../../editor/EditorBlock';
import { setSelectedBlockId, useSelectedBlockId } from '../../../editor/EditorContext';
import TuneMenu from './TuneMenu';
export default function EditorBlockWrapper({ children }) {
    const selectedBlockId = useSelectedBlockId();
    const [mouseInside, setMouseInside] = useState(false);
    const blockId = useCurrentBlockId();
    let outline;
    if (selectedBlockId === blockId) {
        outline = '2px solid rgba(0,121,204, 1)';
    }
    else if (mouseInside) {
        outline = '2px solid rgba(0,121,204, 0.3)';
    }
    const renderMenu = () => {
        if (selectedBlockId !== blockId) {
            return null;
        }
        return React.createElement(TuneMenu, { blockId: blockId });
    };
    return (React.createElement(Box, { sx: {
            position: 'relative',
            maxWidth: '100%',
            outlineOffset: '-1px',
            outline,
        }, onMouseEnter: (ev) => {
            setMouseInside(true);
            ev.stopPropagation();
        }, onMouseLeave: () => {
            setMouseInside(false);
        }, onClick: (ev) => {
            setSelectedBlockId(blockId);
            ev.stopPropagation();
            ev.preventDefault();
        } },
        renderMenu(),
        children));
}
//# sourceMappingURL=EditorBlockWrapper.js.map