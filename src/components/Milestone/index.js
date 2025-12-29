import React from 'react';

export default function Milestone(props) {
    const { year, title, children } = props;

    return (
        <div
            style={{
                borderLeft: '4px solid var(--ifm-color-primary)',
                paddingLeft: '1rem',
                margin: '2rem 0',
            }}
        >
            <h3>
                {year} — {title}
            </h3>
            <div>{children}</div>
        </div>
    );
}
