import { DeleteModalStyled, ModalBody, ModalFooter } from "../styles/components/DeleteModal.styled";
import { CancelButton, DeleteButton } from "../styles/components/FormButttons.styled";


const DeleteModal = ({ handleDelete = () => { } }) => {
    return (
        <DeleteModalStyled className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <ModalBody className="modal-body">
                        Are you sure, you want to delete this item?
                    </ModalBody>
                    <ModalFooter className="modal-footer">
                        <CancelButton type="button" data-bs-dismiss="modal">No</CancelButton>
                        <DeleteButton type="button" onClick={handleDelete} data-bs-dismiss="modal">Delete</DeleteButton>
                    </ModalFooter>
                </div>
            </div>
        </DeleteModalStyled>
    )
}

export default DeleteModal