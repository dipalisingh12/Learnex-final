import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../utils/auth';

export const useLogout = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  const handleLogoutConfirm = () => {
    logout();
    setShowLogoutModal(false);
    navigate('/');
  };

  const handleLogoutCancel = () => {
    setShowLogoutModal(false);
  };

  return {
    showLogoutModal,
    handleLogoutClick,
    handleLogoutConfirm,
    handleLogoutCancel
  };
};