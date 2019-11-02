import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './App.css';
import { fetchParkInfo } from '../../apiCalls';
import { hasError, getInfo, getInfoName } from '../../actions';
import { Route, Link } from 'react-router-dom';
import ParksContainer from '../ParksContainer/ParksContainer';
import Form from '../Form/Form';
import ParkCard from '../ParkCard/ParkCard';
import InfoContainer from '../InfoContainer/InfoContainer';

export class App extends Component {

  displayParkInfo = async (code, e) => {
    const { hasError, getInfo, getInfoName } = this.props;
    try {
      getInfoName(e.target.name);
      const info = await fetchParkInfo(code, e.target.name);
      getInfo(info);
    } catch (error) {
      hasError(error.message);
    }
  }

  render() {
    const { infoName } = this.props;
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
        <Route exact path={`/parks/:id/${infoName}`} render={({ match }) => {
            let { parks } = this.props;
            const { id } = match.params;
            const matchPark = parks.find(park => park.id === id);
            return (
              <InfoContainer />
          )}} />
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  parks: state.parks,
  infoName: state.infoName
});

export const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    hasError,
    getInfo,
    getInfoName
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(App);