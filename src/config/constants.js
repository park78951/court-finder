export const BEFORE_WORK = 'Before Work';
export const LOADING = 'Loading';
export const DONE = 'Done';

export const SEARCH_COURTS = 'SEARCH_COURTS';
export const UPDATE_COURTS = 'UPDATE_COURTS';
export const ADD_COURTS = 'ADD_COURTS';
export const SELECT_COURT = 'SELECT_COURT';

export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
export const OPEN_COURTADDITION = 'OPEN_COURTADDITION';
export const CLOSE_COURTADDITION = 'CLOSE_COURTADDITION';
export const NO_DATA = '정보없음';

export const INDOOR_OR_OUTDOOR = ['실내코트', '야외코트'];
export const PLAYER_LEVEL = ['상', '중상', '중', '중하', '하'];
export const TRANSPORTATION = ['버스', '지하철'];
export const TIME_DIVISION_AVAILABLE = ['1 시간', '1 일', '1 주', '1 달'];
export const TIME_DIVISION_HOURS = [...Array(24)].map((_, idx) => `${(idx).toString()} : 00`);
export const TIME_DIVISION_MINUTES = ['00', '30'];
export const EXISTENCE_NONEXISTENCE = ['유', '무'];

export const INFO_CONSTANTS = {
  locationName: '장소이름',
  web: 'WEB',
  phone: '전화번호',
  fee: '요금',
  indoorOutdoor: '실내여부',
  availableTime: '이용가능시간',
  transportation: '교통수단',
  parkingLot: '주차장유무',
  visitorLevel: '플레이어 수준',
  tags: 'Tag'
};