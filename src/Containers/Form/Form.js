import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './Form.css';
import { fetchParks } from '../../apiCalls';
import { hasError, getParks, selectState } from '../../actions';
import { Link } from 'react-router-dom';

export class Form extends Component {

  handleChange = (e) => {
    const { selectState } = this.props;
    selectState(e.target.value);
  }

  submitState = async (state) => {
    const { hasError, getParks } = this.props;
    try {
      const parks = await fetchParks(state);
      getParks(parks)
    } catch (error) {
      hasError(error.message);
    }
  }

  render() {
    const { selectedState } = this.props;
    return (
      <section>
        <h1>National Parks</h1>
        <h2>Select State:</h2>
        <input 
          type='text' 
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
  parks: state.parks,
  selectedState: state.selectedState
});

export const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    hasError,
    getParks,
    selectState
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Form);