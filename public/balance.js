function Balance(){
    const [show, setShow]     = React.useState(true);
    const [status, setStatus] = React.useState('');  
  
    return (
      <Card
        bgcolor="info"
        header="Balance"
        //status={status}
        body={show ?
          <BalanceForm setShow={setShow} setStatus={setStatus}/> :
          <BalanceMsg setShow={setShow} setStatus={setStatus} status={status}/>}
      />
    )
  
  }
  
  function BalanceMsg(props){
    const data2 = JSON.parse(props.status)
    //console.log("Balance " + data2.balance)
    return(<>
      <h4> Your current balance is ${data2.balance}.</h4>
      {/* <h5>Success</h5> */}
      <button type="submit" 
        className="btn btn-light" 
        onClick={() => {
          props.setShow(true);
          props.setStatus('');
        }}>
          Check balance again
      </button>
    </>);
  }
  
  function BalanceForm(props){
    const [email, setEmail]   = React.useState('');
    const [balance, setBalance] = React.useState('');  
  
    function handle(){
      fetch(`/account/findOne/${email}`)
      .then(response => response.text())
      .then(text => {
          try {
              const data = JSON.parse(text);
              props.setStatus(text);
              props.setShow(false);
              //setBalance(user.balance);
              setBalance(balance);
              console.log('JSON:', data);
              //console.log('JSON VALUE:', data.value);
          } catch(err) {
              props.setStatus(text)
              console.log('err:', text);
          }
      });
    }
  
    return (<>
  
      Email<br/>
      <input type="input" 
        className="form-control" 
        placeholder="Enter email" 
        value={email} 
        onChange={e => setEmail(e.currentTarget.value)}/><br/>
  
      <button type="submit" 
        className="btn btn-light" 
        onClick={handle}>
          Check Balance
      </button>
  
    </>);
  }