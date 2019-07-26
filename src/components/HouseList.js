import React from 'react';
import { connect } from 'react-redux';

export const HouseList = (props) => {

  return (
    <div>
    {
        props.houses.length === 0 ? (
          <div>
            <span>Start by Adding a House!</span>
          </div>
        ) : (
          props.houses.map((house) => {
            return <div key={house.id}>{house.houseName}</div>
          })
        )
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    houses: state.houses
  }
}

export default connect(mapStateToProps)(HouseList);
