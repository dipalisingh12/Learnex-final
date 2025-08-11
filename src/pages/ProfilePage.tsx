@@ .. @@
 import React, { useState } from 'react';
-import { User, Mail, Calendar, Settings, Lock, LogOut } from 'lucide-react';
+import { User, Mail, Calendar, Settings, Lock, LogOut } from 'lucide-react';
 import Layout from '../components/Layout';
 import Sidebar from '../components/Sidebar';
 import Button from '../components/Button';
 import Input from '../components/Input';
 import Toast, { ToastType } from '../components/Toast';
+import LogoutConfirmationModal from '../components/LogoutConfirmationModal';
+import { useLogout } from '../hooks/useLogout';

 const ProfilePage: React.FC = () => {
   const [activeTab, setActiveTab] = useState<'profile' | 'security'>('profile');
   const [isEditing, setIsEditing] = useState(false);
   const [showToast, setShowToast] = useState(false);
   const [toastMessage, setToastMessage] = useState('');
   const [toastType, setToastType] = useState<ToastType>('success');
+  const { showLogoutModal, handleLogoutClick, handleLogoutConfirm, handleLogoutCancel } = useLogout();
   
   const [userData, setUserData] = useState({
@@ .. @@
                       <button
                        className="flex items-center px-3 py-2 rounded-md text-red-600 hover:bg-red-50"
+                        onClick={handleLogoutClick}
                       >
                         <LogOut className="h-5 w-5 mr-2" />
                        Logout
@@ .. @@
           onClose={() => setShowToast(false)}
         />
       )}
+
+      {/* Logout Confirmation Modal */}
+      <LogoutConfirmationModal
+        isOpen={showLogoutModal}
+        onConfirm={handleLogoutConfirm}
+        onCancel={handleLogoutCancel}
+      />
     </Layout>
   );
 };