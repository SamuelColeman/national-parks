export const parks = (state = [], action) => {
  switch(action.type) {
    case 'GET_MOVIES':
      return action.parks;
    default:
      return state;
  }
}