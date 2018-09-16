import React, { Component } from 'react';
import { Button } from '../../DesignSystem/Button';

class SocialLinks extends Component {
  socialLink(name, handle) {
    return this.props.congressperson[handle] ? (
      <a href={`https://www.${name}.com/${this.props.congressperson[handle]}`} target="noopener _blank">
        <Button> {name} </Button>
      </a>
    ) : (
      ''
    );
  }

  render() {
    return (
      <div>
        {this.socialLink('Facebook', 'facebook_account')}
        {this.socialLink('Twitter', 'twitter_id')}
        {this.socialLink('Youtube', 'youtube_id ')}
        <a
          href={`https://www.google.com/search?q=${this.props.congressperson.name.replace(/\s+/g, '%20')}`}
          target="noopener _blank"
        >
          <Button>Google Them!</Button>
        </a>
      </div>
    );
  }
}
export default SocialLinks;
