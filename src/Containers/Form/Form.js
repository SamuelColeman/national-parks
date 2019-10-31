import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './Form.css';
import { fetchParks } from '../../apiCalls';
import { hasError, getParks } from '../../actions';
import { Link } from 'react-router-dom';

export class Form extends Component {
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
      <section>
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
        <Link to='/parks'>
          <button onClick={() => this.submitState(selectedState)}>Submit</button>
        </Link>
      </section>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(Form);