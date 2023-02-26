import { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';
import KeyIcon from '@mui/icons-material/Key';
 export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [terms, setTerms] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleRepeatPasswordChange = (event) => {
    setRepeatPassword(event.target.value);
  }

  const handleTermsChange = (event) => {
    setTerms(event.target.checked);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  }

  const handleGoogleSignIn = () => {
    // handle Google sign in here
  }

  const handleFacebookSignIn = () => {
    // handle Facebook sign in here
  }

  const handleLogin = () => {
    // handle login here
  }

  return (
    <section className="vh-100" style={{ backgroundColor: '#eee' }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: '25px' }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                    <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                            <PersonIcon />
                        <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                          <input type="text" id="form3Example1c" className="form-control" value={name} onChange={handleNameChange} />
                         
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                            <EmailIcon/>
                        <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                          <input type="email" id="form3Example3c" className="form-control" value={email} onChange={handleEmailChange} required/>
                          
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                            <HttpsIcon/>
                        <label className="form-label" htmlFor="form3Example4c">Password</label>
                          <input type="password" id="form3Example4c" className="form-control" value={password} onChange={handlePasswordChange} />
                         
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                        <KeyIcon/>
                    <label class="form-label" for="form3Example4cd">Repeat your password</label>
                      <input type="password" id="form3Example4cd" class="form-control" />
                      
                    </div>
                  </div>

                  <div class="form-check d-flex justify-content-center mb-5">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label class="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" class="btn btn-primary btn-lg">Register</button>
                  </div>

                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2"  >

                <img src="https://images.yourstory.com/cs/images/companies/koovs-1590546147513.jpg?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff"
                  class="img-fluid" alt="Sample image" style={{width:"70%",marginLeft:"100px"}}/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

// class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2"