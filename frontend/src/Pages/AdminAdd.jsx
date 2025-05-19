import axios from 'axios';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function AdminAdd() {
    const URL = "http://localhost:3500/"
    return (
        <>
            <Formik
                initialValues={{ title: '', price: '', img: '' }}
                validationSchema={Yup.object({
                    title: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    price: Yup.number()
                        .min(0, 'Must be 20 characters or less')
                        .required('Required'),
                    img: Yup.string()
                        .max(200, 'Must be 20 characters or less')
                        .required('Required'),

                })}
                onSubmit={async (values, { resetForm }) => {
                    try {
                        const res = await axios.post(URL, values)
                        console.log("success")
                    } catch (error) {
                        console.log(error)
                    }
                    resetForm()
                }}
            >
                <Form>
                    <label htmlFor="title">Title</label>
                    <Field name="title" type="text" />
                    <ErrorMessage name="title" />

                    <label htmlFor="price">Price</label>
                    <Field name="price" type="text" />
                    <ErrorMessage name="price" />

                    <label htmlFor="img">Image</label>
                    <Field name="img" type="text" />
                    <ErrorMessage name="img" />

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </>
    )
}

export default AdminAdd