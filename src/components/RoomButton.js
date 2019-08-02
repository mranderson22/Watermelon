import React from 'react';
import { Link } from 'react-router-dom';

const RoomButton = ({ roomName, houseID }) => {

  return (
    <Link to={{
      pathname: `/room/${roomName}`,
      state: {
        houseID: houseID
      }
    }}>
      <div>
        <h3>
          {roomName}
        </h3>
      </div>
    </Link>
  )
};

export default RoomButton;