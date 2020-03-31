import markerImg from '../assets/images/basketball_marker.png';

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
    acceptance: '#0080FF',
    cancel: '#DC143C'
  }
};

export const iconSize = {
  bodyInfo: 30,
  headerInfo_goback: 35,
  headerInfo_nav: 40,
  review_addition: 20,
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

export const courtsPageConfig = {
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

export const requestSize = {
  reviews: 6,
  courts: 8,
};

export const routes = {
  search: '/search',
  court: '/court',
};

export const apiRoutes = {
  checkDuplicate: '/auth/validate/conflict/nickname',
};

export const infiniteScroll = {
  debouncerDelay: 100,
  scrollDiff: 150,
};

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
};

