import React, { Component } from 'react';
import { QrReader } from 'react-qr-reader';

class QRScanner extends Component {
  state = {
    result: 'No QR code detected',
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
          />
        </div>
        <p>{this.state.result}</p>
      </div>
    );
  }
}

export default QRScanner;
