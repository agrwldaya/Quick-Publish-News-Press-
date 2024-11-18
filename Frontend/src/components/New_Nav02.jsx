import React, { useState } from 'react';
import { Mail, Phone, User, LogOut, ShoppingCart } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { AuthSliceActions } from '@/Store/authSlice';
import logo from '/logo022.png'
export default function New_Nav02() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleSignout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
    dispatch(AuthSliceActions.logout());
    toast.success("Logout");
  };

  return (
    <nav className="bg-primary text-primary-foreground shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left section - Contact icons */}

        
          <div className="flex items-center space-x-4">
            <Link to='/'>
            <img    
                  src={logo}
                  className="h-8  w-16 me-3 object-cover"
                  alt="FlowBite Logo"/>
            </Link>
        
            <Link to="/contact" className="flex items-center hover:text-primary-foreground/80">
              <Mail className="h-5 w-5 mr-1" />
              <span className="hidden sm:inline">Email</span>
            </Link>
            <Link to="/call" className="flex items-center hover:text-primary-foreground/80">
              <Phone className="h-5 w-5 mr-1" />
              <span className="hidden sm:inline">Call</span>
            </Link>
          </div>

          {/* Right section - Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              variant="ghost"
              size="icon"
              className="hover:bg-primary-foreground/10 flex items-center"
            >
              <User className="h-5 w-5" />
              <span className="sr-only">User Profile</span>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-10">
                <Link
                  to="/profile"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  Profile
                </Link>
                <Link
                  to="/newscart"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  <ShoppingCart className="inline h-4 w-4 mr-2" />
                  NewsCart
                </Link>
                <button
                  onClick={() => {
                    setDropdownOpen(false);
                    handleSignout();
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  <LogOut className="inline h-4 w-4 mr-2" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
