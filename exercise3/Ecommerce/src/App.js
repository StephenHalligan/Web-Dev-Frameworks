import React from 'react';
import ItemDisplay from './components/ItemDisplay';
import data from './data.json'

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      items: data.items,
      productSearchString: "",
    }
  }

  onSearchFieldChange = (event) => {

    this.setState({ productSearchString: event.target.value });
  }

  render()
  {
    let output =
      <>
      <center>
        <hr></hr>
          <br></br>
            <div id = "searchBar">
              Search: <input type="text" onChange={ this.onSearchFieldChange } value={ this.state.productSearchString }/>
            </div>
          <br></br>
        <hr></hr>
      </center>
        <ItemDisplay
          items={ this.state.items.filter((item) => item.name.includes(this.state.productSearchString)) }
          />
      </>

    return (
      <>
        { output }
      </>
    )
  }
}

export default App;