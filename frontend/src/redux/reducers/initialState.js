export const searchInfo = {
  searchedCourts: [],
  isSearching: false,
  isError: false,
  totalCourts: null,
  currentPage: null,
  selectedCourt: null,
  mouseoverList: null,
  userInput: null,
  filterInput: {
    city: "",
    district: "",
  },
};

export const initUIToggleInfo = {
  isSidebarHidden: false,
  isOpenNicknameChanger: false,
};

export const initSubmitList = {
  curPage: 1,
  locationName: null,
  web: null,
  phone: null,
  feeAmount: {
    amount: null,
    time: null
  },
  indoorOutdoor: null,
  availableTime: {
    open: null,
    close: null
  },
  transportation: {
    method: null,
    detail: null,
    stop: null
  },
  parkingLot: null,
  tags: []
};

export const userInfo = {
  userId: null,
  nickname: null,
  isLogginIn: false,
  isLoggedIn: false,
  isLogginOut: false,
  isUserMenuOpen: false,
  errorMsg: '',
};

export const prevSearchItems = {};
export const prevSearchItem = {};