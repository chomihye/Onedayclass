import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { data1 } from '../data.js';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Cart() {
  let state = useSelector((state) => {
    return state;
  });
  let [classdata, setClassdata] = useState({});


  if (state.cart.length === 0) {
    return (
      <div className='cart_container'>
        <div className='empty_cart'>
          장바구니가 비었습니다🤔
          <Link to='/'>
            <Button
              className='find_btn'
              variant='outline-success'
              size='lg'
              style={{ width: '500px' }}
            >
              클래스 둘러보러가기
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className='cart_container'>
        <div>
          {state.cart.map((item, i) => (
            <div className='class_info'>
              <img
                src={data1.find((d) => d.id === item.id).img}
                alt=''
                className='cart_img'
              />
              <div style={{ width: '22%' }}>
                {data1.find((d) => d.id === item.id).title}
              </div>
              <div>{item.date}</div>
              <div>1인 / {data1.find((d) => d.id === item.id).price}원</div>
              <div>{item.person}명</div>
              <div>
                총 {data1.find((d) => d.id === item.id).price * item.person}원
              </div>
            </div>
          ))}
        </div>

        <hr />
        <div className='reserve_final_price'>
          최종 금액 :
          {state.cart.reduce(
            (a, c) => a + data1.find((d) => d.id === c.id).price * c.person,
            0
          )}
          원
        </div>
        <div className='d-grid gap-2'>
          <Button variant='success' size='lg'>
            예약하기
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
