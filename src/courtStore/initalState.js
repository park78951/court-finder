export const initCourtsInfo = {
  searchedCourts: [],
  isSearching: false,
  isError: false,
  selectedCourt: null,
  addedInfo:{}
};

export const initUIToggleInfo = {
  isSidebarHidden: false,
  courtAdditionFlag: false
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