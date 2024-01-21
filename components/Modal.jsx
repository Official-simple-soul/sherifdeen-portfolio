import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useState } from 'react';

import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

function CustomModal({ setOpenModal, openModal }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    amount: '',
    currency: '',
  });
  const { amount, currency, phone, email, name } = formData;
  const config = {
    public_key: process.env.NEXT_PUBLIC_FLUTTER_KEY,
    tx_ref: Date.now(),
    amount: amount,
    currency: currency,
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: email,
      phone_number: phone,
      name: name,
    },
    customizations: {
      title: 'SimpleSoul Innovate',
      description: 'Order for a service',
      logo: 'public/codelogo.png',
    },
  };

  function onCloseModal() {
    setOpenModal(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      amount: '',
      currency: '',
    });
  }

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <>
      <Modal show={openModal} size="lg" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-dark">
              Provide your information
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Your name" />
              </div>
              <TextInput
                id="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={(event) =>
                  handleInputChange('name', event.target.value)
                }
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="phone" value="Your phone number" />
              </div>
              <TextInput
                id="phone"
                placeholder="123-456-7890"
                value={formData.phone}
                onChange={(event) =>
                  handleInputChange('phone', event.target.value)
                }
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                placeholder="name@company.com"
                value={formData.email}
                onChange={(event) =>
                  handleInputChange('email', event.target.value)
                }
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="amount" value="Amount" />
              </div>
              <TextInput
                id="amount"
                placeholder="100"
                value={formData.amount}
                onChange={(event) =>
                  handleInputChange('amount', event.target.value)
                }
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="currency" value="Currency" />
              </div>
              <TextInput
                id="currency"
                placeholder="USD"
                value={formData.currency}
                onChange={(event) =>
                  handleInputChange('currency', event.target.value)
                }
                required
              />
            </div>
            <div className="w-full">
              <Button
                onClick={() => {
                  handleFlutterPayment({
                    callback: (response) => {
                      closePaymentModal(); // this will close the modal programmatically
                    },
                    onClose: () => {},
                  });
                }}
              >
                Submit
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CustomModal;
