export const parks = (state = [], action) => {
  switch(action.type) {
    case 'GET_PARKS':
      return action.parks;
    default:
      return state;
  }
}