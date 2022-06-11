import React from 'react';
import { useTrail, a } from '@react-spring/web';

const Trail: React.FC<{
  open: boolean;
  children: any;
  height?: Number;
  className?: string;
}> = ({ open, children, height = 100, className = '' }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 1000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? height : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div className={className}>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

export default Trail;
