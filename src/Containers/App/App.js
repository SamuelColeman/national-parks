import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './App.css';
import { fetchParks } from '../../apiCalls';
import { hasError, getParks } from '../../actions';
import { Route, Link } from 'react-router-dom';
import ParksContainer from '../ParksContainer/ParksContainer';
import Form from '../Form/Form';
import ParkCard from '../ParkCard/ParkCard';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/parks' render={() => <ParksContainer />} />
        <Route exact path='/' render={() => <Form />} />
        <Route exact path='/parks/:id' render={({ match }) => {
            let { parks } = this.props;
            const { id } = match.params;
            const matchPark = parks.find(park => park.id === id);
            return (
              <ParkCard {...matchPark} />
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
    getParks
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(App);