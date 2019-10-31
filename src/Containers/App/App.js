import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './App.css';
import { fetchParks } from '../../apiCalls';
import { hasError, getParks } from '../../actions';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedState: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitState = async (state) => {
    const { hasError } = this.props;
    try {
      const parks = await fetchParks(state);
      getParks(parks);
    } catch (error) {
      hasError(error.message);
    }
  }

  render() {
    const { selectedState } = this.state;
    return (
      <div className="App">
        <h1>National Parks</h1>
        <h2>Select State:</h2>
        <input 
          type='text' 
          name='selectedState' 
          value={selectedState} 
          placeholder='State' 
          maxLength='2'
          onChange={this.handleChange} 
          />
        <button onClick={() => this.submitState(selectedState)}>Submit</button>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  parks: state.parks
});

export const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    hasError
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(App);