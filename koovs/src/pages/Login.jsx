import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaGoogle } from 'react-icons/fa';
import SignUp from './Register';
import {useState} from "react"
import { login } from "../Redux/apiCalls"
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import Navbar from "../components/Navbar"
import LargeWithAppLinksAndSocial from "../components/Footer"
const Error=styled.span`

color:red


`


 function LoginPage() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const {isFetching,error}= useSelector((state) => state.user);
  // const error = useSelector((state) => state.user.error);
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };


  return (
    <>


    <Navbar/>
    <section className="vh-100 gradient-custom">
      <Container className="py-5 h-100">
        <Row className="d-flex justify-content-center align-items-center h-100">
          <Col xs={12} md={8} lg={6} xl={5}>
            <Card className="bg-dark text-white" style={{ borderRadius: '1rem' }}>
              <Card.Body className="p-5 text-center">

                <div className="mb-md-5 mt-md-4 pb-5">

                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-5">Please enter your login and password!</p>

                  <Form.Group className="mb-4">
                    <Form.Control type="text" id="typeEmailX" placeholder="UserName" className="form-control-lg"  onChange={(e) => setUsername(e.target.value)}/>
                    {/* <input type="text" class="form-control" placeholder="user name" ></input> */}
                    <Form.Label className="form-label" htmlFor="typeEmailX">UserName</Form.Label>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Control type="password" id="typePasswordX" placeholder="Password" className="form-control-lg"              onChange={(e) => setPassword(e.target.value)}/>
                    <Form.Label className="form-label" htmlFor="typePasswordX">Password</Form.Label>
                  </Form.Group>

                  <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

                  <Button variant="outline-light" className="btn-lg px-5" type="submit" onClick={handleClick}  disabled={isFetching}>Login</Button><br />

                  {error && <Error>Something went wrong...</Error>}
                  <div className="d-flex justify-content-center text-center mt-4 pt-1">
                    <a href="#!" className="text-white"><FaFacebookF className="fa-lg" /></a>
                    <a href="#!" className="text-white"><FaTwitter className="fa-lg mx-4 px-2" /></a>
                    <a href="#!" className="text-white"><FaGoogle className="fa-lg" /></a>
                  </div>

                </div>

                <div>
                  <p className="mb-0">Don't have an account? <a href="#" className="text-white-50 fw-bold">Sign Up</a>
                  </p>
                </div>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
    <br />
    <br /><br /><br />
    <LargeWithAppLinksAndSocial/>
    </>
  );
}

export default LoginPage;
// import EmailIcon from '@mui/icons-material/Email';
// import HttpsIcon from '@mui/icons-material/Https';
// import React from 'react';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';

// function Login() {
//   return (
//     <section className="vh-100">
//       <Container className="py-5 h-100">
//         <Row className="d-flex align-items-center justify-content-center h-100">
//           <Col md={8} lg={7} xl={6}>
//             <img
//               src="./images/login.png"
//               className="img-fluid"
//               alt="Phone image"
//             />
//           </Col>
//           <Col md={7} lg={5} xl={5} className="offset-xl-1">
//             <Form>
//               <Form.Group className="mb-4" controlId="form1Example13">
//                 <EmailIcon/>
//                 <Form.Label>Email address</Form.Label>
//                 <Form.Control type="email" placeholder="Enter email" />
//               </Form.Group>

//               <Form.Group className="mb-4" controlId="form1Example23">
//                 <HttpsIcon/>
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control type="password" placeholder="Password" />
//               </Form.Group>

//               <div className="d-flex justify-content-around align-items-center mb-4">
//                 <Form.Check type="checkbox" id="form1Example3" checked label="Remember me" />
//                 <a href="#!">Forgot password?</a>
//               </div>

//               <Button variant="primary" size="lg" block>
//                 Sign in
//               </Button>

//               <div className="divider d-flex align-items-center my-4">
//                 <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
//               </div>

//               <Button
//                 href="#!"
//                 variant="primary"
//                 size="lg"
//                 block
//                 style={{ backgroundColor: '#3b5998' }}
//               >
//                 <i className="fab fa-facebook-f me-2"></i>Continue with Facebook
//               </Button>

//               <Button
//                 href="#!"
//                 variant="primary"
//                 size="lg"
//                 block
//                 style={{ backgroundColor: '#55acee' }}
//               >
//                 <i className="fab fa-twitter me-2"></i>Continue with Twitter
//               </Button>
//             </Form>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// }

// export default Login;
