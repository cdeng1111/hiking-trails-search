import React from 'react';
import axios from 'axios';
import TrailList from '../TrailList/TrailList.jsx';
import SavedList from '../SavedList/SavedList.jsx';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       area: 'San Francisco',
       showTrailListForm: false,
       showSavedListForm: false,
       savedList: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSavedList = this.handleSavedList.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange(event) {
    console.log(' event.target.value.',  event.target.value)
    console.log(' event.target.id.',event.target.id)
    this.setState({
      [event.target.id]: event.target.value,
    });
  }
  handleSearch(event) {
    event.preventDefault();
    this.setState({showTrailListForm: true,showSavedListForm: false })

  }
  handleSavedList(event){
    event.preventDefault();
    axios.get('/trails')
    .then (response => {
      console.log('response fro axios get:', response.data)
      this.setState({
        savedList:response.data,
        showTrailListForm: false,
        showSavedListForm: true
    })
    })
    .catch(error => {
      console.log(error);
      this.setState({error});
    })
  }

  render() {
    const {showTrailListForm, showSavedListForm, savedList} = this.state;
    return (
      <div>
        <div className='search-container'>
        <div className='search-title'>Hiking Trails Search</div>
        <div className='search-area' >
        <select className='select-area' onChange={this.handleChange} id="area" >
          <option value="San Francisco">San Francisco</option>
          <option value="San Jose">San Jose</option>
        </select>

        <button className='btn'  onClick={this.handleSearch} >Search</button>

        <button className='btn' onClick={this.handleSavedList}>Saved Trails</button>
        </div>
        </div>
       {
        showTrailListForm && <TrailList />
       }
      <div>
      </div>
       {
        showSavedListForm && <SavedList trails={savedList} showSavedListForm={showSavedListForm} />
       }
      <div>
      </div>


      </div>
    );
  }
}

export default Search;
