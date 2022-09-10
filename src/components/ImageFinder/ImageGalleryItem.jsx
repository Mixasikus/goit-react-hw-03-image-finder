import { GalleryItem, Img } from './Image.module';
// import Modal from './Modal';
// import Modal from './Modal';
export default function ImageGalleryItem({
  webformatURL,
  tags,
  largeImageURL,
  onClickModal,
}) {
  return (
    <>
      <GalleryItem>
        <Img src={webformatURL} alt={tags} onClick={onClickModal} />
      </GalleryItem>
      {/* {onClickModal && <Modal />} */}
      {/* {!onClickModal && (
        <Modal>
          <img src={largeImageURL} alt={tags} width="300" />
        </Modal>
      )} */}
    </>
  );
}

//  {
//    return (
//      <>
//        <GalleryItem>
//          {(
//            <Modal>
//              <img src={largeImageURL} width="150" alt="" />
//            </Modal>
//          ) && <Img src={webformatURL} alt={tags} onClick={onClickModal} />}
//        </GalleryItem>
//      </>
//    );
//  }
