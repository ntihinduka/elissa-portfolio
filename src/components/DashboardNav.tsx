
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const DashboardNav = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleLogout = () => {
    localStorage.removeItem('portfolioToken');
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-portfolio-blue font-bold text-xl">
              Elissa<span className="text-portfolio-gold">.dev</span>
            </a>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-4">
            <div className="text-gray-700">Dashboard</div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleLogout}
              className="flex items-center text-gray-700 hover:text-red-600"
            >
              <LogOut size={16} className="mr-1" />
              Logout
            </Button>
          </div>
          
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-portfolio-blue focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="text-gray-700 block px-3 py-2">Dashboard</div>
            <button
              onClick={handleLogout}
              className="text-gray-700 hover:text-red-600 block px-3 py-2 w-full text-left flex items-center"
            >
              <LogOut size={16} className="mr-1" />
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default DashboardNav;
