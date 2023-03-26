import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { data1_detail as detail_data } from '../data.js';
import { Tab, Tabs, Form, Button } from 'react-bootstrap';
import { addItem } from '../store.js';
import { useDispatch } from 'react-redux';

function Detail() {
  let { id } = useParams();
  let [classdata, setClassdata] = useState({});
  let [date, setDate] = useState('');
  let [person, setPerson] = useState('1');
  let [totalPrice, setTotalPrice] = useState(0);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    setTotalPrice(person * classdata.price);
  }, [person, classdata.price]);

  function handleDateChange(e) {
    setDate(e.target.value);
  }

  function handlePersonChange(e) {
    setPerson(e.target.value);
  }

  useEffect(() => {
    let detail = {};
    for (let i = 0; i < detail_data.length; i++) {
      if (detail_data[i].id === id * 1) {
        detail = detail_data[i];
      }
    }
    setClassdata(detail);
  }, []);

  //최근 본 목록 만들기
  useEffect(() => {
    if (classdata.id !== undefined) {
      //classdata가 빈 객체가 아닐때만 실행
      let recentOut = localStorage.getItem('recentItem');
      recentOut = JSON.parse(recentOut); // array로 만듦
      recentOut.push(classdata.id); // array에 id 넣음
      recentOut = new Set(recentOut); // 중복 제거
      recentOut = Array.from(recentOut).slice(0, 3); // 다시 array로 만들어줌 ,3개까지
      localStorage.setItem('recentItem', JSON.stringify(recentOut));
    }
  }, [classdata]);

  return (
    <div>
      <div className='detail_container'>
        <div className='input_container'>
          <img src={classdata.img} alt='' className='detail_img' />
          <div className='pick'>
            <div className='title'>{classdata.title}</div>
            <div className='pick_box'>
              <div className='pick_date'>날짜선택</div>
              <Form.Control
                type='date'
                value={date}
                onChange={handleDateChange}
                className='date'
                style={{ width: '300px' }}
                required
              />
              <div className='pick_member'>인원선택</div>
              <Form.Control
                type='number'
                min='0'
                value={person}
                onChange={handlePersonChange}
                className='member'
                style={{ width: '300px' }}
              />
              <hr />
              <div className='price_box'>
                <div className='price'>1인 / {classdata.price}원</div>

                <div className='final_price'>
                  최종 예약 금액 / {totalPrice} 원{' '}
                </div>
              </div>
            </div>
            <Link
              onClick={() => {
                dispatch(
                  addItem({ id: classdata.id, date: date, person: person })
                );
                navigate('/Cart');
              }}
            >
              <Button variant='primary' size='lg' className='cart_btn'>
                장바구니 담기
              </Button>
            </Link>
          </div>
        </div>
        <Tabs defaultActiveKey='home' id='noanim-tab-example' className='mb-3'>
          <Tab eventKey='home' title='클래스 소개'>
            <div className='detail_title'>{classdata.title}</div>
            {classdata.contents?.split('\n').map((cont, i) => (
              <p key={i} className='detail_contents'>
                {cont}
              </p>
            ))}
          </Tab>
          <Tab eventKey='profile' title='환불 정책'>
            <div className='refund'>
              원데이클래스 환불은 수업시간이 아닌 일자를 기준으로 합니다.
              <div>
                1) 결제 후 1시간 이내 취소 시 100% 환불 (결제 후 1시간 이내 취소
                시, 밤 12시 이전 취소시 100% 환불. 단, 당일 클래스는 1시간 이내
                취소 시에도 환불 불가)
              </div>
              <div>2) 클래스 6일 이전 취소 시 100% 환불</div>
              <div>3) 클래스 5일 이전 취소 시 결제 금액의 5% 배상 후 환불</div>
              <div>4) 클래스 4일 이전 취소 시 결제 금액의 10% 배상 후 환불</div>
              <div>5) 클래스 3일 이전 취소 시 결제 금액의 20% 배상 후 환불</div>
              <div>6) 클래스 2일 이전 취소 시 결제 금액의 30% 배상 후 환불</div>
              <div>
                7) 클래스 1일 이전 취소 시 환불 불가 (단, 결제 후 1시간 이내
                취소 시, 밤12시 이전 100% 환불)
              </div>
              <div>8) 클래스 당일 취소 시 환불 불가 </div>
              <div> 9) 당일 클래스 구매시 환불 불가</div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
export default Detail;
