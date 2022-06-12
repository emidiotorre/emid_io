import React, { ReactNode } from 'react';

const HomeSection: React.FC<{
  children: ReactNode[];
  style?: any;
}> = ({ children, style }) => {
  return (
    <section
      style={style}
      className="py-8 px-8  border-0 border-b border-white bg-[#111] text-[#efefef] hover:bg-[#fff] hover:text-[#111]"
    >
      {children}
    </section>
  );
};

export default HomeSection;
