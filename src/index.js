import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BusinessSearch from './requests/business_list';
import BusinessList from './components/business_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      businessList: []
    };

    this.getBusinessList();
  }

  getBusinessList() {
    BusinessSearch((busObj) => {
      let busList = busObj.data.businesses;
      this.setState({
        businessList: busList
      }, () => {console.log('list of businesses in state is: ', this.state.businessList);})
    })
  }

  render() {
    return (
      <div>
        <h2>OL Business Details</h2>
        <BusinessList
        businessList={this.state.businessList} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />
  , document.querySelector('.entry')
);