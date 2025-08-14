import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Home, 
  BookOpen, 
  Calendar, 
  MessageSquare, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  MoreHorizontal,
  User,
  Bell,
  HelpCircle
} from 'lucide-react';
import { Link } from './Link';
import { motion, AnimatePresence } from 'framer-motion';
import LogoutConfirmationModal from './LogoutConfirmationModal';
import { useLogout } from '../hooks/useLogout';

const StudentLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const location = useLocation();
  const { showLogoutModal, handleLogoutClick, handleLogoutConfirm, handleLogoutCancel } = useLogout();

  const primaryMenuItems = [
    { icon: Home, label: 'Dashboard', path: '/student/dashboard' },
    { icon: BookOpen, label: 'Courses', path: '/student/courses' },
    { icon: Calendar, label: 'Schedule', path: '/student/schedule' },
    { icon: MessageSquare, label: 'Messages', path: '/student/messages' },
  ];

  const secondaryMenuItems = [
    { icon: User, label: 'Profile', path: '/student/profile' },
    { icon: Bell, label: 'Notifications', path: '/student/notifications' },
    { icon: Settings, label: 'Settings', path: '/student/settings' },
    { icon: HelpCircle, label: 'Help', path: '/student/help' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white shadow-sm border-b px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="p-2 rounded-md hover:bg-gray-100"
        >
          <Menu className="h-6 w-6" />
        </button>
        <h1 className="text-lg font-semibold">Student Portal</h1>
        <div className="relative">
          <button
            onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
            className="p-2 rounded-md hover:bg-gray-100"
          >
            <MoreHorizontal className="h-6 w-6" />
          </button>
          
          <AnimatePresence>
            {isMoreMenuOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border z-50"
              >
                {secondaryMenuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 first:rounded-t-md"
                    onClick={() => setIsMoreMenuOpen(false)}
                  >
                    <item.icon className="h-4 w-4 mr-2" />
                    {item.label}
                  </Link>
                ))}
                <div className="border-t">
                  <button
                    className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={handleLogoutClick}
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-col flex-grow bg-white border-r border-gray-200 pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <h1 className="text-xl font-bold text-gray-900">Student Portal</h1>
          </div>
          <div className="mt-5 flex-grow flex flex-col">
            <nav className="flex-1 px-2 space-y-1">
              {primaryMenuItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? 'bg-blue-100 text-blue-900'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <item.icon
                      className={`mr-3 flex-shrink-0 h-6 w-6 ${
                        isActive ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'
                      }`}
                    />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="border-t border-gray-200 pt-4">
              <nav className="px-2 space-y-1">
                {secondaryMenuItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                        isActive
                          ? 'bg-blue-100 text-blue-900'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      <item.icon
                        className={`mr-3 flex-shrink-0 h-6 w-6 ${
                          isActive ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'
                        }`}
                      />
                      {item.label}
                    </Link>
                  );
                })}
                <button
                  onClick={handleLogoutClick}
                  className="group flex items-center w-full px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900"
                >
                  <LogOut className="mr-3 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500" />
                  Logout
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 flex z-40"
            >
              <motion.div
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                exit={{ x: -300 }}
                className="relative flex-1 flex flex-col max-w-xs w-full bg-white"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    onClick={() => setIsSidebarOpen(false)}
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  >
                    <X className="h-6 w-6 text-white" />
                  </button>
                </div>
                <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                  <div className="flex-shrink-0 flex items-center px-4">
                    <h1 className="text-xl font-bold text-gray-900">Student Portal</h1>
                  </div>
                  <nav className="mt-5 px-2 space-y-1">
                    {primaryMenuItems.map((item) => {
                      const isActive = location.pathname === item.path;
                      return (
                        <Link
                          key={item.path}
                          to={item.path}
                          className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                            isActive
                              ? 'bg-blue-100 text-blue-900'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                          }`}
                          onClick={() => setIsSidebarOpen(false)}
                        >
                          <item.icon
                            className={`mr-4 flex-shrink-0 h-6 w-6 ${
                              isActive ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'
                            }`}
                          />
                          {item.label}
                        </Link>
                      );
                    })}
                  </nav>
                  <div className="border-t border-gray-200 mt-4 pt-4">
                    <nav className="px-2 space-y-1">
                      {secondaryMenuItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                          <Link
                            key={item.path}
                            to={item.path}
                            className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                              isActive
                                ? 'bg-blue-100 text-blue-900'
                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                            }`}
                            onClick={() => setIsSidebarOpen(false)}
                          >
                            <item.icon
                              className={`mr-4 flex-shrink-0 h-6 w-6 ${
                                isActive ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'
                              }`}
                            />
                            {item.label}
                          </Link>
                        );
                      })}
                      <button
                        onClick={handleLogoutClick}
                        className="group flex items-center w-full px-2 py-2 text-base font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900"
                      >
                        <LogOut className="mr-4 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500" />
                        Logout
                      </button>
                    </nav>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            <div
              className="lg:hidden fixed inset-0 bg-gray-600 bg-opacity-75 z-30"
              onClick={() => setIsSidebarOpen(false)}
            ></div>
          </>
        )}
      </AnimatePresence>

      {/* Main content */}
      <div className="lg:pl-64 flex flex-col flex-1">
        <main className="flex-1">
          {/* Your main content will be rendered here */}
        </main>
      </div>

      {/* Click outside to close more menu */}
      {isMoreMenuOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsMoreMenuOpen(false)}
        ></div>
      )}

      {/* Logout Confirmation Modal */}
      <LogoutConfirmationModal
        isOpen={showLogoutModal}
        onConfirm={handleLogoutConfirm}
        onCancel={handleLogoutCancel}
      />
    </div>
  );
};

export default StudentLayout;