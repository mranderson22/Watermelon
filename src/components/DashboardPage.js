import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startAddHouse } from '../actions/houses';
import HouseList from './HouseList';


const DashboardPage = () => (
  <div>
     <Link className="button" to="/create">Add House</Link>
     <HouseList />
  </div>
);

export default DashboardPage;