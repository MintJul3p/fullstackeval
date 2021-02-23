import {Component} from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import {TeacherCreate} from "../Modules/TeachersRequest"
import {StudentCreate} from "../Modules/StudentsRequest";

class Create extends Component {


    render() {
        return (
            <Formik
                initialValues={{
                    type: "",
                    firstname: "",
                    lastname: "",
                }}
                validationSchema={Yup.object().shape({
                    type: Yup.string()
                        .required("Saisir un type"),

                    firstname: Yup.string()
                        .required("Saisir un prénom"),
                    lastname: Yup.string()
                        .required("Saisir un nom de famille"),

                })}
                onSubmit={(fields) => {
                    const {type, firstname, lastname} = fields;
                    const body = ({firstname, lastname});
                    console.log(fields);
                    if (type == "teacher") {
                        TeacherCreate(body)
                            .catch(error => console.log(error))
                            .then(response => response.text())
                            .then(resp => {
                                let teacher = JSON.parse(resp);
                                console.log(teacher);
                                console.log("new teacher added")
                            })
                    } else if (type == "student") {
                        StudentCreate(body)
                            .catch(error => console.log(error))
                            .then(response => response.text())
                            .then(resp => {
                                let teacher = JSON.parse(resp);
                                console.log(teacher);
                                console.log("new studdent added")
                            })

                    }
                }}
            >
                {({errors, isValid, dirty, touched}) => (
                    <>
                        <h3 className="text-center mt-3">Créer un nouvel entrant</h3>

                        <Form className="col-6 offset-3">
                            <div className="form-group pb-5">
                                <label htmlFor="type">Type</label>
                                <Field
                                    name="type"
                                    as="select"
                                    className={
                                        "form-control" +
                                        (errors.type && touched.type ? " is-invalid" : "")
                                    }
                                    autoComplete="type"
                                >
                                    <option value="">--Please choose an option--</option>
                                    <option value="student">student</option>
                                    <option value="teacher">teacher</option>

                                </Field>

                                <ErrorMessage
                                    name="type"
                                    component="div"
                                    className="invalid-feedback position-absolute"
                                />
                            </div>

                            <div className="form-group pb-3">
                                <label htmlFor="firstname">firstname</label>
                                <Field
                                    name="firstname"
                                    type="text"
                                    className={
                                        "form-control" +
                                        (errors.firstname && touched.firstname ? " is-invalid" : "")
                                    }
                                    autoComplete="firstname"
                                />
                                <ErrorMessage
                                    name="firstname"
                                    component="div"
                                    className="invalid-feedback position-absolute"
                                />
                            </div>
                            <div className="form-group pb-4">
                                <label htmlFor="lastname">lastname</label>
                                <Field
                                    name="lastname"
                                    type="text"
                                    className={
                                        "form-control" +
                                        (errors.lastname && touched.lastname ? " is-invalid" : "")
                                    }
                                    autoComplete="lastname"
                                />
                                <ErrorMessage
                                    name="lastname"
                                    component="div"
                                    className="invalid-feedback position-absolute"
                                />
                            </div>

                            <div className="form-group d-flex justify-content-between">
                                <button type="reset" className="btn btn-secondary">
                                    Effacer
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={!(dirty && isValid)}
                                >
                                    Valider
                                </button>
                            </div>
                        </Form>
                    </>
                )}
            </Formik>
        );
    }
}

export {Create};
