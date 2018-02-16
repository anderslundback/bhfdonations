import React, { Component } from 'react';
import bhfLogo from './assets/images/bhflogo140x140.jpg';
import './App.css';
import './config.js';
import request from './request.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      donations: [],
      CHARITY_ID: 183092, // Charity ID, default: BHF
      API_KEY: '' // Enter your API KEY here
    };
  }

  renderHeader() {
    return (
      <header className="App-header">
        <img src={bhfLogo} className="App-logo" alt="logo" />
        <h1 className="App-title">British Heart Foundation</h1>
      </header>
    )
  }

  renderDonations() {
    const { error, isLoaded, donations } = this.state;
    if(error) {
      return <div>Error fetching donations: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading donations...</div>;
    } else {
      console.log(JSON.stringify(donations));
    }
  }

  fetchDonations(apiKey, charityId) {
    return request({
      url: `/${apiKey}/v1/charity/${charityId}/donations`,
      method: 'GET'
    });
  }
  
  componentDidMount() {
    // To do: render donations elegantly, for now let's console log them
    console.log(this.fetchDonations(this.state.API_KEY, this.state.CHARITY_ID));
  }


  render() {
    return (
      <div className="App">
        {this.renderHeader()}

        <div className="card card-body">
          <div className="card-title"><h3>Latest donations</h3></div>
          <div className="card-text" id="donationResult">
            {/* To do: Display donations here */}
            {this.renderDonations()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
