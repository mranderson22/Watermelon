import { database } from '../firebase/firebase';

//ADD_ROOM
export const addRoom = (id, room) => ({
  type: 'ADD_ROOM',
  id, 
  room
});

export const startAddRoom = (roomData = {}) => {
  return (dispatch, getState) => {

    const uid = getState().auth.uid;
    const house = roomData.houseID;
    const {
      roomName = ''
  
    } = roomData;
    const room = { roomName };

    return database.ref(`users/${uid}/houses/${house}/rooms`).push(room).then(() => {
      dispatch(addRoom({
        id: house,
        ...room
      }));
    });
  };
}; 