import { auth } from '..';
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  PhoneAuthProvider,
  PhoneAuthCredential,
  linkWithCredential,
} from 'firebase/auth';

// Add phone number (SMS verification)
export const sendPhoneVerification = async (
  phoneNumber: string,
  setIsPhoneVerificationSent: React.Dispatch<React.SetStateAction<boolean>>,
  setVerificationId: React.Dispatch<React.SetStateAction<string | null>>
) => {
  try {
    const recaptcha = new RecaptchaVerifier(auth, 'recaptcha-container', {
      size: 'invisible',
      callback: (response: any) => {
        console.log('reCAPTCHA solved:', response);
      },
    });

    await recaptcha.render();

    const formattedPhoneNumber = `+82${phoneNumber}`;

    const confirmationResult = await signInWithPhoneNumber(
      auth,
      formattedPhoneNumber,
      recaptcha
    );
    const verificationId = confirmationResult.verificationId;
    // Set the verification ID in state
    setVerificationId(verificationId);
    setIsPhoneVerificationSent(true);
  } catch (error) {
    console.log(error);
  }
};

export const verifyPhoneCodeAndLink = async (
  verificationId: string,
  verificationCode: string,
  setIsPhoneVerified: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const credential: PhoneAuthCredential = PhoneAuthProvider.credential(
    verificationId,
    verificationCode
  );
  const user = auth.currentUser;
  if (!user) return;
  await linkWithCredential(user, credential);
  alert('Phone number linked successfully');
  setIsPhoneVerified(true);
};
