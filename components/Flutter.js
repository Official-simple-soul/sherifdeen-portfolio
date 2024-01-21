import React from 'react';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';

export default function Flutter({
  amount,
  currency,
  email,
  phone_number,
  name,
}) {
  const config = {
    public_key: 'FLWPUBK-**************************-X',
    tx_ref: Date.now(),
    amount: amount,
    currency: currency,
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: email,
      phone_number: phone_number,
      name: name,
    },
    customizations: {
      title: 'SimpleSoul Innovate',
      description: 'Order for a service',
      logo: 'public/codelogo.png',
    },
  };

  const fwConfig = {
    ...config,
    text: 'Pay with Flutterwave!',
    callback: (response) => {
      console.log(response);
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {},
  };

  return (
    <div className="App">
      <FlutterWaveButton {...fwConfig} />
    </div>
  );
}
