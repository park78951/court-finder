export const searchInfo = {
  searchedCourts: [],
  isSearching: false,
  isError: false,
  userInput: null
};

export const selectionInfo = {
  selectedCourt: null
};

export const additionInfo = {
  addedInfo:{}
};

export const initUIToggleInfo = {
  isSidebarHidden: false,
  courtAdditionFlag: false,
  filterFlag: false
};

export const initFilterInfo = {
  activeBtn: 'location',
  filteredData: {}
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