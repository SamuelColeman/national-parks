export const parkInfo = (state = [], action) => {
  switch(action.type) {
    case 'GET_INFO':
      return action.parkInfo;
    default:
       return state;
  }
}