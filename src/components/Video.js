import React from 'react';

export default function Video({src}) {
  return (
    <div
      style={{
        position: 'relative',
        paddingBottom: '56.25%', /* Proporção 16:9 */
        height: 0,
        overflow: 'hidden',
        maxWidth: '100%',
        background: '#000',
        marginBottom: '1rem'
      }}>
      <iframe
        src={src}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}