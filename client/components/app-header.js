import React, { Component } from 'react';

export default class AppHeader extends Component {
  render() {
    return (
      <header className='slds-global-header_container'>
        <div className='slds-context-bar'>
          <div className='slds-context-bar__primary'>
            <div className='logo'></div>
            <span className='slds-context-bar__label-action slds-context-bar__app-name'>
              <span className='slds-truncate'>PWM Controller</span>
            </span>
          </div>
        </div>
      </header>
    );
  }
}
