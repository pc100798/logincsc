import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { Grid } from '@mui/material'
import Carousel from 'react-bootstrap/Carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';

const Login = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })

    // const [data, setData] = useState([]);
    // console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value);


        const { value, name } = e.target;
        // console.log(value,name);


        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const addData = (e) => {
        e.preventDefault();

        const getuserArr = localStorage.getItem("userdata");
        console.log(getuserArr);

        const { email, password } = inpval;
        if (email === "") {
            toast.error('email field is requred', {
                position: "top-center",
            });
        } else if (!email.includes("@")) {
            toast.error('plz enter valid email addres', {
                position: "top-center",
            });
        } else if (password === "") {
            toast.error('password field is requred', {
                position: "top-center",
            });
        } else if (password.length < 5) {
            toast.error('password length greater five', {
                position: "top-center",
            });
        } else {

            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password
                });

                if (userlogin.length === 0) {
                    toast.error('Username or Password is Invalid.', {
                        position: "top-center",
                    });
                } else {
                    console.log("user login succesfulyy");

                    localStorage.setItem("user_login", JSON.stringify(userlogin))

                    history("/chat")
                }
            }
        }

    }

    return (
        <>
            <Grid container justifyContent="center">
                <Grid item xs={3}>
                    <div className="container mt-10">
                        <section className='d-flex justify-content-between'>
                            <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                                <div className="mb-4 mb-md-5 text-center">
                                    <a href="/" class="d-block auth-logo">
                                        <img src="assets/images/logo-sm.svg" alt="" height="28" /> <span class="logo-txt">Minia</span>
                                    </a>
                                </div>
                                <h5 className='text-center'>Welcome Back !</h5>
                                <p className='text-center'>Sign in to continue to Minia.</p>
                                <Form >

                                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                                        <h5>Username</h5>
                                        <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter Username" />
                                    </Form.Group>

                                    <Form.Group className="mb-3 " controlId="formBasicPassword">
                                        <h5>Password</h5>
                                        <Form.Control type="password" name='password' onChange={getdata} placeholder="Enter Password" />
                                    </Form.Group>

                                    <div class="mb-3">
                                        <input class="form-check-input mt-0" type="checkbox" value="" />

                                        <span class="mb-3 col-lg-6"> Remember me</span>

                                    </div>

                                    <Button variant="primary" className='col-lg-12' onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                                        Log In
                                    </Button>
                                </Form>

                                <p className="text-center  mt-3">
                                    <span>-Sign in with-</span>
                                </p>
                                <div className='d-flex flex-row mb-3 justify-content-evenly social-media'>
                                    <Button variant="primary" className='social-icon facebook '>
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </Button>
                                    <Button variant="info" className='social-icon twitter '>
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </Button>
                                    <Button variant="danger" className='social-icon google'>
                                        <FontAwesomeIcon icon={faGoogle} />
                                    </Button>
                                </div>
                                <p className='text-center mt-5'>Don't have account? <span><NavLink to="/register"> Signup now</NavLink></span> </p>
                                <div className='text-center p-4 mt-5' style={{ backgroundColor: 'white' }}>
                                    © 2023 Minia . Crafted with  by Themesbrand:

                                </div>
                            </div>


                        </section>
                        <ToastContainer />
                    </div>
                </Grid>
                <Grid item xs={9}>
                    <Carousel slide={false}>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src="assets/images/img1.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h4>“I feel confident imposing change on myself. It's a lot more
                                    <br /> progressing fun than looking back. That's why I ultricies enim at
                                    <br /> malesuada nibh diam on tortor neaded to throw curve balls.”</h4>
                                <h5 >Richard Drews</h5>
                                <p >Web Designer</p>

                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src="assets/images/img1.jpg"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h4>“Our task must be to free ourselves by widening our circle of
                                    <br />compassion to embrace all living creatures and the whole of quis
                                    <br />consectetur nunc sit amet semper justo. nature and its beauty.”</h4>
                                <h5 >Rosanna French</h5>
                                <p >Web Designer</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src="assets/images/img1.jpg"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h4>“I've learned that people will forget what you said, people will
                                    <br />forget what you did, but people will never forget how donec in
                                    <br />efficitur lectus, nec lobortis metus you made them feel.”</h4>
                                <h5 >Ilse R. Eaton</h5>
                                <p >Manager</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                </Grid>
            </Grid>



        </>
    )
}

export default Login