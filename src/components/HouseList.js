import React from 'react';
import { useSelector } from 'react-redux';
import HouseButton from './HouseButton';

export const HouseList = () => {
  const houses = useSelector(state => state.houses)

  return (
    <div>
    {
        houses.length === 0 ? (
          <div>
            <span>Start by Adding a House!</span>
          </div>
        ) : (
          houses.map((house) => {
            return <HouseButton key={house.id} {...house} />
          })
        )
      }
    </div>
  )
}

export default HouseList;
