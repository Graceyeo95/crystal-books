import library from '@/assets/library.avif';
import { HeroBanner } from '@/components';
import { useAuth } from '@/lib/context/AuthProvider';
import { useState } from 'react';
import { updateUserProfile } from '@/lib/firebase/authentication/emailAuth';
import AddPhoneNumber from '@/components/AddPhoneNumber';
import withTransition from '@/HOC/withTransition';
import { useNavigate } from 'react-router-dom';
import { signOutUser } from '@/lib/firebase/authentication/signOut';

const Account = () => {
  const { user, loading } = useAuth();
  const [displayName, setDisplayName] = useState(user?.displayName || '');
  const [email] = useState(user?.email || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber || '');
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  const handleSaveChanges = (
    displayName: string,
    photoURL: string,
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    updateUserProfile(displayName, photoURL, setIsEditing);
  };

  return (
    <div className='bg-white w-full h-full'>
      <HeroBanner
        image={{
          src: library,
          alt: 'Library Background',
        }}
        heading='My account'
      />
      <button
        onClick={() => signOutUser(navigate)}
        className='bg-navy py-4 px-12 text-end text-white w-full'
      >
        Sign Out
      </button>
      <div className='container mx-auto w-[300px] md:w-[600px] flex justify-center'>
        {loading && <div>Loading...</div>}
        {user && (
          <div className='flex flex-col py-32 items-center w-full'>
            <img
              src={photoURL || 'default-avatar.png'}
              alt='Profile'
              className='size-[300px] rounded-full object-cover mb-6'
            />
            <div className='flex flex-col gap-4 w-full'>
              {!isEditing ? (
                <>
                  <p>이름: {displayName}</p>
                  <p>이메일: {email}</p>
                  <p>전화번호: {phoneNumber}</p>
                  <button
                    onClick={() => setIsEditing(true)}
                    className='bg-blue-500 text-white px-4 py-2 rounded mt-4 w-fit mx-auto'
                  >
                    Edit Account
                  </button>
                </>
              ) : (
                <>
                  <input
                    type='text'
                    value={photoURL}
                    onChange={(e) => setPhotoURL(e.target.value)}
                    placeholder='Update Profile Image URL'
                    className='p-2 rounded w-full'
                  />
                  <input
                    type='text'
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    placeholder='Update Display Name'
                    className='p-2 rounded w-full'
                  />
                  <AddPhoneNumber
                    phoneNumber={phoneNumber}
                    setPhoneNumber={setPhoneNumber}
                  />
                  <div className='flex justify-between'>
                    <button
                      onClick={() => setIsEditing(false)}
                      className='bg-red-500 text-white px-4 py-2 rounded mt-4'
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() =>
                        handleSaveChanges(displayName, photoURL, setIsEditing)
                      }
                      className='bg-blue-500 text-white px-4 py-2 rounded mt-4'
                    >
                      Save Changes
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default withTransition(Account);
