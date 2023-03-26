
# 🥪 My One Day

원데이 클래스 웹 사이트

# 🥐 프로젝트 소개

React를 사용한 원데이 클래스 취미 웹사이트 토이 프로젝트입니다

# 🧭 개발 기간
23.03.15 ~ 23.03.24

# 🖥 사용 기술
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"> <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=Bootstrap&logoColor=white">

# 📌기능 설명
- ✅ 원데이 클래스의 간단한 이미지, 정보 확인
- ✅ 최근 본 상품 구현
- ✅ React-slick를 사용한 후기 슬라이드
- ✅ 상세 페이지 및 redux를 이용한 장바구니 구현

# 🥯 구현 이미지
### 1️⃣Main
#### My One Day 웹사이트의 메인 페이지입니다
![원데이클래스 메인](https://user-images.githubusercontent.com/88229797/227766892-799eb8cc-03ca-46ac-af2d-d5d47fa9528c.png)
- Data.js에 데이터를 넣어 원데이 클래스들에 대한 간단한 이미지, 정보들을 확인 할 수 있도록 구현
- React-slick 슬라이드를 사용하여 간단한 후기 정보를 출력함
- localStorage를 사용하여 최근 본 상품을 최대 3개까지 출력가능하며 Navigate를 사용하여 해당이미지 클릭시 상세 페이지로 이동 할 수 있도록 구현

### 2️⃣Detail
#### 선택한 클래스의 상세 페이지입니다
![원데이클래스 상세](https://user-images.githubusercontent.com/88229797/227767091-564504bb-15d4-4de3-85ad-e8efa9ae7bec.png)
- 메인페이지에서 이미지를 클릭하면 상세페이지로 이동가능
- 날짜와 인원을 선택 할 수 있고 인원이 늘어나면 최종 예약금액도 같이 증가하게 됨
- 장바구니 담기 버튼을 누르면 장바구니 페이지에 해당 정보들이 저장됨


### 3️⃣Cart
#### 장바구니 페이지입니다
![원데이클래스 장바구니](https://user-images.githubusercontent.com/88229797/227767094-60ece370-894b-4746-b2ca-051666b371cb.png)
- 장바구니 페이지에서는 디테일 페이지에서 설정한 날짜와 인원의 값을 받아와서 표현함
- 리스트에 넣은 항목들의 최종 금액을 확인 가능함




