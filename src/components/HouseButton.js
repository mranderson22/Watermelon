import React from 'react';
import { Link } from 'react-router-dom';

const HouseButton = ({ houseName, id }) => (
  <Link to={`house/${id}`}>
    <div>
      <h3>{houseName}</h3>
    </div>
  </Link>
);

export default HouseButton;