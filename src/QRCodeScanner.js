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

  toggleCamera = () => {
    const newFacingMode =
      this.state.facingMode === 'user' ? 'environment' : 'user';
    this.setState({
      facingMode: newFacingMode,
    });
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
            facingMode={this.state.facingMode}
          />
        </div>
        <p>{this.state.result}</p>
        <button onClick={this.toggleCamera}>
          Toggle Camera ({this.state.facingMode === 'user' ? 'Front' : 'Rear'})
        </button>
      </div>
    );
  }
}

export default QRScanner;
