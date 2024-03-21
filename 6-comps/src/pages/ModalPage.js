import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
    const [showModal, setShowModal] = useState(false)

    const handleClick = (event) => {
        setShowModal(true)
    }

    const handleClose = (event) => {
        setShowModal(false)
    }

    const actionBar = <div>
        <Button primary onClick={handleClose}>I accept</Button>
    </div>

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit molestiae tempore architecto veniam deserunt veritatis sapiente quia expedita numquam atque, quod hic alias a, soluta molestias! Veniam animi maxime itaque.</p>
    </Modal>

    return (
        <div>
            <Button onClick={handleClick} primary>
                Open Modal
            </Button>
            {showModal && modal}
        </div>
    )
}

export default ModalPage;