// AddressCard.js
// AddressCard.js
import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControlLabel,
  Radio,
  RadioGroup,
  Grid
} from "@mui/material";

import AddAddressForm from "./AddAddressForm";

const AddressCard = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedAddressType, setSelectedAddressType] = useState("shipping");
  const [address, setAddress] = useState("123 Main St, City");

  const [selectedAddressType2, setSelectedAddressType2] = useState("shipping");
  const [address2, setAddress2] = useState("456 Billing Ave, Town");

  const [address3, setAddress3] = useState("789 New Shipping Rd, Village");

 // Assume the total amount is stored in the 'totalAmount' variable
 const totalAmount = 100; // Replace this with the actual total amount

 // Function to handle payment submission
 const handlePaymentSubmit = (paymentData) => {
   // Perform the payment logic here with the paymentData
   console.log('Payment data:', paymentData);
 }



  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleChangeAddressType = (event) => {
    setSelectedAddressType(event.target.value);
  };

  const handleChangeAddressType2 = (event) => {
    setSelectedAddressType2(event.target.value);
  };

  const handleChangeAddressType3 = (event) => {
    setAddress3(event.target.value);
  };

  const handleSaveAddress = () => {
    if (selectedAddressType === "billing") {
      setAddress("456 Billing Ave, Town");
    } else {
      setAddress("123 Main St, City");
    }

    if (selectedAddressType2 === "billing") {
      setAddress2("789 New Billing Rd, Village");
    } else {
      setAddress2("456 Billing Ave, Town");
    }

    setShowPopup(false);
  };

  

  return (
    <Card className="container">
      <CardContent>
        <Typography variant="h5" component="div">
          {selectedAddressType === "billing"
            ? "Billing Address"
            : "Shipping Address"}
        </Typography>
        <Typography variant="body1">{address}</Typography>
        <Button variant="contained" onClick={handleOpenPopup}>
          Change
        </Button>
      </CardContent>
      <Dialog open={showPopup} onClose={handleClosePopup}>
        <DialogTitle>Choose Address Type</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {selectedAddressType === "billing"
                      ? "Billing Address"
                      : "Shipping Address"}
                  </Typography>
                  <Typography variant="body1">{address}</Typography>
                  <RadioGroup
                    aria-label="address-type"
                    name="address-type"
                    value={selectedAddressType}
                    onChange={handleChangeAddressType}
                  >
                    <FormControlLabel
                      value="billing"
                      control={<Radio />}
                      label="Billing Address"
                    />
                    <FormControlLabel
                      value="shipping"
                      control={<Radio />}
                      label="Shipping Address"
                    />
                  </RadioGroup>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {selectedAddressType2 === "billing"
                      ? "Billing Address"
                      : "Shipping Address"}
                  </Typography>
                  <Typography variant="body1">{address2}</Typography>
                  <RadioGroup
                    aria-label="address-type-2"
                    name="address-type-2"
                    value={selectedAddressType2}
                    onChange={handleChangeAddressType2}
                  >
                    <FormControlLabel
                      value="billing"
                      control={<Radio />}
                      label="Billing Address"
                    />
                    <FormControlLabel
                      value="shipping"
                      control={<Radio />}
                      label="Shipping Address"
                    />
                  </RadioGroup>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Additional Address
                  </Typography>
                  <Typography variant="body1">{address3}</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <br></br>
          <br></br>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ "margin-top": "-10px" }}
          >
            Set Address
          </Button>
          <br></br>
          <br></br>
          <Grid item xs={12}>
            <AddAddressForm />
          </Grid>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePopup} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSaveAddress} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default AddressCard;
