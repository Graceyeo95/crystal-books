// AddPhoneNumber.tsx

import { useState } from 'react';
import {
  sendPhoneVerification,
  verifyPhoneCodeAndLink,
} from '../lib/firebase/authentication/phoneAuth';

interface AddPhoneNumberProps {
  phoneNumber: string;
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
}

const AddPhoneNumber = ({
  phoneNumber,
  setPhoneNumber,
}: AddPhoneNumberProps) => {
  const [verificationCode, setVerificationCode] = useState('');
  const [isPhoneVerificationSent, setIsPhoneVerificationSent] = useState(false);
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [verificationId, setVerificationId] = useState<string | null>(null);

  const handleSendCode = () => {
    sendPhoneVerification(
      phoneNumber,
      setIsPhoneVerificationSent,
      setVerificationId
    );
  };

  const handleVerifyCode = () => {
    if (!verificationId) return;
    verifyPhoneCodeAndLink(
      verificationId,
      verificationCode,
      setIsPhoneVerified
    );
  };

  return (
    <div>
      {!isPhoneVerificationSent ? (
        <div className='flex gap-x-3'>
          <input
            type='text'
            placeholder='Enter phone number'
            className='p-2 w-full'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button
            onClick={handleSendCode}
            className='bg-orange text-white p-2 text-nowrap'
          >
            Send Verification Code
          </button>
        </div>
      ) : (
        <div className='flex flex-col gap-y-3'>
          <input
            type='text'
            placeholder='Enter verification code'
            className='p-2 w-full'
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
          />
          <button
            onClick={handleVerifyCode}
            className='bg-orange text-white p-2 text-nowrap'
          >
            Verify Phone Number
          </button>
        </div>
      )}
      {isPhoneVerified && <p>Your phone number has been successfully added!</p>}
      <div id='recaptcha-container'></div> {/* Invisible reCAPTCHA */}
    </div>
  );
};

export default AddPhoneNumber;
