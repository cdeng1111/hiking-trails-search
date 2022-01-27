import React from 'react';
import Search from '../Search/Search.jsx';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHomeForm: true,
      showSearchForm: false,
    };
this.handleExplore = this.handleExplore.bind(this);
  }

handleExplore(event){
  this.setState({showHomeForm: false, showSearchForm:true});
}

  render() {
    const {showHomeForm, showSearchForm} = this.state;
  return (
    <div>
    {showHomeForm &&
    <div className='home-container'>
          <div className='welcome-msg'>Welcome to the Hiking Trails World!</div>
          <div className='welcome-sub-msg'>Your trail is waiting. Get on your way.</div>
          <br></br><button  className='btn btn-light btn-sm' onClick={this.handleExplore} >Explore Trails</button>
  </div>
  }
    {showSearchForm && <Search /> }
    </div>

  );
  }
};



export default Home;
