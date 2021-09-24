//import bank from "./bank.png";

function Home() {
    return (
      <Card
        bgcolor="primary"
        txtcolor="white"
        header="WELCOME to the BAD BANK"
        title="The baddest bank in town!"
        text="Where we take you money and share your details."
        body={<img src='bank.png' className="img-fluid" alt="" />}
      />
    );
  }