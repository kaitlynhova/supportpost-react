import React, { Component } from 'react';
import Senator from '../../DesignSystem/Senator';

import Flex50 from '../../DesignSystem/Flex50';

class Senate extends Component {
  render() {
    const senators = this.props.senators.map((senator, i) => (
      <Senator location={this.props.location} senator={senator} key={i} />
    ));
    return (
      <Flex50>
        <h1>Senate</h1>
        <p>These people represent you, regardless of where you live in your state.</p>
        {senators}
      </Flex50>
    );
  }
}
export { Senate };
