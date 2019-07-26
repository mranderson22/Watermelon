import React from 'react';
import { connect } from 'react-redux';
import { startAddHouse } from '../actions/houses';

export class AddHousePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      houseName: ''
    };
  }

  onHouseNameChange = (e) => {
    const houseName = e.target.value;
    this.setState(() => ({ houseName }))
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.startAddHouse({
      houseName: this.state.houseName
    });
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input 
            type="text"
            placeholder="House Name"
            value={this.state.houseName}
            onChange={this.onHouseNameChange}
          />
          <div>
            <button className="button">Add House</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddHouse: (house) => dispatch(startAddHouse(house))
});

export default connect(undefined, mapDispatchToProps)(AddHousePage)