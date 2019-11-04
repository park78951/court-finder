export const defaultMapOptions = {
  center: {
    lat: 37.531058,
    lng: 126.929067
  },
  zoom: 14,
  mapStyle: {
    height: "100vh",
    width: "100%"
  },
  options: {
    disableDefaultUI: true
  },
  mapTypeId: 'roadmap'
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
  size: 4,
  color: '#505050'
};

export const refetchBtnStyle = {
  size: 'medium',
  color: 'cancel'
};

export const routes = {
  search: '/search',
  courtInfo: '/courtInfo',
  review: '/courtinfo/review',
  infoDetail: '/courtinfo/detail'
};
