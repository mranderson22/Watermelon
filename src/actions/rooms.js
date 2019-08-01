import { database } from '../firebase/firebase';
import { startSetHouses } from './houses';

export const addRoom = (house, room, id) => ({
  type: 'ADD_ROOM',
  house,
  room,
  id
})

export const startAddRoom = (roomData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const house = roomData.houseID;
    const {
      roomName = ''
      
    } = roomData;
    const room = { roomName };

    return database.ref(`users/${uid}/houses/${house}/rooms`).push(room).then((ref) => {
      dispatch(addRoom(
        house,
        room,
        ref.key
      ));
    });
  };
}; 