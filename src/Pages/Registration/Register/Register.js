import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import PreparedLink from '../../Shared/PreparedLink/PreparedLink';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const handleSubmit = event => {

        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;
        if (password !== confirmPassword) {
            toast("Confirm Password Didn't match")
        }
        if (password === confirmPassword) {
            createUserWithEmailAndPassword(email, password);
        }
    }
    return (
        <div className="container">
            <div className='row'>
                <div className='col col-lg-6 col-sm-8 container w-25 mx-auto'>
                    <h2 className='text-dark text-center m-3'>Create new account</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="m-3" controlId="formBasicEmail">
                            <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                        </Form.Group>
                        <Form.Group className="m-3" controlId="formBasicPassword">
                            <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                        </Form.Group>
                        <Form.Group className="m-3" controlId="formBasicConfirmPassword">
                            <Form.Control ref={confirmPasswordRef} type="password" placeholder="Confirm Password" required />
                        </Form.Group>
                        <Button variant="dark w-50 mx-auto d-block mb-2" type="submit">
                            Register
                        </Button>
                    </Form>
                    {errorElement}
                    <p className='text-center'>Already have an account ? <PreparedLink to="/login" className='text-primary pe-auto text-decoration-none'>Login to your account</PreparedLink> </p>
                </div>
                <SocialLogin></SocialLogin>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;