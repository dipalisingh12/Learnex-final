import React from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { 
  Home, 
  LayoutDashboard, 
  FileText, 
  ClipboardList, 
  FileCheck, 
  MessageSquare, 
  User, 
  LogOut,
  Users,
  Settings,
  Bell,
  Menu,
  X
} from 'lucide-react';
import LogoutConfirmationModal from './LogoutConfirmationModal';
import { useLogout } from '../hooks/useLogout';

const TeacherLayout = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const { showLogoutModal, handleLogoutClick, handleLogoutConfirm, handleLogoutCancel } = useLogout();

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/teacher' },
    { icon: Users, label: 'Students', path: '/teacher/students' },
    { icon: FileText, label: 'Assignments', path: '/teacher/assignments' },
    { icon: ClipboardList, label: 'Quizzes', path: '/teacher/quizzes' },
    { icon: FileCheck, label: 'Grades', path: '/teacher/grades' },
    { icon: MessageSquare, label: 'Messages', path: '/teacher/messages' },
    { icon: User, label: 'Profile', path: '/teacher/profile' },
    { icon: Settings, label: 'Settings', path: '/teacher/settings' },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-blue-800 to-blue-900 text-white transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex items-center justify-between p-6 border-b border-blue-700">
          <h1 className="text-xl font-bold">EduPortal</h1>
          <button 
            onClick={toggleSidebar}
            className="lg:hidden text-white hover:text-gray-300"
          >
            <X size={24} />
          </button>
        </div>
        
        <nav className="mt-6 px-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsSidebarOpen(false)}
                className={`
                  flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 transition-colors
                  ${isActive 
                    ? 'bg-blue-600 text-white' 
                    : 'text-blue-200 hover:bg-blue-700 hover:text-white'
                  }
                `}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </Link>
            );
          })}
          
          <button 
            onClick={handleLogoutClick}
            className="flex items-center space-x-3 px-4 py-3 rounded-lg text-blue-200 hover:bg-red-600 hover:text-white transition-colors w-full mt-8"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                onClick={toggleSidebar}
                className="lg:hidden text-gray-600 hover:text-gray-900"
              >
                <Menu size={24} />
              </button>
              <h2 className="text-xl font-semibold text-gray-800">
                Teacher Dashboard
              </h2>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-600 hover:text-gray-900">
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </button>
              
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <User size={16} className="text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">Teacher</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>

      {/* Logout Confirmation Modal */}
      <LogoutConfirmationModal
        isOpen={showLogoutModal}
        onConfirm={handleLogoutConfirm}
        onCancel={handleLogoutCancel}
      />
    </div>
  );
};

export default TeacherLayout;