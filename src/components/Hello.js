import React from 'react';
import { Alert } from 'reactstrap';

const Hello = (props) => {

    const {nombre, clase} = props;

    return (
        <>
            <Alert color="primary">
               Hola {nombre}, bienvenido a la clase de {clase}
            </Alert>
        </>

    )
}

export default Hello