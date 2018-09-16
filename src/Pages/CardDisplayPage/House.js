import React, { Component } from 'react';
import Representative from '../../DesignSystem/Representative';

import Flex50 from '../../DesignSystem/Flex50';

class House extends Component {
  render() {
    const representatives = this.props.representatives.map((representative, i) => (
      <Representative location={this.props.location} representative={representative} key={i} />
    ));
    return (
      <Flex50>
        <h1>House</h1>
        <p>
          These people represent you if you are in their district.{' '}
          <a href="https://www.house.gov/representatives/find-your-representative" target="noopener _blank">
            Find your district here
          </a>
        </p>
        {representatives}
      </Flex50>
    );
  }
}
export { House };
