export const searchInfo = {
  searchedCourts: [],
  isSearching: false,
  isError: false,
  totalCourts: null,
  currentPage: null,
  selectedCourt: null,
  mouseoverList: null,
};

export const additionInfo = {
  addedInfo:{}
};

export const initUIToggleInfo = {
  isSidebarHidden: false,
  courtAdditionFlag: false,
};

export const initInputInfo = {
  userInput: null,
  filterInput: {
    city: "",
    district: "",
  }
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

export const prevSearchItems = {};
export const prevSearchItem = {};