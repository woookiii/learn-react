import Button from "./Button";

const Modal = ({ isOpen, onClose, rating }) => {
    if (!isOpen) return null;

    return (  <div className="modal-overlay">
                        <div className="modal">
                            <h2>Thanks</h2>
                            <p>you rated us {rating} star{rating > 1 ? 's' : ''}</p>
                            <Button className='class-btn' onClick={onClose}>
                                Close
                            </Button>
                        </div>
                    </div> );
}
 
export default Modal;