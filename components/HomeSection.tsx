import React, { ReactNode } from 'react';

const HomeSection: React.FC<{
  children: ReactNode[];
  style?: any;
}> = ({ children, style }) => {
  return (
    <section
      style={style}
      className="py-8 px-8  border-0 border-b border-white bg-asparagus-900 text-asparagus-50 hover:bg-[#fff] hover:text-asparagus-800"
    >
      {children}
    </section>
  );
};

export default HomeSection;
