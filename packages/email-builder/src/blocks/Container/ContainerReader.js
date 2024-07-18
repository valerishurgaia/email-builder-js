import React from 'react';
import { Container as BaseContainer } from '@usewaypoint/block-container';
import { ReaderBlock } from '../../Reader/core';
export default function ContainerReader({ style, props }) {
    var _a;
    const childrenIds = (_a = props === null || props === void 0 ? void 0 : props.childrenIds) !== null && _a !== void 0 ? _a : [];
    return (React.createElement(BaseContainer, { style: style }, childrenIds.map((childId) => (React.createElement(ReaderBlock, { key: childId, id: childId })))));
}
//# sourceMappingURL=ContainerReader.js.map