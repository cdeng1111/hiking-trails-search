import React from 'react';
import TrailItem from '../TrailItem/TrailItem.jsx';

class SavedList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const {trails, showSavedListForm}= this.props;
    console.log('trails from saveelist', trails)
    if (trails.length) {
    return (
      <div>
        <h1> Your Saved Hikes List </h1>
        {
        trails.map((trail) => (
          <TrailItem trail={trail} key={trail.id} showSavedListForm={showSavedListForm}  />
        ))
        }
      </div>
    );
  } else {
      return (
        <div>
           <h3> No Hike Saved in Your Profile. </h3>
        </div>
      )
      }
}
}

export default SavedList;
