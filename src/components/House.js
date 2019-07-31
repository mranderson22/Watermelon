import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import RoomList from './RoomList';

export class House extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { house } = this.props;
    
    return (
      <div>
        {`this is ${house.houseName}`}
        <div>
          <Link 
            className="button" 
            to={{
              pathname: "/addRoom",
              state: {
                houseID: house.id
              }
            }}>
            Add Room
          </Link>
          <RoomList house={house} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  house: state.houses.find((house) => house.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(House);