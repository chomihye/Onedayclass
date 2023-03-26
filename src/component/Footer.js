import React from 'react';

function Footer(props) {
    return (
      <footer className='footer'>
        <div className='footer_container'>
          <div className='Logo'>My One Day</div>
          <div className='footer_all'>
            <div className='footer_menu'>
              <span>이용약관</span>
              <span>개인정보 처리방침</span>
              <span>사업자 정보확인</span>
            </div>
            <div className='footer_info'>
              <div>주식회사 마이원데이 | 사업자등록번호 : 2341-536-2415</div>
              <div>주소 : 서울시 강남구 50번길 68 </div>
              <div>Tel : 02-1456-2466(평일 10:00 - 20:00 ) </div>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer;