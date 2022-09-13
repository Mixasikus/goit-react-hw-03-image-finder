import ImageGalleryItem from './ImageGalleryItem';
import { GalleryList } from './Image.module';
// import Modal from './Modal';

export default function ImageGallery({ totalHits, onClick, dataModal }) {
  return (
    <GalleryList>
      {totalHits.map(({ id, tags, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          tags={tags}
          webformatURL={webformatURL}
          onClick={() => {
            dataModal(tags, largeImageURL);
            onClick();
          }}
        />
      ))}
    </GalleryList>
  );
}
