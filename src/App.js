import React, { Component } from 'react';
import bhfLogo from './assets/images/bhfLogo.jpg';
import './styles/App.css';
import './styles/donation.css';
import DonationHandler from './js/donationHandler';
import config from './js/config';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
    };
  }

  componentWillMount() {
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
        <h1 className="App-title">British Heart Foundation donations</h1>
      </header>
    )
  }

  renderFooter() { return <footer className="App-footer">Created by: Anders Lundback</footer> }

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
              <div className="list-group-item donation-container" key={index}>
                  <span className="donationAmount">{donation.amount} {donation.currencyCode}</span><br />
                  <p className="donation-message">{donation.message}</p>
                  <img className="donation-donator-image" alt="donator profile" src={donation.imageUrl}/>
                  <p className="donation-donator"> {donation.donorDisplayName}</p>
              </div>
            )
          })
        )
    }
  }

  render() {
    return (
      <div className="App-wrapper">
        {this.renderHeader()}
        {this.renderDonations()}
        {this.renderFooter()}
      </div>
    );
  }
}

export default App;
