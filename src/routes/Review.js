import Slider from 'react-slick';
import { Card } from 'react-bootstrap';
import { data1 as data } from '../data.js';
import { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: true,
  infinite: true,
  autoplay : true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 2,
  initialSlide: 0,
 
};

function Review() {
  let [classdata, setClassdata] = useState(data);

  return (
    <div className='review_container' style={{height : '300px'}} >
      <Slider {...settings}>
        {classdata.map((item, i) => (
          <div key={item.id} >
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant='top'
                src={item.img}
                style={{ width: 286, height: 190 }}
              />
              <Card.Body style={{height: '100px'}}>
                <Card.Title style={{ fontSize: '18px' }}>
                  {item.title}
                </Card.Title>
                <Card.Text style={{fontSize :'15px'}}>{item.review}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Review;
