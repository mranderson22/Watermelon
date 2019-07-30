import React from 'react';
import { connect } from 'react-redux';
import { startAddRoom } from '../actions/rooms';

export class AddRoomPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      roomName: ''
    };
  }

  onRoomNameChange = (e) => {
    const roomName = e.target.value;
    this.setState(() => ({ roomName }))
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.startAddRoom({
      roomName: this.state.roomName,
      houseID: this.props.location.state.houseID
    });
    this.props.history.goBack();
  };

  render() {
    return (
      <div>
      <form onSubmit={this.onSubmit}>
      <input 
        type="text"
        placeholder="Room Name"
        value={this.state.roomName}
        onChange={this.onRoomNameChange}
      />
      <div>
        <button className="button">Add Room</button>
      </div>
    </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddRoom: (room) => dispatch(startAddRoom(room))
});

export default connect(undefined, mapDispatchToProps)(AddRoomPage);