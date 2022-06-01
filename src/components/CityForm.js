import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const CityForm = (props) => {
    const [city, setCity] = useState('Tartu');

    const submitHandler = (event) => {
        event.preventDefault();
        props.onChangeCity(city);
    }

    return (
        <form onSubmit={submitHandler}>
            <Form.Group>
                <Form.Control onChange={(e) => setCity(e.target.value)}/>
            </Form.Group>
            <button type='submit'>Change City</button>
        </form>
    );
};

export default CityForm;