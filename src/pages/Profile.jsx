import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/lib/AuthContext';
import AnimatedBackground from '@/components/AnimatedBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AIAssistant from '@/components/AIAssistant';
import { User, Shield, Mail, Lock, Loader2, Check } from 'lucide-react';

export default function Profile() {
  const { user, updateProfile, isAuthenticated } = useAuth();

  const [activeTab, setActiveTab] = useState('general'); // 'general' | 'security'

  // General profile state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [generalLoading, setGeneralLoading] = useState(false);
  const [generalError, setGeneralError] = useState('');
  const [generalSuccess, setGeneralSuccess] = useState(false);

  // Security / Password state
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [securityLoading, setSecurityLoading] = useState(false);
  const [securityError, setSecurityError] = useState('');
  const [securitySuccess, setSecuritySuccess] = useState(false);

  useEffect(() => {
    if (user) {
      setName(user.name || '');
      setEmail(user.email || '');
    }
  }, [user]);

  if (!isAuthenticated) {
    return (
      <div className="relative min-h-screen flex items-center justify-center">
        <AnimatedBackground />
        <div className="text-center z-10">
          <p className="text-slate-400 mb-4">Please log in to view your profile settings.</p>
          <a href="/login" className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-hacklido-electric to-hacklido-cyan text-sm font-semibold text-hacklido-deepest">
            Go to Login
          </a>
        </div>
      </div>
    );
  }

  const handleUpdateGeneral = async (e) => {
    e.preventDefault();
    setGeneralLoading(true);
    setGeneralError('');
    setGeneralSuccess(false);

    try {
      await updateProfile({ name, email });
      setGeneralSuccess(true);
      setTimeout(() => setGeneralSuccess(false), 3000);
    } catch (err) {
      setGeneralError(err.response?.data?.error || err.message || 'Failed to update profile');
    } finally {
      setGeneralLoading(false);
    }
  };

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    setSecurityLoading(true);
    setSecurityError('');
    setSecuritySuccess(false);

    if (newPassword !== confirmPassword) {
      setSecurityError('New passwords do not match');
      setSecurityLoading(false);
      return;
    }

    try {
      await updateProfile({ currentPassword, newPassword });
      setSecuritySuccess(true);
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setTimeout(() => setSecuritySuccess(false), 3000);
    } catch (err) {
      setSecurityError(err.response?.data?.error || err.message || 'Failed to update password');
    } finally {
      setSecurityLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />

      <main className="relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="mb-10 text-center sm:text-left">
            <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white">Account Settings</h1>
            <p className="text-sm text-slate-400 mt-2">Manage your account information and preferences</p>
          </div>

          <div className="grid md:grid-cols-[220px_1fr] gap-8 items-start">
            {/* Sidebar Navigation */}
            <div className="flex md:flex-col gap-2 overflow-x-auto pb-4 md:pb-0 scrollbar-none border-b md:border-b-0 md:border-r border-white/10 md:pr-4">
              <button
                onClick={() => setActiveTab('general')}
                className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-semibold transition-all w-full shrink-0 ${
                  activeTab === 'general'
                    ? 'bg-hacklido-electric/10 text-hacklido-cyan border border-hacklido-cyan/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                <User className="w-4 h-4" />
                General Profile
              </button>
              <button
                onClick={() => setActiveTab('security')}
                className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-semibold transition-all w-full shrink-0 ${
                  activeTab === 'security'
                    ? 'bg-hacklido-electric/10 text-hacklido-cyan border border-hacklido-cyan/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                <Shield className="w-4 h-4" />
                Security
              </button>
            </div>

            {/* Tab Contents */}
            <div className="glass rounded-3xl p-6 sm:p-8 border border-white/10">
              {activeTab === 'general' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-xl font-heading font-bold text-white mb-6">General Profile Info</h2>
                  
                  {generalError && (
                    <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-sm">
                      {generalError}
                    </div>
                  )}

                  {generalSuccess && (
                    <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm flex items-center gap-2">
                      <Check className="w-4 h-4" />
                      Profile updated successfully!
                    </div>
                  )}

                  <form onSubmit={handleUpdateGeneral} className="space-y-6">
                    {/* Name input */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your full name"
                          className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-950/40 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-hacklido-cyan/40 focus:ring-1 focus:ring-hacklido-cyan/40 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Email input */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="yourname@gmail.com"
                          className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-950/40 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-hacklido-cyan/40 focus:ring-1 focus:ring-hacklido-cyan/40 transition-colors"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={generalLoading}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-hacklido-electric to-hacklido-cyan text-sm font-semibold text-hacklido-deepest hover:shadow-xl hover:shadow-hacklido-electric/20 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {generalLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Saving changes...
                        </>
                      ) : (
                        'Save Profile'
                      )}
                    </button>
                  </form>
                </motion.div>
              )}

              {activeTab === 'security' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-xl font-heading font-bold text-white mb-6">Change Password</h2>

                  {securityError && (
                    <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-sm">
                      {securityError}
                    </div>
                  )}

                  {securitySuccess && (
                    <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm flex items-center gap-2">
                      <Check className="w-4 h-4" />
                      Password updated successfully!
                    </div>
                  )}

                  <form onSubmit={handleUpdatePassword} className="space-y-6">
                    {/* Current password input */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Current Password</label>
                      <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                        <input
                          type="password"
                          required
                          value={currentPassword}
                          onChange={(e) => setCurrentPassword(e.target.value)}
                          placeholder="••••••••"
                          className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-950/40 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-hacklido-cyan/40 focus:ring-1 focus:ring-hacklido-cyan/40 transition-colors"
                        />
                      </div>
                    </div>

                    {/* New password input */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">New Password</label>
                      <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                        <input
                          type="password"
                          required
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          placeholder="••••••••"
                          className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-950/40 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-hacklido-cyan/40 focus:ring-1 focus:ring-hacklido-cyan/40 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Confirm password input */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Confirm New Password</label>
                      <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                        <input
                          type="password"
                          required
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          placeholder="••••••••"
                          className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-950/40 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-hacklido-cyan/40 focus:ring-1 focus:ring-hacklido-cyan/40 transition-colors"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={securityLoading}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-hacklido-electric to-hacklido-cyan text-sm font-semibold text-hacklido-deepest hover:shadow-xl hover:shadow-hacklido-electric/20 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {securityLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Updating...
                        </>
                      ) : (
                        'Update Password'
                      )}
                    </button>
                  </form>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </main>

      <AIAssistant />
      <Footer />
    </div>
  );
}
