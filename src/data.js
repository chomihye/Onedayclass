import knit from './img/knitting.jpg';
import fig from './img/figure.jpg';
import pic1 from './img/pic1.jpg';
import pic2 from './img/pic2.jpg';
import soap from './img/soap.jpg';
import ele from './img/ele.jpg';

const data1 = [
  {
    id: 0,
    title: '마크라메 원데이 클래스',
    price: 34000,
    img: knit,
    review: '뜨개질 처음인데 재밌어요',
  },

  {
    id: 1,
    title: '펜으로 완성하는 드로잉 클래스',
    price: 32000,
    img: fig,
    review: '취미로 배우기 좋았습니다',
  },

  {
    id: 2,
    title: '도자기로 화병만들기',
    price: 41000,
    img: pic1,
    review: '예쁜 화병 만들 수 있어서 만족해요',
  },
  {
    id: 3,
    title: '나만의 수제비누 공예 클래스',
    price: 34000,
    img: soap,
    review: '비누가 많이나와서 선물하기도 좋아요',
  },

  {
    id: 4,
    title: '일렉기타 초급 연주 클래스',
    price: 32000,
    img: ele,
    review: '처음배우지만 친절하게 잘 알려주셨습니다',
  },

  {
    id: 5,
    title: 'dslr 기초부터 배우기',
    price: 41000,
    img: pic2,
    review: '카메라 대여를 해서 배울 수 있는점이 좋아요',
  },
];

const data1_detail = [
  {
    id: 0,
    title: '마크라메 원데이 클래스',
    price: 34000,
    img: knit,
    contents:
      '공방에서 원데이클래스로 만나보실 수 있는 마크라메 파인애플 만들기\n매듭법으로 파인애플 모양의 화분을 만들고 흙 없이 자라는 식물 이오난사를 올려놓으면!\n 파인애플을 쏙- 빼닮은 화분이 완성됩니다 :)',
  },

  {
    id: 1,
    title: '펜으로 완성하는 드로잉 클래스',
    price: 32000,
    img: fig,
    contents:
      '취미로 배우는 원데이 펜드로잉 클래스입니다:)\n드로잉의 기초는 선! 선 중에서도 가장 또렷하고 거친 매력을 갖는 펜!\n 종이와 펜만 있다면 언제 어디서나 슥슥 그릴 수 있는 펜드로잉!',
  },

  {
    id: 2,
    title: '도자기로 화병만들기',
    price: 41000,
    img: pic1,
    contents:
      '아트 공방은 수채화 카페와 도자기공방을 함께 운영하고 있어요!\n공방에서 도자기, 그림, 조형 등 여러가지 수업이 기다리고 있답니다.\n예약제로 운영되고 당일취소는 불가능합니다.',
  },
  {
    id: 3,
    title: '나만의 수제비누 공예 클래스',
    price: 34000,
    img: soap,
    contents:
      '천연오일의 고유 특성이 열에 의해 변성되지 않아 피부에 좋은 영향을 줄 수 있도록 제조하는 방법입니다.\n개인의 피부타입에 따라 용도에 맞게 천연분말 에센셜오일 등을 첨가하여 기능에 충실한 비누입니다',
  },

  {
    id: 4,
    title: '일렉기타 초급 연주 클래스',
    price: 32000,
    img: ele,
    contents:
      '안녕하세요!비전공 출신인 만큼 최소한의 요소만 골라 쉽고 즐겁게 일렉기타 연주를 배울 수 있도록 구성하였습니다.\n다들 즐거운 연주 하러 오세요',
  },

  {
    id: 5,
    title: 'dslr 기초부터 배우기',
    price: 41000,
    img: pic2,
    contents:'dslr기초부터 배우기 클래스 입니다\n 카메라셋팅부터 구도, 간단한 보정과 출력까지 함께 해보아요!\n본인 카메라 없을시, 대여 가능(보증금 3만원)'
  },
];

const data2 = [
  {
    id: 0,
    title: '나만의 수제비누 공예 클래스',
    price: 34000,
    img: soap,
  },

  {
    id: 1,
    title: '일렉기타 초급 연주 클래스',
    price: 32000,
    img: ele,
  },

  {
    id: 2,
    title: 'dslr 기초부터 배우기',
    price: 41000,
    img: pic2,
  },
];

export { data1, data1_detail, data2 };
