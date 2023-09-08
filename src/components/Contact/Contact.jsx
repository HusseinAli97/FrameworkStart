import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import './contact.css'

export default function Contact(props) {
    useEffect(() => {
        document.title = "Contact"
    }, [])

    // State to track the input values and their corresponding classes
    const [inputValues, setInputValues] = useState({
        name: '',
        Age: '',
        email: '',
        password: ''
    })
    const handleInputChange = (e) => {
        const { id, value } = e.target
        setInputValues((prevInputValues) => ({
            ...prevInputValues,
            [id]: value
        }))
    }
    const title = props.creatTitle('CONTACT SECTION') 
    return (
        <div className="container d-flex justify-content-center align-items-center text-center flex-column text-white ">
            {title}
            <div className="contact d-flex flex-column w-75">
            <label htmlFor="name" className={inputValues.name.length > 0 ? 'up' : ''}>
                    <input
                        type="text"
                        className='bg-transparent'
                        id="name"
                        placeholder="UserName"
                        value={inputValues.name}
                        onChange={handleInputChange}
                    />
                    <span className='fw-bold fs-5'>UserName :</span>
                </label>
                <label htmlFor="Age" className={inputValues.Age > 0 ? 'up' : ''}>
                    <input
                        type="number"
                        className='bg-transparent'
                        id="Age"
                        placeholder="UserAge"
                        value={inputValues.Age}
                        onChange={handleInputChange}
                    />
                    <span className='fw-bold fs-5'>UserAge :</span>
                </label>
                <label htmlFor="email" className={inputValues.email.length > 0 ? 'up' : ''}>
                    <input
                        type="email"
                        className='bg-transparent'
                        id="email"
                        placeholder="UserEmail"
                        value={inputValues.email}
                        onChange={handleInputChange}
                    />
                    <span className='fw-bold fs-5'>UserEmail :</span>
                </label>
                <label htmlFor="password" className={inputValues.password.length > 0 ? 'up' : ''}>
                    <input
                        type="password"
                        className='bg-transparent'
                        id="password"
                        placeholder="UserPassword"
                        value={inputValues.password}
                        onChange={handleInputChange}
                    />
                    <span className='fw-bold fs-5'>UserPassword :</span>
                </label>
                <button className="btn btn-primary mt-3 w-25">Register</button>
            </div>
        </div>
    )
}
