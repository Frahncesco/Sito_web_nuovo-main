import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "./AuthContext";
import { UserCircle2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Chiudi il menu cliccando fuori (desktop)
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    setMenuOpen(false);
    navigate("/login");
  };

  return (
    <div>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#FCFBF8]/90 backdrop-blur-sm border-b border-[#E8E6E1] px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-1">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 rounded-full bg-[#8BAF9C] flex items-center justify-center"
            >
              <div className="w-6 h-6 rounded-full bg-[#FCFBF8] flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-[#D9C5B2]"></div>
              </div>
            </motion.div>
            <span className="font-semibold text-lg text-[#333333]">Atelier 35</span>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex space-x-8 text-[#555555]">
            <a href="/" className="hover:text-[#8BAF9C] transition-colors">Home</a>
            <a href="/products" className="hover:text-[#8BAF9C] transition-colors">Products</a>
            <a href="/our-story" className="hover:text-[#8BAF9C] transition-colors">Our Story</a>
            <a href="#footer" className="hover:text-[#8BAF9C] transition-colors">Contact</a>
          </div>

          {/* Desktop auth or user menu */}
          <div className="hidden md:flex items-center space-x-4 relative" ref={menuRef}>
            {isAuthenticated ? (
              <div className="relative">
                <button onClick={() => setMenuOpen((prev) => !prev)}>
                  <UserCircle2 className="text-[#555555] w-6 h-6 hover:text-[#8BAF9C]" />
                </button>
                {menuOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border border-[#E8E6E1] rounded-md shadow-md z-50">
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-[#555555] hover:bg-[#F2F1EE] hover:text-[#8BAF9C] transition"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Button
                variant="ghost"
                className="text-[#555555] hover:text-[#8BAF9C]"
                onClick={() => navigate("/login")}
              >
                Community Login
              </Button>
            )}
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(true)}>
            <Menu className="w-8 h-8 text-[#555555] hover:text-[#8BAF9C]" />
          </button>
          </div>
        </div>
      </nav>

      {/* Mobile slide-out menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-64 h-full bg-white z-50 shadow-lg border-l border-[#E8E6E1] flex flex-col"
          >
            <div className="flex justify-end p-4">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#555555] hover:text-[#8BAF9C]"
              >
                ✕
              </button>
            </div>
            <nav className="flex flex-col px-6 space-y-6 py-4 text-[#333333] font-medium">
              <a href="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#8BAF9C]">Home</a>
              <a href="/products" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#8BAF9C]">Products</a>
              <a href="/our-story" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#8BAF9C]">Our Story</a>
              <a href="#footer" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#8BAF9C]">Contact</a>
              {isAuthenticated ? (
                <button
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="text-left text-[#333333] hover:text-[#8BAF9C]"
                >
                  Logout
                </button>
              ) : (
                <a
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#8BAF9C]"
                >
                  Community Login
                </a>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;