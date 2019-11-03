export const parkId = (state = 0, action) => {
  switch(action.type) {
    case 'GET_PARK_ID':
      return action.parkId;
    default:
       return state;
  }
}