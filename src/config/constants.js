// Fetching Data
export const BEFORE_WORK = 'Before Work';
export const LOADING = 'Loading';
export const DONE = 'Done';

// Court Info Reducer
export const COMPLETE_SEARCH_COURTS = 'COMPLETE_SEARCH_COURTS';
export const SEARCHING_COURTS = 'SEARCHING_COURTS';
export const ADD_COURTS = 'ADD_COURTS';
export const CATCHING_ERROR = 'CATCHING_ERROR';
export const DELETE_COURTS = 'DELETE_SEARCHED_COURTS';
export const SELECT_COURT = 'SELECT_COURT';
export const REMOVE_SELECT_COURT = 'REMOVE_SELECT_COURT';
export const USER_INPUT = 'USER_INPUT';

// UI Controlling Reducer
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
export const OPEN_COURTADDITION = 'OPEN_COURTADDITION';
export const CLOSE_COURTADDITION = 'CLOSE_COURTADDITION';
export const TOGGLE_FILTER = 'TOGGLE_FILTER';
export const NO_DATA = '정보없음';

// Filter Info Reducer
export const ACTIVE_BUTTON = 'ACTIVE_BUTTON';
export const SEND_FILTER_DATA = 'SEND_FILTER_DATA';
export const INIT_FILTER_DATA = 'INIT_FILTER_DATA';

// Data for drop down
export const INDOOR_OR_OUTDOOR = ['실내코트', '야외코트'];
export const PLAYER_LEVEL = ['상', '중상', '중', '중하', '하'];
export const TRANSPORTATION = ['버스', '지하철'];
export const TIME_DIVISION_AVAILABLE = ['1 시간', '1 일', '1 주', '1 달'];
export const TIME_DIVISION_HOURS = [...Array(24)].map((_, idx) => `${(idx).toString()} : 00`);
export const TIME_DIVISION_MINUTES = ['00', '30'];
export const EXISTENCE_NONEXISTENCE = ['유', '무'];

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
