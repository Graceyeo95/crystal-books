import Button from '../components/Button';

const NotFound = () => {
  return (
    <div className='bg-navy text-white h-screen w-full flex flex-col gap-y-6 justify-center items-center headingText'>
      <p>404</p>
      <p>Page Not Found</p>
      <Button
        variant='outline'
        size='small'
        className='border-white border-2 text-white'
      >
        Back to Home
      </Button>
    </div>
  );
};

export default NotFound;
