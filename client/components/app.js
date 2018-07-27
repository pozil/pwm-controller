import React, { Component } from 'react';
import AppHeader from './app-header';
import Slider from './slider';
import Servo from '../model/servo';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: [
        {id:'channel-0', value:500},
        {id:'channel-1', value:500},
        {id:'channel-2', value:500},
        {id:'channel-3', value:500},
        {id:'channel-4', value:500},
        {id:'channel-5', value:500},
      ]
    };
    this.updateTimeout = null;
  }

  onChangeChannel = (event) => {
    const {id, value} = event.target;
    // Update UI
    const { channels } = this.state;
    const updatedChannels = channels.map(channel => {
      if (channel.id == id) {
        channel.value = value;
      }
      return channel;
    });
    this.setState({channels: updatedChannels});
    // Update server
    let { updateTimeout } = this;
    if (updateTimeout) {
        clearTimeout(updateTimeout);
    }
    updateTimeout = window.setTimeout(() => {
        Servo.update({
          id: parseInt(id.substring(8)),
          value: parseInt(value),
        });
      },
      200
    );
    this.updateTimeout = updateTimeout;
  }

  render() {
    return (
      <div>
        <AppHeader />
        <div className='slds-m-top_xx-large'>
          <div className='slds-grid slds-wrap slds-m-around_large'>
            {this.state.channels.map(channel => (
              <div className='slds-col slds-size_2-of-12' key={channel.id}>
                <Slider id={channel.id} label={channel.id} min='0' max='1000' value={channel.value} onChange={this.onChangeChannel}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
