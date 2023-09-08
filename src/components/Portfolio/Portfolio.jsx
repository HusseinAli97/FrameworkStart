import { useEffect, useState } from "react";
import { Row, Col, Modal } from "react-bootstrap";

export default function Portfolio(props) {
    useEffect(() => {
        document.title = "Portfolio";
    }, []);
    const title = props.creatTitle('PORTFOLIO COMPONENT ');
    const [show, setShow] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = (imageSrc) => {
        setShow(true);
        setSelectedImage(imageSrc);
    };

    function createPhotos() {
        const photos = [
            'poert1.png',
            'port2.png',
            'port3.png'
        ];

        return photos.map((photo, index) => (
            <Col xs="6" sm="6" lg="4"  className="py-3" key={index}>
                <div className="content overflow-hidden position-relative">
                    <img src={require(`./img/${photo}`)} className="img-fluid" alt="" />
                    <div className="overlay" onClick={() => handleShow(`./img/${photo}`)} >
                        <div>
                            <i className="fa-solid fa-4x fa-magnifying-glass"></i>
                        </div>
                    </div>
                </div>
            </Col>
        ));
    }

    return (
        <div className="container d-flex justify-content-center align-items-center text-center flex-column text-white p-5">
            {title}
            <Row className='text-start overflow-auto'>
                {createPhotos()}
            </Row>
            <Row className='text-start overflow-auto'>
                {createPhotos()}
            </Row>
            <Modal size="lg" show={show} centered onHide={handleClose} onEscapeKeyDown={handleClose} >
                {selectedImage && <img src={require(`${selectedImage}`)} className="img-fluid" alt="" />}
            </Modal>
        </div>
    );
}
