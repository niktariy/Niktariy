import React from 'react';
import type { IIconProps } from '../../types/common';

const DevelopmentIcon: React.FC<IIconProps> = ({ color = 'currentColor', size = 24, style }) => (
  <svg width={size} height={size} viewBox="0 0 96 96" fill={color} xmlns="http://www.w3.org/2000/svg" style={style}>
    <path d="M25 19h11v3H25zM25 14h3v3h-3zM30 14h3v3h-3zM35 14h3v3h-3z" />
    <path d="M25 78V62a3 3 0 0 1 3-3h42a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H28a3 3 0 0 1-3-3Zm3 0h42V62H28v16Z" />
    <path d="M42 66h16v3H42zM60 66h6v3h-6zM32 66h8v3h-8zM32 71h21v3H32zM55 71h11v3H55z" />
    <path d="M35 33v16a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V33a3 3 0 0 1 3-3h28a3 3 0 0 1 3 3Zm-3 0H4v16h28V33Z" />
    <path d="m19 35.4-1 2-3.7 8 2.7 1.2 1-2 3-6.5.7-1.5-.7-.3-2-1ZM25.2 35l-2.4 2 3.3 4-3.3 4 2.4 2 4-5c.4-.6.4-1.4 0-2l-4-5ZM10.8 35l-4 5c-.4.6-.4 1.4 0 2l4 5 2.4-2-3.3-4 3.3-4-2.4-2ZM21 10h56v6h3v-6a3 3 0 0 0-3-3H21a3 3 0 0 0-3 3v17h3V10ZM77 86H21V55h-3v31a3 3 0 0 0 3 3h56a3 3 0 0 0 3-3V58h-3v28Z" />
    <path d="M93 19H42a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h51a3 3 0 0 0 3-3V22a3 3 0 0 0-3-3Zm0 3v22.3l-7-5c-.5-.4-1.1-.4-1.6-.1L80 41.4l-3 1.5-5.7 2.9-14.1-9.5c-.5-.4-1.2-.4-1.7 0L42 44.8V22h51ZM71.2 52H93v-4l-8-5.8-5 2.5-3 1.6-5.2 2.5c-.2.2-.4.2-.6.2-.3 0-.6 0-.9-.3l-14-9.4-14.3 9V52h29.2Z" />
    <path d="M80 35a5 5 0 1 1-6-8 5 5 0 0 1 6 8Zm-1-4a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z" />
  </svg>
);

export default DevelopmentIcon;