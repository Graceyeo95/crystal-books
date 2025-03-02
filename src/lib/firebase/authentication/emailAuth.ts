import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from '..';
import { NavigateFunction } from 'react-router-dom';
import { toast } from 'react-toastify';

export const registerUser = async (
  name: string,
  email: string,
  password: string,
  photoURL: string,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  navigate: NavigateFunction
) => {
  try {
    setLoading(true);
    //create a new user
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const newUser = userCredential.user;

    // Update the user's display name
    await updateProfile(newUser, {
      displayName: name,
      photoURL: photoURL,
    });

    // sent an email verification to the users email
    await sendEmailVerification(newUser);

    alert(`A verification email has been sent to your email address ${email}`);
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
    navigate('/');
  }
};

export const loginUserWithEmailAndPassword = async (
  email: string,
  password: string,
  navigate: NavigateFunction
) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const results = userCredential.user;
    console.log(results, 'results');
    if (!results.emailVerified) {
      toast.error('Please verify your email address to login');
      return;
    }

    toast.success('Login successful');
    navigate('/');
  } catch (error) {
    console.error(error);
    toast.error('Invalid email or password');
  }
};

export const updateUserProfile = async (
  name: string,
  photoURL: string,
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const user = auth.currentUser;
    if (!user) return;

    await updateProfile(user, {
      displayName: name,
      photoURL: photoURL,
    });

    toast.success('Profile updated successfully');
    setIsEditing(false);
  } catch (error) {
    console.error(error);
    toast.error('Error updating profile');
  }
};
