import React, { Component } from 'react';
import Representative from '../../DesignSystem/Representative';

class House extends Component {
  render() {
    const representatives = this.props.representatives.map((representative, i) => (
      <Representative representative={representative} key={i} />
    ));
    return (
      <div>
        <h1>House</h1>
        {representatives}
      </div>
    );
  }
}
export { House };
