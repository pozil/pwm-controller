import React, { Component } from 'react';

export default class Slider extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      min: props.min,
      max: props.max,
      value: props.value
    };
  }

  editRange = () => {
    let min = parseInt(prompt('New minimum value.\nLeave blank to keep current value: '+ this.state.min), 10);
    if (isNaN(min)) {
      min = this.state.min;
    }
    let max = parseInt(prompt('New maximum value.\nLeave blank to keep current value: '+ this.state.max), 10);
    if (isNaN(max)) {
      max = this.state.max;
    }
    this.setState({ min, max });
  }

  setValue = () => {
    let value = parseInt(prompt('New position.\nCurrent value: '+ this.state.value), 10);
    if (!isNaN(value)) {
      this.setState({ value });
      const event = {
        target: {
          id: this.props.id,
          value
        }
      };
      this.props.onChange(event);
    }
  }

  onChangeValue = event => {
    this.setState({ value: event.target.value });
    this.props.onChange(event);
  }
  
  render() {
    const { state, props } = this;
    return (
      <div className='slds-form-element'>
        <label className='slds-form-element__label' htmlFor={props.id}>
          <span className='slds-slider-label'>
            <span className='slds-slider-label__label'>{props.label}</span>
            <span className='slds-slider-label__range'>
              {state.min} - {state.max}
              <button onClick={this.editRange} className="icon">&#9881;</button>
              <button onClick={this.setValue} className="icon">&#128204;</button>
            </span>
          </span>
        </label>
        <div className='slds-form-element__control'>
          <div className='slds-slider slds-slider_vertical'>
            <input type='range' id={props.id} className='slds-slider__range'
              min={state.min} max={state.max} value={state.value} step='1' onChange={this.onChangeValue}/>
            <span className='slds-slider__value' aria-hidden='true'>{state.value}</span>
          </div>
        </div>
      </div>
    );
  }
}
