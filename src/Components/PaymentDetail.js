// PaymentDetails.js
import React, { useState } from 'react';
import { TextField, Button,Carousel } from '@mui/material';
const PaymentDetails = ({ totalAmount, onSubmit }) => {
  const [selectedOption, setSelectedOption] = useState('card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handlePaymentSubmit = () => {
    // Validate inputs before submitting
    const isCardValid = /^1001|2001|3001|4001\d{12}$/.test(cardNumber);
    const isExpiryValid = /^\d{2}\/\d{4}$/.test(expiryDate);
    const isCvvValid = /^\d{3}$/.test(cvv);

    if (isCardValid && isExpiryValid && isCvvValid) {
      // Perform the payment logic here, if needed
      onSubmit({
        paymentMethod: selectedOption,
        cardNumber: cardNumber,
        expiryDate: expiryDate,
        cvv: cvv,
      });
    } else {
      alert('Invalid payment details. Please check your inputs.');
    }
  };

  return (
    <div>
      <Carousel
        interval={null}
        index={selectedOption === 'card' ? 0 : selectedOption === 'paypal' ? 1 : 2}
        onChange={(index) => {
          setSelectedOption(index === 0 ? 'card' : index === 1 ? 'paypal' : 'netbanking');
        }}
      >
        <div>
          <Button variant="outlined" onClick={() => setSelectedOption('card')}>
            Card
          </Button>
        </div>
        <div>
          <Button variant="outlined" onClick={() => setSelectedOption('paypal')}>
            PayPal
          </Button>
        </div>
        <div>
          <Button variant="outlined" onClick={() => setSelectedOption('netbanking')}>
            Net Banking
          </Button>
        </div>
      </Carousel>
      <div style={{ display: selectedOption === 'card' ? 'block' : 'none' }}>
        <TextField
          label="Card Number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Expiry Date (MM/YYYY)"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="CVV"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          fullWidth
          margin="normal"
        />
      </div>
      {/* Add other text fields for PayPal and Net Banking options here */}
      <Button onClick={handlePaymentSubmit} color="primary" variant="contained">
        Pay ${totalAmount}
      </Button>
    </div>
  );
};

export default PaymentDetails;