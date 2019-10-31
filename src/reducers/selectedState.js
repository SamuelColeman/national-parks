export const selectedState = (state = '', action) => {
  switch(action.type) {
    case 'SELECT_STATE':
      return action.selectedState;
    default:
       return state;
  }
}