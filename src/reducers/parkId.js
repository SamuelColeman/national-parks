export const parkId = (state = '', action) => {
  switch(action.type) {
    case 'GET_PARK_ID':
      return action.parkId;
    default:
       return state;
  }
}