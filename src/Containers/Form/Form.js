import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './Form.css';
import { hasError, selectState } from '../../actions';
import { Link } from 'react-router-dom';

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ConditionalLink: 'div'
    }
  }

  handleChange = (e) => {
    const { selectState, hasError } = this.props;
    selectState(e.target.value.toUpperCase());
    if (e.target.value.length === 2) {
      this.setState({ ConditionalLink: Link });
      hasError('');
    } else {
      hasError('Invalid State');
    }
  }

  render() {
    const { selectedState, errorMsg, submitState } = this.props;
    const { ConditionalLink } = this.state;
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
            <h2 className='form_error'>{errorMsg}</h2>
          <ConditionalLink to='/parks'>
            <button className='form_button' onClick={() => submitState(selectedState)}>Submit</button>
          </ConditionalLink>
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
    selectState
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Form);