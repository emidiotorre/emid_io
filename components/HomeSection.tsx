import React, { ReactNode } from 'react';
import Image from 'next/image';

const HomeSection: React.FC<{
  children: ReactNode[];
  style?: any;
  bg?: string;
}> = ({ children, style, bg = '' }) => {
  return (
    <section
      style={style}
      className="py-8 px-8 overflow-hidden border-0 border-b border-white hover:bg-[#fff] hover:text-asparagus-800"
    >
      {bg ? (
        <div className="fill z-[0]">
          <Image src={bg} layout="fill" objectFit="cover"></Image>
        </div>
      ) : null}
      <div className="relative z-10">{children}</div>
    </section>
  );
};

export default HomeSection;
