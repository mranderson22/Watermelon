import { database } from '../firebase/firebase';

// ADD_HOUSE
export const addHouse = (house) => ({
  type: 'ADD_HOUSE',
  house
});

export const startAddHouse = (houseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      houseName = ''
    } = houseData;
    const house = { houseName };

    return database.ref(`users/${uid}/houses`).push(house).then((ref) => {
      dispatch(addHouse({
        id: ref.key,
        ...house
      }));
    });
  };
};

// SET_HOUSES
export const setHouses = (houses) => ({
  type: 'SET_HOUSES',
  houses
});

export const startSetHouses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/houses`).once('value').then((snapshot) => {
      const houses  = [];

      snapshot.forEach((childSnapshot) => {
        houses.push({
          id: childSnapshot.key,
          ...childSnapshot.val(),
        });
      });

      dispatch(setHouses(houses));
    });
  };
};