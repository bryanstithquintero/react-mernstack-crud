import React, { Component } from 'react' //obligatoria al crear componentes
import axios from "axios";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";



export default class CreateStudent extends Component {
    constructor(props) {
        super(props);
        this.onChangeStudentName = this.onChangeStudentName.bind(this);
        this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
        this.onChangeStudentRollno = this.onChangeStudentRollno.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: "",
            email: "",
            rollno: "",
        };
    }
    //se crea los listener
    onChangeStudentName(e) {
        this.setState({ name: e.target.value });
    }
    onChangeStudentEmail(e) {
        this.setState({ email: e.target.value });
    }
    onChangeStudentRollno(e) {
        this.setState({ rollno: e.target.value });//se lleva el valor del objeto
    }

    onSubmit(e) { //evento
        e.preventDefault();
        const studentObject = {
            name: this.state.name,
            email: this.state.email,
            rollno: this.state.rollno,
        };

        axios
            .post("http://localhost:4000/students/create-student", studentObject)//post porque se va crear un objeto endpoint y objeto
            .then((res) => console.log(res.data)); //la respuesta (res) es mostrar el objeto si logra guardar el objeto
        this.setState({ name: "", email: "", rollno: "" });//se inicializa otra vez el objeto en vacio, al estado inicial los atributos

        alert("Estudiante creado")
    }


    render() {
        return (
            <div className="form-wrapper">
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="Name">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            value={this.state.name}
                            onChange={this.onChangeStudentName} />
                    </Form.Group>
                    <Form.Group controlId="Email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            value={this.state.email}
                            onChange={this.onChangeStudentEmail} />
                    </Form.Group>
                    <Form.Group controlId="Name">
                        <Form.Label>Codigo</Form.Label>
                        <Form.Control
                            type="text"
                            value={this.state.rollno}
                            onChange={this.onChangeStudentRollno} />
                    </Form.Group>
                    <Button
                        variant="danger"
                        size="lg"
                        block="block"
                        type="submit"
                        className="mt-4"
                    >
                        Crear estudiante
                    </Button>
                </Form>
            </div>
        );
    }
}
