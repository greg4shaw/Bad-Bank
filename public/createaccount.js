function CreateAccount(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');    

  return (
    <Card
      bgcolor="primary"
      header="Create Account"
      //status={status}
      body={show ? 
        <CreateForm setShow={setShow} setStatus={setStatus}/> :
        <CreateMsg setShow={setShow} setStatus={setStatus}/>}
    />
  ) 
}

function CreateMsg(props){
  return(<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => props.setShow(true)}>
        Create a New Account
    </button>
  </>);
}

function CreateForm(props){
  const [email, setEmail]     = React.useState('');
  const [password, setPassword]     = React.useState('');
  const [err, setErr]     = React.useState('');

  const firebaseConfig = {
    apiKey: "AIzaSyAzgqUWMGJpv_KWfWhhlEbNsCi-eaC3PRk",
    authDomain: "gregory-shaw-banking-app.firebaseapp.com",
    projectId: "gregory-shaw-banking-app",
    storageBucket: "gregory-shaw-banking-app.appspot.com",
    messagingSenderId: "637460095620",
    appId: "1:637460095620:web:a5c6e0a44d952468d218d1"
  };

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

  const handleCreate = (e) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
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

return (
<>
   Email address<br/>
   <input className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email"/><br></br>
   Password<br/>
   <input className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password"/><br></br>
   <button className="btn btn-light" onClick={handleCreate}>Create Account</button>
   <br></br>
   <br></br>
   <p>{err ? 'ERROR: ' + err : ''}</p>
</>   
)
}
