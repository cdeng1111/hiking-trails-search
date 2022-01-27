import React from 'react';
import axios from 'axios';
// import landendtrail from './ViewOfLandsEndTrail.png';

class TrailItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSaved: false,
    };
    this.handleSaveTrail = this.handleSaveTrail.bind(this);
  }
  handleSaveTrail(event) {
    event.preventDefault();
    console.log(event.target.value)
    axios.post('./trails', this.props.trail )
    this.setState({isSaved: true})
  }

  render() {
    const {trail, showSavedListForm} = this.props;
    return (
      <div className='box'>
        <div className='pic'>
          <img src={trail.url} alt=''/>
        </div>
        <div className='trail-desc'>
            <div className='trail-text'>
              <h4>{trail.name} </h4>
              <p>{trail.descriptions}</p>
              <p>Distance:  {trail.distance}</p>
              <p>Elevation change:  {trail.elevationChange}</p>
              <p>Hiking time:  {trail.hikingTime}</p>
            </div>
            <div>
            {
              !showSavedListForm &&
              <button className='btn btn-save-trail' onClick={this.handleSaveTrail} > {this.state.isSaved ? 'Saved' : 'Save Trail'}</button>
            }
            </div>
        </div>

      </div>
    );
  }
}

export default TrailItem;
