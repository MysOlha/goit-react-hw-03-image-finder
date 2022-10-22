// import Modal from 'components/Modal';
import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  state = { openModal: false };

  togleModal = () => {
    this.setState(() => {});
  };

  render() {
    const { webFormat, tag } = this.props;
    return (
      <img className={css.imageGalleryItemImage} src={webFormat} alt={tag} />
      // <Modal />
    );
  }
}

export default ImageGalleryItem;
