
export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_HOUSE':
      return [
        action.house,
        ...state
      ];
      case 'ADD_ROOM':
        return state.map((house) => {
          if (action.house === house.id) {
            return {
              ...house,
              rooms: {
                ...house.rooms,
                [action.id] : action.room
              }
            }
          } else {
            return house
          }
        })
      case 'SET_HOUSES':
        return action.houses;
      default:
        return state;
  }
}