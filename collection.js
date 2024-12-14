import Carousel from 'react-bootstrap/Carousel';

import React from 'react';
function Collection() {
  return (
    <Carousel>
      <Carousel.Item>
        <img alt='' src='"C:\Users\91913\Desktop\MONGO DB\MERN PROJECT\frontend\src\components\product_23.png"} '  />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="C:\Users\91913\Desktop\MONGO DB\MERN PROJECT\frontend\src\components\product_23.png" text="Second slide" alt='' />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="C:\Users\91913\Desktop\MONGO DB\MERN PROJECT\frontend\src\components\product_23.png" alt='' text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Collection;