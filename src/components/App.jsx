import React, { Component } from 'react';
import ImageGallery from './ImageGallery';
import Searchbar from './Searchbar';
import axios from 'axios';
// import { ToastContainer } from 'react-toastify';

const KEY = '29767436-14c23983d91939ba59ac81ecb';
axios.defaults.baseURL = `https://pixabay.com/api/?q=${this.props.imageName}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;

class App extends Component {
  state = {
    imageName: '',
    allImages: [],
  };

  handleChangeName = imageName => {
    this.setState({ imageName });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imageName !== this.props.imageName) {
      // this.setState({ allImages: [...allImages] });
    }
  }

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleChangeName} />
        <ImageGallery allImages={this.state.allImages} />
      </>
    );
  }
}

export default App;
