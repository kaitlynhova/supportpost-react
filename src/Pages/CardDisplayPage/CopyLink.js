import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { Button } from '../../DesignSystem/Button';

class CopyLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Copy Card URL',
      value: window.location.href
    };
    this.updateText = this.updateText.bind(this);
  }

  updateText() {
    this.setState({ text: 'Copied!' });
  }

  render() {
    return (
      <CopyToClipboard text={this.state.value} onCopy={this.updateText}>
        <Button>{this.state.text}</Button>
      </CopyToClipboard>
    );
  }
}

export { CopyLink };
