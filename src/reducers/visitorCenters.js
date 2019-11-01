export const visitorCenters = (state = [], action) => {
  switch(action.type) {
    case 'GET_VISITOR_CENTERS':
      return action.visitorCenters;
    default:
       return state;
  }
}