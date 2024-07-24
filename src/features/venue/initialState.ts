const emptyVenue = {
  id:null,
  name:'',
  internalName:'',
  description:null,
  liveFlag:null,
  demoFlag:null,
  address1:'',
  address2:'',
  address3:null,
  city:'',
  county:'',
  postcode:'',
  country:'',
  timezoneOffset:'',
  locale:'',
  timeZone:'',
  webSettings:{
    id:null,
    venueId:null,
    bannerImage:'',
    backgroundColour:'',
    primaryColour:'',
    primaryColourHover:'',
    navBackgroundColour:'',
  },
  ccy:'',
  ccySymbol:'',
  currency:'',
};

const storedData = localStorage.getItem('venue');
const venue = storedData
  ? JSON.parse(storedData)
  : emptyVenue;

export const initialState = {
  data: venue,
};
