export const parkInfo = (state = [], action) => {
  switch(action.type) {
    case 'GET_VISITOR_CENTERS':
      return action.parkInfo;
    case 'GET_EVENTS':
    	return action.parkInfo;
    default:
       return state;
  }
}