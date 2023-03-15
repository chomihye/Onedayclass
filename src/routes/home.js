import { Navbar, Container, Nav, Button, Card } from 'react-bootstrap';
import knit from '../img/knitting.jpg';
import fig from '../img/figure.jpg';
import pic1 from '../img/pic1.jpg';
import banner from '../img/banner.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { data1 as data, data2 } from '../data.js';

function Home() {
    let [classdata, setClassdata] = useState(data);
    let [opendata, setOpendata] = useState(data2);
  return (
    <div>
      <div className='main_img'></div>
      <div className='main_container'>
        <div className='best_class'>
          <div className='best_class_header'>마이원데이 인기 클래스👍</div>
          <div className='img_container'>
            {classdata.map((item, i) => {
              return (
                <div key={item.id}>
                  <div className='img_wrap'>
                    <img
                      src={item.img}
                      alt='원데이클래스 사진'
                      className='class_img'
                    />
                  </div>
                  <div>{item.title}</div>
                  <div>{item.price}원</div>
                </div>
              );
            })}
            {/* {[
              { src: knit, name: '마크라메 원데이 클래스' },
              { src: fig, name: '연필로 완성하는 드로잉 클래스' },
              { src: pic1, name: '도자기로 화병만들기' },
            ].map((n, i) => (
              <div>
                <Link
                  <img src={n.src} alt='' className='class_img' />
               
                <div>{n.name}</div>
                <div>{20000 * (i + 1)}원</div>
              </div> */}
          </div>
          <Button variant='outline-secondary'>더보기</Button>{' '}
        </div>
        <div className='open_class'>
          <div className='open_class_header'>오늘 오픈한 클래스 둘러보기🎈</div>
          <div className='img_container'>
            {opendata.map((item, i) => {
              return (
                <div key={item.id}>
                  <div className='img_wrap'>
                    <img
                      src={item.img}
                      alt='오늘오픈클래스 사진'
                      className='class_img'
                    />
                  </div>
                  <div>{item.title}</div>
                  <div>{item.price}원</div>
                </div>
              );
            })}
          </div>
        </div>
        <img src={banner} alt='' className='banner' />
        <div className='review_class'>
          <div className='open_class_header'>클래스 후기⭐</div>
        </div>
        <div className='review_container'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' src={knit} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' src={knit} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Home;
