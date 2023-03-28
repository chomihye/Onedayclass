import banner from '../img/banner.png';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { data1 as data } from '../data.js';
import { Routes, Route, Outlet } from 'react-router-dom';
import Detail from './Detail';
import Review from './Review';

function Home() {
  let [classdata, setClassdata] = useState(data);
  let [recentData, setRecentData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let arr = localStorage.getItem('recentItem');
    arr = arr ? JSON.parse(arr) : [];
    console.log(arr);
    setRecentData(arr);
  }, []);

  return (
    <div className='wrapper'>
      <div className='main_img' />
      <div className='recent_product'>
        <div className='recent_title'>최근 본 상품</div>
        <hr />
        {recentData.map((id, i) => {
          return (
            <div key={i}>
              <div>
                <img
                  src={data.find((d) => d.id === id).img}
                  alt=''
                  className='recent_img'
                  onClick={() => {
                    navigate(`/detail/${id}`);
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className='main_container'>
        <div className='best_class'>
          <div className='best_class_header'>마이원데이 인기 클래스👍</div>
          <div className='img_container'>
            {classdata.map((item, i) => {
              return (
                <div key={item.id}>
                  <div className='img_wrap'>
                    <Link to={'/detail/' + item.id}>
                      <img
                        src={item.img}
                        alt='원데이클래스 사진'
                        className='class_img'
                      />
                    </Link>
                  </div>
                  <div>
                    <div className='main_title'>{item.title}</div>
                  </div>
                  <div className='main_price'>1인/{item.price}원</div>
                </div>
              );
            })}
          </div>
        </div>
        <img src={banner} alt='' className='banner' />
        <div className='review_class'>
          <div className='open_class_header'>클래스 후기⭐</div>
        </div>
        <Review />
      </div>
    </div>
  );
}

export default Home;
