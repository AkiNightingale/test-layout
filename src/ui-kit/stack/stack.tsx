import React from 'react';

import './stack.scss';

interface StackProps {
  direction?: 'row' | 'column';
  gap?: number;
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const Stack: React.FC<StackProps> = ({
  direction = 'column',
  gap = 0.5,
  alignItems = 'center',
  justifyContent = 'flex-start',
  className = '', // Note: requires important
  style,
  children,
}) => {
  return (
    <div
      className={`stack stack--${direction} ${className}`}
      style={{
        gap: `${gap}rem`,
        alignItems,
        justifyContent,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Stack;