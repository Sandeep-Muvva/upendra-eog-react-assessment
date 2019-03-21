import * as actions from "../actions";

const initialState = {
  loading: false,
  latitude: null,
  longitude:null
};
const startLoading = (state, action) => {
  return { 
      ...state,
       loading: true
     };
};

const droneDataReceived = (state, action) => {
  const latitude = action.curr.latitude;
  const longitude = action.curr.longitude;
  return { ...state,
     loading:false,
     latitude:latitude,
     longitude:longitude
   };
}


const handlers = {
  [actions.FETCH_DRONE]: startLoading,
  [actions.DRONE_DATA_RECEIVED]: droneDataReceived
};

export default (state = initialState, action) => {
  const handler = handlers[action.type];
  if (typeof handler === "undefined") return state;
  return handler(state, action);
};