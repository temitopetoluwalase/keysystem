// src/pages/NotFound.jsx
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center text-center'>
      <h1 className='text-4xl font-bold mb-4'>404 - Page Not Found</h1>
      <p className='mb-6'>Oops! The page you're looking for doesn't exist.</p>
      <Link to='/' className='text-blue-500 underline'>
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
