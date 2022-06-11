import React, { ReactNode } from 'react';

const HomeSection: React.FC<{
  children: ReactNode[];
  backgroundColor?: string;
}> = ({ children, backgroundColor = 'red' }) => {
  return <section style={{ backgroundColor }}>{children}</section>;
};

export default HomeSection;
