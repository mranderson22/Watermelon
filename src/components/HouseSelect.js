import React from 'react';
import { Link } from 'react-router-dom';
import HouseList from './HouseList';


const HouseSelect = () => (
  <div>
     <Link className="button" to="/create">Add House</Link>
     <HouseList />
  </div>
);

export default HouseSelect;