import React from 'react';

const letterColors = {
    a: '#FF6F61', // Coral
    b: '#FFD700', // Gold
    c: '#40E0D0', // Turquoise
    d: '#FF8C00', // Dark Orange
    e: '#9370DB', // Medium Purple
    f: '#00FF7F', // Spring Green
    g: '#FF69B4', // Hot Pink
    h: '#00BFFF', // Deep Sky Blue
    i: '#FFA500', // Orange
    j: '#4CAF50', // Green
    k: '#BA55D3', // Medium Orchid
    l: '#1E90FF', // Dodger Blue
    m: '#FF6347', // Tomato
    n: '#7CFC00', // Lawn Green
    o: '#FF1493', // Deep Pink
    p: '#8A2BE2', // Blue Violet
    q: '#00FA9A', // Medium Spring Green
    r: '#FF4500', // Orange Red
    s: '#9ACD32', // Yellow Green
    t: '#FFB6C1', // Light Pink
    u: '#5F9EA0', // Cadet Blue
    v: '#FF69B4', // Hot Pink
    w: '#00CED1', // Dark Turquoise
    x: '#00FA9A', // Medium Spring Green
    y: '#DA70D6', // Orchid
    z: '#ADD8E6', // Light Blue
  };

export default function GalaxyBackground() {
  const name = 'yanling';

  const gradients = name.split('').map((letter, index) => {
    const letterPosition = letter.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0) + 1;

    const colorVariation = (letterPosition % name.length) * 1.5; // intensity = remainder of position / length x 1.5 + 0.6
    const radius = Math.max(10 + letterPosition * 3, 0); // radius = letter position x 3 + 10

    const angle = (index / name.length) * 2 * Math.PI; // letters spaced evenly on a circle

    const cx = `calc(50% + ${Math.cos(angle) * radius}%)`; // x position = cos(angle) * radius
    const verticalOffset = (letterPosition / name.length) * 10 ;
    const cy = `calc(50% + ${Math.sin(angle) * radius + verticalOffset}%)`; // y position = sin(angle) * radius + vertical offset
    const r = `${radius}%`;
    console.log({cx})
    console.log({cy})
    console.log({r})

    const stopColor = letterColors[letter.toLowerCase()];

    return (
      <radialGradient id={`galaxyGradient${index + 1}`} cx={cx} cy={cy} r={r} key={index}>
        <stop offset="0%" stopColor={stopColor} stopOpacity={`${0.6 + colorVariation}`} />
        <stop offset="100%" stopColor="white" stopOpacity="0.2" />
      </radialGradient>
    );
  });

  const rectangles = name.split('').map((letter, index) => (
    <rect
      key={index}
      x="0"
      y="0"
      width="100"
      height="100"
      fill={`url(#galaxyGradient${index + 1})`}
      opacity={index === name.length - 1 ? '1' : '1'} // Adjust opacity for the last letter
    />
  ));

  return (
    <div style={{ height: '100vh', top: 0, left: 0, zIndex: -1, width: '100%' }}>
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          {gradients}
        </defs>
        {rectangles}
      </svg>
    </div>
  );
}
