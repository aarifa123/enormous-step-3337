import React, { useState } from 'react';
import Swal from 'sweetalert2';

function SignInForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSignIn = (event) => {
    event.preventDefault();

    // checking if the input fields are empty
    if (username === '' || password === '' || name === '') {
      Swal.fire('Please fill in the input fields.');
      return;
    }

    // check if user is already logged in
    const loginStatus = JSON.parse(localStorage.getItem('loginStatus'));
    if (loginStatus && loginStatus.status) {
      Swal.fire('You are already logged in.');
      return;
    }

    // fetch data from API
    fetch('https://63c69db7dcdc478e15c55914.mockapi.io/UsersAPI')
      .then((res) => res.json())
      .then((data) => {
        // check if user is found
        let user;
        for (let i = 0; i <= data.length - 1; i++) {
          if (data[i].username === username && data[i].password === password && data[i].name === name) {
            user = data[i];
            break;
          }
        }

        if (user) {
          // set login status in local storage
          localStorage.setItem('loginStatus', JSON.stringify({ status: true, id: user.id }));

          // show success message and redirect to appropriate page
          if (user.admin) {
            Swal.fire({
              position: 'top',
              icon: 'success',
              title: 'Hi Admin Welcome Back...',
              showConfirmButton: false,
              timer: 2000
            });
            setTimeout(() => {
              window.location.href = './admin.html';
            }, 2000);
          } else {
            Swal.fire({
              position: 'top',
              icon: 'success',
              title: 'Hi User Welcome Back...',
              showConfirmButton: false,
              timer: 2000
            });
            setTimeout(() => {
              window.location.reload();
              document.querySelector('.popup').classList.remove('active');
            }, 2000);
          }
        } else {
          Swal.fire('Incorrect username, password or name. Please try again.');
        }
      });
  };

  return (
    <form id="signin" onSubmit={handleSignIn}>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)} />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />

      <label htmlFor="name">Name</label>
      <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />

      <button id="show-login" type="submit">Sign In</button>
    </form>
  );
}

export default SignInForm;
