// App.js (or your main application file)
import React from "react";
import BaseAddress from "./Components/BaseAddress";

const App = () => {
  const address = "123 Main St, City";

  const handleChangeClick = () => {
    // Add your logic for handling the "Change" button click here
    console.log("Change button clicked");
  };

  return (
    <div className="row">
      <div className="col-md-12">
      <h1>My Address Card</h1>
      <BaseAddress address={address} onChangeClick={handleChangeClick} />
      </div>
      <br></br>
      <br></br>
      <BaseAddress address={address} onChangeClick={handleChangeClick} />
      
    </div>
  );
};

export default App;
