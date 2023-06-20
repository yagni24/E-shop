// SignUp page which is used for the new users
import { React, useState } from "react";
import { useFormik } from "formik";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { LoginContext } from "../../Context/LoginContext";
import { useContext } from "react";
import {collection,addDoc} from "firebase/firestore";
import { auth, db } from '../../config/firebase';

function Signup() {
    const user = auth.currentUser;
    const [error, setError] = useState("");
    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmpass: ''
    }
    const { setConEmail, setProName, proName, contextemail,setUsers } = useContext(LoginContext);
    const navigate = useNavigate();
    const onSubmit = (values, { resetForm }) => {
        console.log('form data:', values);

        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then((res) => {
                console.log('res', res)
                resetForm();
                setUsers(true);
                setProName(values.name);
                setConEmail(values.email);
                const docRef = addDoc(collection(db,"usersInfo"),{
                username: values.name,
                useremail: values.email
               })
                navigate('/Login');
            })
            .catch((error) => {
                setError(error.message);
                console.error(error);
            });
    }
    const validate = values => 
    {
        let errors = {}
        if (!values.name) {
            errors.name = '*Required'
        }
        if (!values.email) {
            errors.email = '*Required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Enter valid e-mail'
        }
        if (!values.password) {
            errors.password = '*Required'
        }
        if (!values.confirmpass) {
            errors.confirmpass = '*Required'
        } else if (values.password != values.confirmpass) {
            errors.confirmpass = 'Password does not match'
        }
        return errors
    }
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })


    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
            <div style={{ display: 'grid', background: 'rgba(247,241,225,0.2)', width: '30%', justifyContent: 'center', alignItems: 'center', borderRadius: '5px', boxShadow: '0 0 10px rgba(0,0,0,0.5)', height: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
                <form onSubmit={formik.handleSubmit}>
                    <Typography>{error}</Typography>
                    <div style={{ display: 'grid', gridTemplateColumns: '2fr', gap: '5px', margin: '10px' }}>
                        <label style={{ gridColumn: '1', marginBottom: '5px', justifySelf: 'center', marginRight: '170px' }}>Name</label>
                        <div style={{ gridColumn: '1', display: 'flex', justifyContent: 'center' }}>

                            <TextField
                                style={{ width: '250px' }}
                                error={formik.errors.name}
                                id="name"
                                name="name"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                                helperText={formik.errors.name}
                                color='secondary' />
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '2fr', gap: '5px', margin: '10px' }}>
                        <label style={{ gridColumn: '1', marginTop: '5px', justifySelf: 'center', marginRight: '170px' }}>Email</label>
                        <div style={{ gridColumn: '1', display: 'flex', justifyContent: 'center' }}>
                            <TextField
                                style={{ width: '250px' }}
                                error={formik.errors.email}
                                id="email"
                                name="email"
                                helperText={formik.errors.email}
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                color='secondary' />
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '2fr', gap: '5px', margin: '10px' }}>
                        <label style={{ gridColumn: '1', marginTop: '5px', justifySelf: 'center', marginRight: '150px' }}>Password</label>
                        <div style={{ gridColumn: '1', display: 'flex', justifyContent: 'center' }}>
                            <TextField
                                style={{ width: '250px' }}
                                name="password"
                                id="password"
                                error={formik.errors.password}
                                helperText={formik.errors.password}
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                color='secondary' />
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '2fr', gap: '5px', margin: '10px' }}>
                        <label style={{ gridColumn: '1', marginTop: '5px', justifySelf: 'center', marginRight: '90px' }}>Confirm-Password</label>
                        <div style={{ gridColumn: '1', display: 'flex', justifyContent: 'center' }}>
                            <TextField
                                style={{ width: '250px' }}
                                name="confirmpass"
                                id="confirmpass"
                                error={formik.errors.confirmpass}
                                helperText={formik.errors.confirmpass}
                                onChange={formik.handleChange}
                                value={formik.values.confirmpass}
                                color='secondary' />
                        </div>

                    </div>
                    <Button type="Submit" variant="contained" color="secondary" style={{ margin: '20px' }}>Signup</Button>
                    <div style={{ gridColumn: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography>Already have an account? <Link to={'/Login'}>Log-In</Link></Typography>
                    </div>

                </form>
            </div>
        </div>
    )
} export default Signup;