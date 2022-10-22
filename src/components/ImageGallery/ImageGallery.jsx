import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ allImages }) => {
  return (
    <ul class="gallery">
      {/* {allImages.map({ id, webformatURL, largeImageURL })} */}
      <ImageGalleryItem />
    </ul>
  );
};

export default ImageGallery;
