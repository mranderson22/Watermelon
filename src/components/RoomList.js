import React from 'react';
import { connect } from 'react-redux';
import RoomButton from './RoomButton';

export const RoomList = (props) => {
  const rooms = props.house.rooms
  console.log(rooms)
  const roomsArr = Object.values(rooms)
  return (
    <div>
    {
        rooms.length === 0 ? (
          <div>
            <span>Add a Room</span>
          </div>
        ) : ( 
          roomsArr.map((room) => {
            console.log(room)
            return <RoomButton key={room} {...room} />
          })
        )
      }
    </div>
  )
}


export default RoomList;