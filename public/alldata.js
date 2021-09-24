
function AllData() {
//    const ctx = React.useContext(UserContext);
    const [data, setData] = React.useState('');
  
    React.useEffect(() => {
      //fetch all accounts from API
      fetch('/account/all')
        .then(response => response.json())
        .then(data => {
          console.log('data');
          setData(JSON.stringify(data));
          //setData([data]);
          data.map(element => {
            console.log(element.email)
          });
        });
    });

  return(
        <>
        <h1>All Data</h1>
        {data}
        </>
    )
    


    // return (
    //   <Card
    //     bgcolor="secondary"
    //     header="ALL DATA"
    //     body={
    //       <>
    //         <p>Bad Bank user data shown below:</p>
  
    //         <div className="table-responsive">
    //           <table className="card-table table">
    //             <thead className="table-info">
    //               <tr>
    //                 <th scope="col">Email</th>
    //                 <th scope="col">Name</th>
    //                 <th scope="col">Password</th>
    //               </tr>
    //             </thead>
    //             <tbody>
    //               {data.map((item) => {
    //                 return (
    //                   <tr key={item.password}>
    //                     <td>{item.email}</td>
    //                     <td>{item.name}</td>
    //                     <td>{item.password}</td>
    //                   </tr>
    //                 );
    //               })}
    //             </tbody>
    //           </table>
    //         </div>
    //       </>
    //     }
    //   />
    // );
  }



