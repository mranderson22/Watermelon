
export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_HOUSE':
      return [
        action.house,
        ...state
      ];
      case 'SET_HOUSES':
        return action.houses;
      default:
        return state;
  }
}