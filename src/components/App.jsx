import React, { Component } from 'react';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import ImageGallery from './ImageGallery';
import Searchbar from './Searchbar';
import Button from './Button';
import Loader from './Loader';

class App extends Component {
  state = {
    imageName: '',
    images: [],
    apiUrl: 'https://pixabay.com/api',
    key: '29767436-14c23983d91939ba59ac81ecb',
    page: 1,
  };

  getImages = () => {
    axios
      .get(
        `${this.state.apiUrl}/?key=${this.state.key}&q=${this.state.imageName}&page=${this.state.page}&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then(res =>
        this.setState(({ images }) => ({
          images: [...images, ...res.data.hits],
        }))
      )
      .catch(error => console.log(error));
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.imageName !== this.props.imageName ||
      prevState.page !== this.props.page
    ) {
    }
  }

  loadMore = () => {
    this.setState(
      ({ page }) => ({
        page: page + 1,
      }),
      this.getImages
    );
  };

  handleChangeName = imageName => {
    this.setState({ imageName, page: 1, images: [] }, this.getImages);
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleChangeName} />
        <Loader />
        <ImageGallery images={this.state.images} />
        <Button onClick={this.loadMore} />

        <ToastContainer />
      </>
    );
  }
}

export default App;
