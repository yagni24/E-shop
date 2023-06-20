// Login-page which is used to authenticate the user
import React, { useContext } from "react";
import { useFormik } from "formik";
import { FormControl, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../Context/LoginContext";
import { useEffect } from "react";
import { auth, db } from "../../config/firebase";

function Login() {

    const user = auth.currentUser;

    const { contextemail,setUsers } = useContext(LoginContext);
    const navigate = useNavigate();
    const initialValues = {
        email: '',
        password: ''
    }
    const [autherror, authsetError] = useState("");


    const onSubmit = (values, { resetForm }) => {
        signInWithEmailAndPassword(auth, values.email, values.password)
            .then((res) => {
                resetForm();
                setUsers(true);
                navigate('/Product');
            })
            .catch((error) => {
                authsetError(error.code);
            });
    }

    const validate = values => {
        let errors = {}
        if (!values.email) {
            errors.email = '*Required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Enter valid e-mail'
        }
        if (!values.password) {
            errors.password = '*Required'
        }
        return errors
    }
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })
    useEffect(() => {
        formik.setValues({ ...formik.values, email: contextemail });
    }, [contextemail, formik.setValues]);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
            <div style={{ display: 'grid', background: 'rgba(247,241,225,0.2)', width: '30%', justifyContent: 'center', alignItems: 'center', borderRadius: '5px', boxShadow: '0 0 10px rgba(0,0,0,0.5)', height: '700px', marginLeft: 'auto', marginRight: 'auto', overflow: 'hidden' }}>

                <form onSubmit={formik.handleSubmit}>
                    <p>{autherror}</p>

                    <div style={{ display: 'grid', gridTemplateColumns: '2fr', gap: '20px', margin: '10px' }}>
                        <div style={{ gridColumn: '1', display: 'flex', justifyContent: 'center' }}>
                        <TextField label="Email" color="secondary" error={formik.errors.email} name="email" helperText={formik.errors.email} onChange={formik.handleChange} value={formik.values.email} />
                        </div>
                    </div>
                    
                    <div style={{ gridColumn: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <TextField label="Password"type="password" color="secondary" error={formik.errors.password} name="password" helperText={formik.errors.password} onChange={formik.handleChange} value={formik.values.password} />
                    </div>
                    <Typography style={{ justifyContent: 'flex-end', display: 'flex', cursor: 'pointer', color: '#df5afa', marginRight: '5px' }}>Forget Password? </Typography>
                    <Button type="Submit" variant="contained" color="secondary" style={{ margin: '30px' }}>Log-in</Button>
                </form>
            </div>
        </div>
    )
}
export default Login;