import { createPortal } from 'react-dom';
import { ModalContent, Overlay } from './Image.module';

const modalRoot = document.querySelector('#modal-root');

export default function Modal() {
  return createPortal(
    <Overlay>
      <ModalContent>{this.props.children}</ModalContent>
    </Overlay>,
    modalRoot
  );
}
