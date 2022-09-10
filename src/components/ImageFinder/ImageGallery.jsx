import ImageGalleryItem from './ImageGalleryItem';
import { GalleryList } from './Image.module';
// import Modal from './Modal';

export default function ImageGallery({ totalHits, onClick }) {
  return (
    <GalleryList>
      {totalHits.map(hits => (
        <ImageGalleryItem
          key={hits.id}
          tags={hits.tags}
          webformatURL={hits.webformatURL}
          onClickModal={onClick}
          largeImageURL={hits.largeImageURL}
        />
      ))}
    </GalleryList>
  );
}
