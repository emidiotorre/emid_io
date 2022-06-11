import React, { ReactNode } from 'react';

const HomeSection: React.FC<{
  children: ReactNode[];
  backgroundColor?: string;
}> = ({ children, backgroundColor = '#fafafa' }) => {
  return (
    <section style={{ backgroundColor }} className="py-8 px-8">
      {children}
    </section>
  );
};

export default HomeSection;
