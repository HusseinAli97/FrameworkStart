import React, { useEffect } from 'react'
import { Col,Row } from 'react-bootstrap'

export default function About(props) {
    useEffect(() => {
        document.title = "About"
    },[])
    const title = props.creatTitle('ABOUT COMPONENT')
    return (

        <div className="container d-flex justify-content-center align-items-center text-center flex-column  text-white">
            {title} 
            <Row className='text-start'>
                <Col className=" py-3">
                    <p>
                    Freelancer is a free bootstrap theme created by Route. The download includes the complete source files 
                    including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                    </p>
                </Col>
                <Col className="py-3">
                Freelancer is a free bootstrap theme created by Route. The download includes the complete source files 
                including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                </Col>
            </Row>
        </div>
    )
}
