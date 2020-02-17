// UI Controlling
export const NO_DATA = '정보없음';

// Data for drop down
export const INDOOR_OR_OUTDOOR = ['실내코트', '야외코트'];
export const PLAYER_LEVEL = ['상', '중상', '중', '중하', '하'];
export const TRANSPORTATION = ['버스', '지하철'];
export const TIME_DIVISION_AVAILABLE = ['1 시간', '1 일', '1 주', '1 달'];
export const TIME_DIVISION_HOURS = [...Array(24)].map((_, idx) => `${(idx).toString()} : 00`);
export const TIME_DIVISION_MINUTES = ['00', '30'];
export const EXISTENCE_NONEXISTENCE = ['유', '무'];

// Axios & Request URL
export const LOCAL_HOST = 'http://localhost:3000/api';
export const MAIN_HOST = 'http://13.125.124.214/api';
export const WAITING_TIME = 4000;

// AUTH
export const KAKAO_API_URL_PROFILE = '/v2/user/me';

// alert
export const FILTER_APPLIED = '필터가 적용 되었습니다.';

// Placeholders
export const PLACEHOLDER_TRANSPORT_STOP = 'ex) 정거장 / 역이름';
export const PLACEHOLDER_TRANSPORT_DETAIL = 'ex) 3004번 / 2호선';
export const PLACEHOLDER_WEB_URL = 'ex) https://www.court-finder.com';
export const PLACEHOLDER_PHONE_NUM = 'ex) 02-7777-7777';
export const PLACEHOLDER_PARKING_LOT = 'ex) 탄천 주차장 이용 / 불가';
export const PLACEHOLDER_COURT_NAME = 'ex) 해운대 농구코트';
export const PLACEHOLDER_FEE_AMOUNT = 'ex) 무료 / 3000' ;

export const FILTER_OPTIONS_TYPES = {
  "도시명": 'city',
  "구/군": 'gu_nm',
  "게임종류": 'kindOfGame',
  "장소": 'place',
  "실내/야외": 'in_out',
  "예약제도": 'must_reservation',
  "추천수": 'recommendation',
  "평점": 'grades',
  "검색갯수": 'numOfShows',
  "정확도": 'accuracy',
  "수준": 'level'
};
