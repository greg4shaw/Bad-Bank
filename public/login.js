

function Login(){
  //const [show, setShow]     = React.useState(true);
  //const [status, setStatus] = React.useState('');  

  const handleChange = event => {
    console.log(`handleChange ${event.target.value}`);
    const email = event.target.value;
    console.log(email)
  };

  return (
    //<h1>Test</h1>
    <Card
      bgcolor="secondary"
      header="Login"
      //status={status}
      body={
<>
   <h1 id="loggedInStatus">You are not yet logged in</h1>
   <input onChange={handleChange} id="email" type="email" placeholder="Email"/><br></br>
   <input id="password" type="password" placeholder="Password"/><br></br>
   <button id="login">Login</button>
   <button id="signup">SignUp</button>
   <button id="logout">Logout</button> 
   {/* style="display: none;" */}
   {/* <Goog/> */}
  {/*
  <hr>
  <button id="googlelogin">Google Login</button>
 */}
</>
}
    />

    ) 



  //(
    function Goog(){
    

    // Import the functions you need from the SDKs you need
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
    
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyAzgqUWMGJpv_KWfWhhlEbNsCi-eaC3PRk",
      authDomain: "gregory-shaw-banking-app.firebaseapp.com",
      projectId: "gregory-shaw-banking-app",
      storageBucket: "gregory-shaw-banking-app.appspot.com",
      messagingSenderId: "637460095620",
      appId: "1:637460095620:web:a5c6e0a44d952468d218d1"
    };
   //import { initializeApp } from "firebase/app";
  // Initialize Firebase
  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
  //firebase.initializeApp(firebaseConfig);

  // get elements
  const email = this.getId("email")
  const password = this.password;
  const login = this.login;
  const signup = this.signup;
  const logout = this.logout;

  // const email = document.getElementById("email");
  // const password = document.getElementById("password");
  // const login = document.getElementById("login");
  // const signup = document.getElementById("signup");
  // const logout = document.getElementById("logout");
  //const loggedInStatus = document.getElementById("loggedInStatus");
  //const googlelogin = document.getElementById("googlelogin");

  // login
  login.addEventListener("click", (e) => {
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(
      email.value,
      password.value
    );
    promise.catch((e) => console.log(e.message));
  });

  // signup
  signup.addEventListener("click", (e) => {
    // TODO: check for real email
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(
      email.value,
      password.value
    );
    promise.catch((e) => console.log(e.message));
  });

  //Google Login
  // googlelogin.addEventListener("click", (e) => {
  //   console.log("google clicked");
  //   var provider = new firebase.auth.GoogleAuthProvider();
  //   firebase
  //     .auth()
  //     .signInWithPopup(provider)
  //     .then(function (result) {
  //       loggedInStatus.innerText = `You are logged in using the following email: ${result.user.email}`;
  //       login.style.display = "none";
  //       signup.style.display = "none";
  //       email.style.display = "none";
  //       password.style.display = "none";
  //       googlelogin.style.display = "none";
  //       logout.style.display = "none";
  //     })
  //     .catch(function (error) {
  //       console.log(error.code);
  //       console.log(error.message);
  //     });
  // });

  // logout
  logout.addEventListener("click", (e) => {
    firebase.auth().signOut();
  });

  // login state
  // firebase.auth().onAuthStateChanged((firebaseUser) => {
  //   if (firebaseUser) {
  //     console.log(firebaseUser);
  //     loggedInStatus.innerText = `You are logged in using the following email: ${email.value}`;
  //     logout.style.display = "inline";
  //     login.style.display = "none";
  //     signup.style.display = "none";
  //     email.style.display = "none";
  //     password.style.display = "none";
  //     googlelogin.style.display = "none";
  //   } else {
  //     console.log("User is not logged in");
  //     loggedInStatus.innerText = "You are not yet logged in";
  //     login.style.display = "inline";
  //     signup.style.display = "inline";
  //     email.style.display = "inline";
  //     googlelogin.style.display = "inline";
  //     password.style.display = "inline";
  //     logout.style.display = "none";
  //   }
  // });
}
//)();



}

// OLD LOGIN
// function Login(){
//     const [show, setShow]     = React.useState(true);
//     const [status, setStatus] = React.useState('');    
  
//     return (
//       <Card
//         bgcolor="secondary"
//         header="Login"
//         status={status}
//         body={show ? 
//           <LoginForm setShow={setShow} setStatus={setStatus}/> :
//           <LoginMsg setShow={setShow} setStatus={setStatus}/>}
//       />
//     ) 
//   }
  
//   function LoginMsg(props){
//     return(<>
//       <h5>Success</h5>
//       <button type="submit" 
//         className="btn btn-light" 
//         onClick={() => props.setShow(true)}>
//           Authenticate again
//       </button>
//     </>);
//   }
  
//   function LoginForm(props){
//     const [email, setEmail]       = React.useState('');
//     const [password, setPassword] = React.useState('');
  
//     function handle(){
//       fetch(`/account/login/${email}/${password}`)
//       .then(response => response.text())
//       .then(text => {
//           try {
//               const data = JSON.parse(text);
//               props.setStatus('');
//               props.setShow(false);
//               console.log('JSON:', data);
//           } catch(err) {
//               props.setStatus(text)
//               console.log('err:', text);
//           }
//       });
//     }
  
  
//     return (<>
  
//       Email<br/>
//       <input type="input" 
//         className="form-control" 
//         placeholder="Enter email" 
//         value={email} 
//         onChange={e => setEmail(e.currentTarget.value)}/><br/>
  
//       Password<br/>
//       <input type="password" 
//         className="form-control" 
//         placeholder="Enter password" 
//         value={password} 
//         onChange={e => setPassword(e.currentTarget.value)}/><br/>
  
//       <button type="submit" className="btn btn-light" onClick={handle}>Login</button>
     
//     </>);
//   }