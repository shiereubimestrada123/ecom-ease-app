import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <Slider {...settings}>
      <div>
        <p>
          <img
            src='./images/levis.png'
            alt='about hero'
            className='!w-[150px] m-auto'
          />
        </p>
      </div>

      <div>
        <p>
          <img
            src='./images/adidas.png'
            alt='about hero'
            className='!w-[150px] m-auto'
          />
        </p>
      </div>

      <div>
        <p>
          <img
            src='./images/nike.png'
            alt='about hero'
            className='!w-[150px] m-auto'
          />
        </p>
      </div>

      <div>
        <p>
          <img
            src='./images/hnm.png'
            alt='about hero'
            className='!w-[150px] m-auto'
          />
        </p>
      </div>
    </Slider>
  );
}
