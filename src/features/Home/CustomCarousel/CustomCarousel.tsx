import { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export class CustomCarousel extends Component {
  render() {
    return (
      <Carousel showThumbs={false} autoPlay infiniteLoop dynamicHeight>
        <div>
          <img src='./images/test.jpg' className='h-[700px]' />
          <p className='legend'>Legend 1</p>
        </div>
        <div>
          <img src='./images/test.jpg' className='h-[700px]' />
          <p className='legend'>Legend 2</p>
        </div>
        <div>
          <img src='./images/test.jpg' className='h-[700px]' />
          <p className='legend'>Legend 3</p>
        </div>
      </Carousel>
    );
  }
}
