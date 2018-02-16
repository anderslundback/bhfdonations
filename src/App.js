import React, { Component } from 'react';
import bhfLogo from './assets/images/bhfLogo.jpg';
import './App.css';
import DonationHandler from './donationHandler';
var _ = require('lodash');
const config = require('./config');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
    };
  }

  componentDidMount() {
    DonationHandler.fetchDonations(config.API_KEY, config.CHARITY_ID)
    .then((response) => {
      this.setState({
        donationData: response,
        isLoaded: true
      })
    });
  }

  renderHeader() {
    return (
      <header className="App-header">
        <img src={bhfLogo} className="App-logo" alt="logo" />
        <h1 className="App-title">British Heart Foundation</h1>
      </header>
    )
  }

  renderFooter() {
    return (
      <footer className="App-footer">Created by: Anders Lundback</footer>
    )
  }

  renderDonations() {
    const { error, isLoaded, donationData } = this.state;

    if (error) {
      return <div>Error fetching donations: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading donations...</div>;
    } else {
        return (
          donationData.donations.map(function(donation, index) {
            return (
              <li className="list-group-item" key={index}>
                Amount: <span className="donationAmount">{donation.amount} {donation.currencyCode}</span><br />
                <p className="lead">{donation.message}</p>
                Donated by: {donation.donorDisplayName}
              </li>
            )
          })
        )
    }
  }

  render() {
    return (
      <div className="App">
        {this.renderHeader()}
        <div className="card card-body">
          <div className="card-title"><h3>Latest donations</h3></div>
          <div className="card-text" id="donationResult">
            {this.renderDonations()}
          </div>
        </div>
        {this.renderFooter()}
      </div>
    );
  }
}

export default App;
