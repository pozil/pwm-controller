import React, { Component } from 'react';

export default class Slider extends Component {
  render() {
    return (
      <div className='slds-form-element'>
        <label className='slds-form-element__label' htmlFor={this.props.id}>
          <span className='slds-slider-label'>
            <span className='slds-slider-label__label'>{this.props.label}</span>
            <span className='slds-slider-label__range'>{this.props.min} - {this.props.max}</span>
          </span>
        </label>
        <div className='slds-form-element__control'>
          <div className='slds-slider slds-slider_vertical'>
            <input type='range' id={this.props.id} className='slds-slider__range'
              min={this.props.min} max={this.props.max} value={this.props.value} step='1' onChange={this.props.onChange}/>
            <span className='slds-slider__value' aria-hidden='true'>{this.props.value}</span>
          </div>
        </div>
      </div>
    );
  }
}
