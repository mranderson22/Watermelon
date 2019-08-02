import React from 'react';
import { connect } from 'react-redux';

export class Room extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { house } = this.props;
    return (
      <div>Room</div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  house: state.houses.find((house) => props.location.state.houseID === house.id)
})

export default connect(mapStateToProps)(Room);