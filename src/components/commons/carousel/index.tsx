'use client';

import { Carousel } from 'react-responsive-carousel';

const CarouselWrapper = () => {
  return (
    <Carousel emulateTouch infiniteLoop autoPlay>
      <div style={{ height: 300 }}>
        xxx
        <p className="legend">Legend 1</p>
      </div>
      <div style={{ height: 300 }}>
        sss
        <p className="legend">Legend 2</p>
      </div>
      <div style={{ height: 300 }}>
        qqq
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default CarouselWrapper;
