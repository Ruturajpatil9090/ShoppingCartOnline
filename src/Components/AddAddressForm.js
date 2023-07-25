// AddAddressForm.js
import React, { useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Grid
} from "@mui/material";

const AddAddressForm = ({ onSubmit }) => {
  const [houseNumber, setHouseNumber] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      houseNumber,
      streetNumber,
      city,
      country,
      zipCode
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <label>Flat/House Number</label>
          <TextField
            label="House Number"
            value={houseNumber}
            onChange={(e) => setHouseNumber(e.target.value)}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
        <label>Street Number/Name</label>
          <TextField
            label="Street Number"
            value={streetNumber}
            onChange={(e) => setStreetNumber(e.target.value)}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
        <label>City</label>
          <TextField
            label="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
        <label>Country</label>
          <FormControl fullWidth required>
            <InputLabel>Country</InputLabel>
            <Select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <MenuItem value="USA">USA</MenuItem>
              <MenuItem value="Canada">Canada</MenuItem>
              <MenuItem value="UK">UK</MenuItem>
              {/* Add more country options here */}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
        <label>Zip Code </label>
          <TextField
            label="Zip Code"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            required
            fullWidth
          />
        </Grid>
      </Grid>
      <br></br>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        
      >
        Add Address
      </Button>
    </form>
  );
};

export default AddAddressForm;
