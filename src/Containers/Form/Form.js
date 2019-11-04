import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './Form.css';
import { hasError, getParks, selectState, isLoading } from '../../actions';
import { Link } from 'react-router-dom';

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ConditonalLink: 'div'
    }
  }

  handleChange = (e) => {
    const { selectState, hasError } = this.props;
    selectState(e.target.value.toUpperCase());
    if (e.target.value.length === 2) {
      this.setState({ ConditonalLink: Link });
      hasError('');
    } else {
      hasError('Invalid State');
    }
  }

  render() {
    const { selectedState, errorMsg, submitState } = this.props;
    const { ConditonalLink } = this.state;
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
        <ConditonalLink to='/parks'>
          <button onClick={() => submitState(selectedState)}>Submit</button>
        </ConditonalLink>
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
    selectState,
    isLoading
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Form);