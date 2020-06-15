import React from 'react';

const Filter = (props) =>
  <div>
    <input type="checkbox" onChange={() => props.handleHide()}/>Hide completed
  </div>

export default Filter;
