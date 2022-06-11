import React, { ReactNode } from 'react';

const HomeSection: React.FC<{
  children: ReactNode[];
  style?: any;
}> = ({ children, style }) => {
  return (
    <section style={style} className="py-8 px-8">
      {children}
    </section>
  );
};

export default HomeSection;
