import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, Bell, User, LogOut, ChevronDown } from 'lucide-react';
import { useAuth } from '@/lib/AuthContext';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Learn', path: '/learn' },
  { label: 'Practice', path: '/practice' },
  { label: 'Explore', path: '/explore' },
  { label: 'Careers', path: '/careers' },
  { label: 'Community', path: '/community' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'About', path: '/about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className={`mx-auto max-w-7xl px-4 sm:px-6`}>
          <div
            className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-300 ${
              scrolled ? 'glass-strong shadow-lg shadow-black/20' : 'glass-subtle'
            }`}
          >
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="relative">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-hacklido-electric to-hacklido-purple flex items-center justify-center glow-blue transition-transform group-hover:scale-110">
                  <Terminal className="w-5 h-5 text-white" />
                </div>
              </div>
              <span className="text-lg font-heading font-bold tracking-tight text-white">
                Hacklido<span className="text-gradient-cyan"> Learn</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    location.pathname === link.path
                      ? 'text-hacklido-cyan'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-lg bg-hacklido-electric/10 border border-hacklido-electric/20"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Right side */}
            <div className="hidden lg:flex items-center gap-3">
              {isAuthenticated && user ? (
                <div className="flex items-center gap-4 relative">
                  {/* Notification Bell */}
                  <button className="relative w-10 h-10 rounded-xl glass-subtle flex items-center justify-center text-slate-300 hover:text-white hover:border-white/20 transition-all">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-hacklido-cyan glow-blue animate-pulse" />
                  </button>

                  {/* Profile Dropdown */}
                  <div className="relative">
                    <button 
                      onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-xl glass-subtle hover:border-white/20 transition-all"
                    >
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-hacklido-electric to-hacklido-purple flex items-center justify-center text-xs font-bold text-white uppercase">
                        {user.email[0]}
                      </div>
                      <span className="text-sm font-semibold text-slate-300">
                        {user.email.split('@')[0]}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${profileDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {profileDropdownOpen && (
                      <>
                        <div className="fixed inset-0 z-10" onClick={() => setProfileDropdownOpen(false)} />
                        <div className="absolute right-0 mt-2 w-48 rounded-xl glass-strong border border-white/10 shadow-2xl p-1.5 z-20">
                          <button className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                            <User className="w-4 h-4" />
                            Profile
                          </button>
                          <button 
                            onClick={() => logout(true)}
                            className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 rounded-lg transition-colors border-t border-white/5 mt-1 pt-2"
                          >
                            <LogOut className="w-4 h-4" />
                            Logout
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-sm font-medium text-slate-300 hover:text-white px-4 py-2 transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="text-sm font-semibold text-hacklido-deepest bg-gradient-to-r from-hacklido-electric to-hacklido-cyan px-5 py-2.5 rounded-xl hover:shadow-lg hover:shadow-hacklido-electric/30 transition-all duration-300 hover:scale-105"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-2"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-4 right-4 z-50 glass-strong rounded-2xl p-4 lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-hacklido-cyan bg-hacklido-electric/10'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              {isAuthenticated && user ? (
                <div className="flex flex-col gap-2 mt-2 pt-2 border-t border-white/5">
                  <div className="flex items-center gap-3 px-4 py-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-hacklido-electric to-hacklido-purple flex items-center justify-center text-xs font-bold text-white uppercase">
                      {user.email[0]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-white truncate">{user.email.split('@')[0]}</p>
                      <p className="text-[10px] text-slate-500 truncate">{user.email}</p>
                    </div>
                  </div>
                  <Link 
                    to="/profile" 
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-sm text-slate-300 hover:bg-white/5"
                  >
                    <User className="w-4 h-4" />
                    Profile
                  </Link>
                  <button 
                    onClick={() => {
                      setMobileOpen(false);
                      logout(true);
                    }}
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-sm text-rose-400 hover:bg-rose-500/10 text-left w-full"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex gap-2 mt-2 pt-2 border-t border-white/5">
                  <Link
                    to="/login"
                    onClick={() => setMobileOpen(false)}
                    className="flex-1 text-center text-sm font-medium text-slate-300 px-4 py-2.5 rounded-lg glass-subtle"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setMobileOpen(false)}
                    className="flex-1 text-center text-sm font-semibold text-hacklido-deepest bg-gradient-to-r from-hacklido-electric to-hacklido-cyan px-4 py-2.5 rounded-lg"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}