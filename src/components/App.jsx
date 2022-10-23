import React, { Component } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
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
    loading: false,
    error: null,
  };

  getImages = () => {
    this.setState({ loading: true });
    axios
      .get(
        `${this.state.apiUrl}/?key=${this.state.key}&q=${this.state.imageName}&page=${this.state.page}&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then(res =>
        this.setState(({ images }) => ({
          images: [...images, ...res.data.hits],
        }))
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.images !== this.props.images &&
      this.state.images.totalHits === 0
    ) {
      toast('No images');
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
        {this.state.loading && <Loader />}

        <ImageGallery images={this.state.images} />
        {this.state.images.length === 0 && !this.state.loading && (
          <h2 style={{ textAlign: 'center' }}>No images for showing</h2>
        )}
        {this.state.images.length >= 12 && <Button onClick={this.loadMore} />}

        <ToastContainer />
      </>
    );
  }
}

export default App;
