import { Link, useLocation } from 'react-router-dom';
import juridentLogo from '../assets/jurident-logo.png';

const Navbar = () => {
  const location = useLocation();
  
  const getLinkClass = (path) => {
    return location.pathname === path 
      ? "text-[#D4AF37]" // Golden color for active link
      : "text-white hover:text-[#CDA454] transition-colors"; // White with hover effect for inactive
  };

  return (
    <nav className="px-6 py-4 z-50 flex items-center justify-between">
      <div className="flex items-center">
        <Link to="/">
          <img src={juridentLogo} alt="Jurident" className="h-[70px] w-[160px]" />
        </Link>
      </div>
      <div className="flex gap-6">
        <Link to="/" className={`${getLinkClass('/')} hover:text-[#CDA454]`}>Home</Link>
        <Link to="/calendar" className={getLinkClass('/calendar')}>Calendar</Link>
        <Link to="/news" className={getLinkClass('/news')}>News</Link>
        <Link to="/bare-act" className={getLinkClass('/bare-act')}>Bare Act PDF</Link>
        <Link to="/contact" className={getLinkClass('/contact')}>Contact Us</Link>
        <Link to="/profile" className={getLinkClass('/account')}>Account</Link>
    
      </div>
    </nav>
  );
};

export default Navbar; 