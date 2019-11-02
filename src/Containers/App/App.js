import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './App.css';
import { fetchParkInfo } from '../../apiCalls';
import { hasError, getVisitorCenters, getEvents } from '../../actions';
import { Route, Link } from 'react-router-dom';
import ParksContainer from '../ParksContainer/ParksContainer';
import Form from '../Form/Form';
import ParkCard from '../ParkCard/ParkCard';

export class App extends Component {

  displayParkInfo = async (code, e) => {
    const { hasError, getVisitorCenters, getEvents } = this.props;
    if (e.target.name === 'VisitorCenters') {
      try {
        const centers = await fetchParkInfo(code, e.target.name);
        getVisitorCenters(centers);
      } catch (error) {
        hasError(error.message);
      }
    } else if (e.target.name === 'Events') {
      try {
        const events = await fetchParkInfo(code, e.target.name);
        getEvents(events);
      } catch (error) {
        hasError(error.message);
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/parks' render={() => <ParksContainer displayParkInfo={this.displayParkInfo} />} />
        <Route exact path='/' render={() => <Form />} />
        <Route exact path='/parks/:id' render={({ match }) => {
            let { parks } = this.props;
            const { id } = match.params;
            const matchPark = parks.find(park => park.id === id);
            return (
              <ParkCard {...matchPark} page={true} displayParkInfo={this.displayParkInfo}/>
          )}} />
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  parks: state.parks
});

export const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    hasError,
    getVisitorCenters,
    getEvents
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(App);