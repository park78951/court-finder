const defaultMapOptions = {
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
  }
};

const buttonTheme = {
  colors: {
    acceptance: '#0d98ba',
    cancel: '#DC143C'
  }
};

const iconSize = {
  bodyInfo: 30
};

const routes = {
  search: '/search',
  courtInfo: '/courtInfo',
  review: '/courtInfo/review'
};

export { 
  defaultMapOptions,
  buttonTheme,
  iconSize,
  routes
};
