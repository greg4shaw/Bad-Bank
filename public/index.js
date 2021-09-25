// Define our top most component
// Single Page Application
// Deprecation warnings node --trace-deprecation node_modules/.bin/webpack

function Spa() {
  return (
    <HashRouter>
      <div>
        <NavBar />
        <UserContext.Provider
          value={{users: [{name: "abel",email: "abel@mit.edu",password: "secret",balance: 100,},],}}>
          <div className="container" style={{ padding: "20px" }}>
            <Route path="/" exact component={Home} />
            <Route path="/alldata/" exact component={AllData} />
            <Route path="/balance/" exact component={Balance} />
            <Route path="/CreateAccount/" exact component={CreateAccount} />
            <Route path="/deposit/" exact component={Deposit} />
            {/* <Route path="/home/" exact component={Home} /> */}
            <Route path="/login/" exact component={Login} />
            <Route path="/withdraw/" exact component={Withdraw} />
          </div>
        </UserContext.Provider>
      </div>
    </HashRouter>
  );
}
// Render the function into the root defined in index.html
ReactDOM.render(<Spa />, document.getElementById("root"));
