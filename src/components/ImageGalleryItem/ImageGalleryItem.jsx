import React, { Component } from 'react';

class ImageGalleryItem extends Component {
  render() {
    return (
      <li class="gallery-item">
        <h1>Image name</h1>
        {this.props.imageName}
        <img src="" alt="" />
      </li>
    );
  }
}

export default ImageGalleryItem;
