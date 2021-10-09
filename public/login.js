function Login(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');    

  return (
    <Card
      bgcolor="secondary"
      header="Login"
      //status={status}
      body={show ? 
        <LoginForm setShow={setShow} setStatus={setStatus}/> :
        <LoginMsg setShow={setShow} setStatus={setStatus}/>}
    />
  ) 
}

function LoginMsg(props){
  return(<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => props.setShow(true)}>
        Authenticate again
    </button>
    {/* <button type="submit" 
      className="btn btn-light" onClick={handleLogout}>Logout</button> */}
  </>);
}


function LoginForm(props){
  const [email, setEmail]     = React.useState('');
  const [password, setPassword]     = React.useState('');
  const [err, setErr]     = React.useState('');
  //const [uid, setUid]     = React.useState();

  const firebaseConfig = {
    apiKey: "AIzaSyAzgqUWMGJpv_KWfWhhlEbNsCi-eaC3PRk",
    authDomain: "gregory-shaw-banking-app.firebaseapp.com",
    projectId: "gregory-shaw-banking-app",
    storageBucket: "gregory-shaw-banking-app.appspot.com",
    messagingSenderId: "637460095620",
    appId: "1:637460095620:web:a5c6e0a44d952468d218d1"
  };

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
//firebase.initializeApp(firebaseConfig);
  const handleSignUp = (e) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    var user = userCredential.user;
    console.log("user" + user)
    props.setShow(false);
  })
  .catch((error) => {
    console.log(e.message)
    setErr(e.message)
    setEmail('')
    setPassword('')
  });
}

    const handleLogin = (e) => {
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
      var user = userCredential.user;
        console.log("user" + user)
        props.setShow(false);
        })
        .catch((e) => {
          console.log(e.message)
          setErr(e.message)
          setEmail('')
          setPassword('')
        });
      }

  //Google Login
  const handleGoogle = (e) => {
    console.log("google clicked");
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;
        console.log(`You are logged in using the following email: ${user.email}`);
        props.setShow(false);
      })
      .catch((e) => {
        console.log(e.message)
        setErr(e.message)
        setEmail('')
        setPassword('')
      });
  };

  const handleLogout = (e) => {
    firebase.auth().signOut().then(() => {
      props.setShow(true)
    }).catch((e) => {
      console.log(e.message)
      setErr(e.message)
    });
  }
    
    
  //   firebase.auth().signOut();
  //   props.setShow(true)
  // };

    // firebase.auth().onAuthStateChanged((firebaseUser) => {
    // if (firebaseUser) {
    //   console.log(firebaseUser);
    // } else {
    //   console.log("User is not logged in");
    // }})


console.log(email, password)

return (
    // <Card
    //   bgcolor="secondary"
    //   header="Login"
    //   body={
<>
   <h1 id="loggedInStatus">You are not yet logged in</h1>
   Email address<br/>
   <input className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email"/><br></br>
   Password<br/>
   <input className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password"/><br></br>
   <button className="btn btn-light" onClick={handleLogin}>Login</button><br/>
   <button className="btn btn-light" onClick={handleSignUp}>SignUp</button>
   <button className="btn btn-light" onClick={handleLogout}>Logout</button>
   <button className="btn btn-light" onClick={handleGoogle}>Google Login</button>
   <br></br>
   <br></br>
   <p>{err ? 'ERROR: ' + err : ''}</p>
</>
//}
// />
)}


 
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

    
  //   const auth = firebase.auth();
  //   const promise = auth.createUserWithEmailAndPassword(
  //     email,
  //     password
  //   );
  //   promise.catch((e) => {
  //     console.log(e.message)
  //     setErr(e.message)
  //     setEmail('')
  //     setPassword('')
  //   })
  // }
  // const handleLogin = (e) => {
  //   const auth = firebase.auth();
  //   const promise = auth.signInWithEmailAndPassword(
  //     email, password
  //   );

  //   promise.catch((e) => {
  //     console.log(e.message)
  //     setErr(e.message)
  //     setEmail('')
  //     setPassword('')
  //   });
  //   }

