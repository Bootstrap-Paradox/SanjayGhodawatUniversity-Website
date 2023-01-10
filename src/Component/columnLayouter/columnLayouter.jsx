import React from 'react';

export default function ColumnLayouter(props) {
    return (
        <div className="column-layouter">
            {props.children}
        </div>
    )
}