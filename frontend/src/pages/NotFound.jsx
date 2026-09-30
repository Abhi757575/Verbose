import { Link } from 'react-router-dom';
// Import the downloaded illustration
import NotFoundImg from '../assets/404 Error with a cute animal-bro.svg'; 

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      
      {/* Storyset Cute Animal Illustration */}
      <img 
        src={NotFoundImg} 
        alt="404 Error with a cute animal" 
        className="w-full max-w-sm md:max-w-md h-auto mb-6 object-contain"
      />

      {/* Title */}
      <h1 className="text-3xl font-bold text-[#0F172A] mb-2">
        Oops! Page Not Found
      </h1>

      {/* Description */}
      <p className="text-[#64748B] mb-6 max-w-sm">
        The page you are looking for doesn't exist or might have wandered off.
      </p>

      {/* Navigation Button */}
      <Link 
        to="/" 
        className="bg-[#25D366] hover:bg-[#1DA851] text-white font-semibold px-6 py-2.5 rounded-lg transition-colors duration-200 shadow-sm"
      >
        Go Back Home
      </Link>

    </div>
  );
};

export default NotFound;