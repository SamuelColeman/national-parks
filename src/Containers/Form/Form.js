import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './Form.css';
import { fetchParks } from '../../apiCalls';
import { hasError, getParks, selectState, isLoading } from '../../actions';
import { Link } from 'react-router-dom';

export class Form extends Component {

  handleChange = (e) => {
    const { selectState } = this.props;
    selectState(e.target.value.toUpperCase());
  }

  submitState = async (state) => {
    const { hasError, getParks } = this.props;
    if (state.length === 2) {
      try {
        const parks = await fetchParks(state);
        getParks(parks);
      } catch (error) {
        hasError(error.message);
      }
    } else {
      hasError('Invalid State')
    }
  }

  render() {
    const { selectedState, errorMsg } = this.props;
    return (
      <section className='form'>
        <h1 className='form_title'>National Parks Directory</h1>
        <h2 className='form_text'>Select State:</h2>
        <input 
          className='form_input'
          type='text' 
          value={selectedState} 
          maxLength='2'
          onChange={this.handleChange} 
          />
          <h2>{errorMsg}</h2>
        <Link to='/parks'>
          <button onClick={() => this.submitState(selectedState)}>Submit</button>
        </Link>
      </section>
    )
  }
}

export const mapStateToProps = (state) => ({
  parks: state.parks,
  selectedState: state.selectedState,
  errorMsg: state.errorMsg
});

export const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    hasError,
    getParks,
    selectState
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Form);