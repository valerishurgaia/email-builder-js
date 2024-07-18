import React from 'react';
import { Container as BaseContainer } from '@usewaypoint/block-container';
import { useCurrentBlockId } from '../../editor/EditorBlock';
import { setDocument, setSelectedBlockId, useDocument } from '../../editor/EditorContext';
import EditorChildrenIds from '../helpers/EditorChildrenIds';
export default function ContainerEditor({ style, props }) {
    var _a;
    const childrenIds = (_a = props === null || props === void 0 ? void 0 : props.childrenIds) !== null && _a !== void 0 ? _a : [];
    const document = useDocument();
    const currentBlockId = useCurrentBlockId();
    return (React.createElement(BaseContainer, { style: style },
        React.createElement(EditorChildrenIds, { childrenIds: childrenIds, onChange: ({ block, blockId, childrenIds }) => {
                setDocument({
                    [blockId]: block,
                    [currentBlockId]: {
                        type: 'Container',
                        data: Object.assign(Object.assign({}, document[currentBlockId].data), { props: { childrenIds: childrenIds } }),
                    },
                });
                setSelectedBlockId(blockId);
            } })));
}
//# sourceMappingURL=ContainerEditor.js.map