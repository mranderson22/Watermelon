import React from 'react';
import { useSelector } from 'react-redux';
import RoomButton from './RoomButton';

export const HouseList = ({ houseID }) => {
  const rooms = useSelector(state => state.houses)

  return (
    <div>
    {
        rooms.length === 0 ? (
          <div>
            <span>Start by Adding a House!</span>
          </div>
        ) : (
          rooms.map((room) => {
            return <RoomButton key={room.id} {...room} />
          })
        )
      }
    </div>
  )
}

export default HouseList;