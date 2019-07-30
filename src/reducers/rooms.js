export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_ROOM':
    return [
      action.room,
      ...state
    ];
    default:
      return state;
  }
}