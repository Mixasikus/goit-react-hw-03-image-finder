import { Component } from 'react';
import ImageGallery from './ImageGallery';
import ErrorPicture from './ImageError';
import { MagnifyingGlass } from 'react-loader-spinner';
import pixabayImage from '../services/pixabay.api';
import Modal from './Modal';
// import errorImage from './error.jpg';

export default class ImageInfo extends Component {
  state = {
    image: '',
    status: 'idle',
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.searchImage;
    const nexName = this.props.searchImage;

    if (prevName !== nexName) {
      this.setState({ status: 'pending' });

      pixabayImage(nexName).then(image => {
        this.setState({ image, status: 'resolved' });

        if (image.totalHits === 0) {
          this.setState({ status: 'rejected' });
        }
      });
    }
  }
  render() {
    const { status, showModal } = this.state;
    const { hits } = this.state.image;

    if (status === 'pending') {
      return (
        <div>
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"
          />
          ...Загружаем
        </div>
      );
    }

    if (status === 'resolved') {
      return <ImageGallery totalHits={hits} onClick={this.toggleModal} />;
    }

    if (status === 'rejected') {
      return <ErrorPicture />;
    }

    return (
      <>
        <button type="button" onClick={this.toggleModal}>
          октрыть
        </button>
        {showModal && <Modal />}
      </>
    );
  }
}
