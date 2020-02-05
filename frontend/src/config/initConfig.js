import markerImg from '../assets/images/basketball_marker.png';
// const markerImg = require('@assets/images/basketball_marker.png');

export const defaultMapOptions = {
  center: {
    lat: 37.531058,
    lng: 126.929067
  },
  defaultZoom: 12,
  selectedZoom:13,
  mapStyle: {
    height: "100vh",
    width: "100%"
  },
  options: {
    disableDefaultUI: true
  },
  mapTypeId: 'roadmap',
  marker: {
    url: markerImg,
    fillColor: "#ff1919",
    fillOpacity: 1.0,
    strokeWeight: 3,
    strokeColor: '#fff',
    scale: 0.8,
  },
  infoBoxWidth: 250,
  infoBoxMarginTop: 5,
};

export const buttonTheme = {
  colors: {
    acceptance: '#0d98ba',
    cancel: '#DC143C'
  }
};

export const cancelBtnSizeOfAddForm = {
  size: 40
};

export const iconSize = {
  bodyInfo: 30,
  headerInfo_goback: 35,
  headerInfo_nav: 40,
};

export const loaderConfig = {
  sizeUnit: 'rem',
  size: 5,
  color: '#5CDB95'
};

export const refetchBtnStyle = {
  size: 'medium',
  color: 'cancel'
};

export const paginationConfig = {
  courtsPerPage: 6,
  numbersOnList: 5,
};

export const filterButton = {
  apply: {
    size: 'small',
    color: 'acceptance'
  },
  initialize: {
    size: 'small',
    color: 'cancel'
  }
};

export const routes = {
  search: '/search',
  court: '/court',
};

export const createSearchQuery = ({userInput, city, district, page }) => {
  return `/search?userInput=${userInput}&city=${city}&district=${district}&page=${page}`;
}

export const filterConfig = {
  location: {
    name: '지역별',
    detail: ['도시명', '구/군'],
    options: {
      "서울시": [
        '강남구',
        '강동구',
        '강북구',
        '강서구',
        '관악구',
        '광진구',
        '구로구',
        '금천구',
        '노원구',
        '도봉구',
        '동대문구',
        '동작구',
        '마포구',
        '서대문구',
        '서초구',
        '성동구',
        '성북구',
        '송파구',
        '양천구',
        '영등포구',
        '용산구',
        '은평구',
        '종로구',
        '중구',
        '중랑구',
      ],
    }
  },
  keywords: {
    name: '키워드별',
    details: {
      "도시명": ['서울시', '인천시', '부천시'],
      "게임종류": ['반코트', '풀코트'],
      "장소": ['학교실내', '학교야외', '공원', '고가아래', '공립체육관', '바다'],
      "실내/야외": ['실내', '야외'],
      "예약제도": ['유', '무']
    }
  },
  recommendation: {
    name: '유저추천',
    details: {
      "도시명": ['서울시', '인천시', '부천시'],
      "추천수": [5, 10, 50, 100, 200, 300, 400, 500],
      "평점": [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5],
      "검색갯수": [5, 10]
    }
  },
  level: {
    name: '수준별',
    details: {
      "도시명": ['서울시', '인천시', '부천시'],
      "정확도": [50, 60, 70, 80, 90, 100],
      "수준": ['상', '중상', '중', '중하', '하'],
      "검색갯수": [5, 10]
    }
  },
};

