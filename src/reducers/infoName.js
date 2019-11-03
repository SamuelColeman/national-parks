export const infoName = (state = 'error', action) => {
  switch(action.type) {
    case 'GET_INFO_NAME':
      return action.infoName;
    default:
       return state;
  }
}