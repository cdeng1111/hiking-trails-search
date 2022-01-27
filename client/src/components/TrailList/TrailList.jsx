import React from 'react';
import data from '../../../../data.js';
import TrailItem from '../TrailItem/TrailItem.jsx';

class TrailList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trails : data,
    }
  }

  render() {
    const { trails} = this.state;
    return (
      <div>
        <h1> Top 5 Hikes in San Francisco </h1>

        {
        trails.map((trail) => (
          <TrailItem trail={trail} key={trail.id}   />
        ))
        }
      </div>
    );
  };
}

export default TrailList;
