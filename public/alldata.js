function AllData(){
  const [data, setData] = React.useState([]);    

  //function handle(){
  React.useEffect(() => {
    fetch(`/account/all`)
    .then(response => response.text())
    .then(text => {
        try {
            const info = JSON.parse(text);
            setData(info);
            console.log('JSON:', info);
        } catch(err) {
            setData('')
            console.log('err:', text);
        }
    });
  }, []);

return (<>
      <h5>All Data in Store:</h5>
       <div className="table-responsive">
            <table className="card-table table">
              <thead className="table-info">
                <tr>
                  <th scope="col">Email</th>
                  <th scope="col">Name</th>
                  <th scope="col">Password</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => {
                  return (
                    <tr key={item.password}>
                      <td>{item.email}</td>
                      <td>{item.name}</td>
                      <td>{item.password}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
        </div>
   </>);
}
 



