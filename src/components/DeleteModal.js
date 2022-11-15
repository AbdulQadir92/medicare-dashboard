import { DeleteModalStyled, DarkBg } from "../styles/components/DeleteModal.styled";
import SecondaryBtn from "./SecondaryBtn";
import DeleteBtn from "./DeleteBtn";

const DeleteModal = ({ handleDelete }) => {

    const handleCancel = () => {

    }

    return (
        // <DeleteModalStyled>
        //     <div>Are you sure, you want to delete?</div>
        //     <div>
        //         <SecondaryBtn value="Cancel" marginRight="15px" onClick={handleCancel} />
        //         <DeleteBtn value="Delete" onClick={handleDelete} />
        //     </div>
        //     <DarkBg></DarkBg>
        // </DeleteModalStyled>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Are you sure, you want to delete?
                    </div>
                    <div className="modal-footer">
                        {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button> */}
                        <SecondaryBtn value="Cancel" marginRight="15px" onClick={handleCancel} />
                        <DeleteBtn value="Delete" onClick={handleDelete} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal