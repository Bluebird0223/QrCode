import React, { Component } from 'react';
import { QrReader } from 'react-qr-reader';

class QRScanner extends Component {
  state = {
    result: 'No QR code detected',
    facingMode: 'environment', // Default camera mode (rear camera)
  };

  handleScan = (data) => {
    if (data) {
      this.setState({
        result: data,
      });
    }
  };

  handleError = (error) => {
    console.error(error);
  };

  render() {
    return (
      <div>
        <h1>QR Code Scanner</h1>
        <div>
          <QrReader
            delay={300}
            onError={this.handleError}
            onScan={this.handleScan}
            style={{ width: '100%' }}
            facingMode={'environment'} // Set to rear camera only
          />
        </div>
        <p>{this.state.result}</p>
      </div>
    );
  }
}

export default QRScanner;
