import React, { Component } from 'react';
import Senator from '../../DesignSystem/Senator';

class Senate extends Component {
  render() {
    const senators = this.props.senators.map((senator, i) => <Senator senator={senator} key={i} />);
    return (
      <div>
        <h1>Senate</h1>
        {senators}
      </div>
    );
  }
}
export { Senate };
