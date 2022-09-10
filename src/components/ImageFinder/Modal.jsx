import { Component } from 'react';
import { createPortal } from 'react-dom';
import { ModalContent, Overlay } from './Image.module';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  render() {
    return createPortal(
      <Overlay>
        <ModalContent>{this.props.children}</ModalContent>
      </Overlay>,
      modalRoot
    );
  }
}
