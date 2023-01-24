
import '../App.css';
import React, { useState } from 'react';
import List from './List';
import axios from "axios";

function SearchBox() {
  const [searchField, setSearchField] = useState("");
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(null);
  let searchedList = null;
  
  const handleChange = e => {
    setSearchField(e.target.value);
  };

  const handleChange1 = () => {
    // console.log(data);
    setSearchText(searchField);
    axios.get('https://run.mocky.io/v3/4b705c6d-e874-4cb5-8214-262416a7118f').then((r) => {
    setData(r.data);
  });
  };
  const callList = () => {
    if (data!==null) {
      searchedList = data.filter((e) => {
        // return e.label.toLowerCase() === searchText.toLowerCase()
        return e.label === searchText
      });
      // console.log(searchedList);
      return(
        <List searchedList={searchedList} searchText={searchText}></List>
      )
    }
    

  }
  React.useEffect(() => {
    
  }, [])

  return (
    <div className="App">
      <h1>React Sports Search</h1>
      <div className='div1'>
        <input type="search" className="searchbar" name="searchbar" id="search" placeholder="Search here" onChange={handleChange} />
        <button className="searchbutton" onClick={handleChange1}>Search</button>
      </div>
      <div className='div3'>
        {
          searchText === "" ? <h3 style={{color:'blue'}}>Please enter keyword in search area to get output</h3> : callList()
        }
      </div>
    </div>
  );
}

export default SearchBox;
