import { Component } from 'react';
import ImageInfo from './ImageFinder/ImageInfo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from './ImageFinder/SearchBar';
import Button from './ImageFinder/Button';
// import Modal from './ImageFinder/Modal';
// import errorImage from './ImageFinder/error.jpg';

export default class App extends Component {
  state = {
    searchImage: '',
    // showModal: false,
  };

  // toggleModal = () => {
  //   this.setState(({ showModal }) => ({
  //     showModal: !showModal,
  //   }));
  // };

  handleFormSubmit = searchImage => {
    this.setState({ searchImage });
  };

  render() {
    const { searchImage } = this.state;

    return (
      <>
        {/* {showModal && (
          <Modal>
            <img src={errorImage} onClick={this.toggleModal} alt="" />
          </Modal>
        )} */}

        <SearchBar onChange={this.handleFormSubmit} />
        <ImageInfo searchImage={searchImage} />
        <ToastContainer autoClose={3000} />
        <Button />
      </>
    );
  }
}
