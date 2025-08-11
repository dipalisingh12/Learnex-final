@@ .. @@
 import React, { useState } from 'react';
 import { Outlet, useLocation } from 'react-router-dom';
 import { 
   LayoutDashboard, 
   BookOpen, 
   GraduationCap,
   BarChart2,
   MessageSquare,
   Settings,
   Menu,
   X,
   FileText,
   Brain,
   Users,
   Bell,
   User,
   Target,
   CheckSquare,
   ChevronDown,
   HelpCircle,
   LogOut
 } from 'lucide-react';
 import { Link } from './Link';
 import { motion, AnimatePresence } from 'framer-motion';
+import LogoutConfirmationModal from './LogoutConfirmationModal';
+import { useLogout } from '../hooks/useLogout';

 const StudentLayout: React.FC = () => {
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
   const [isProfileOpen, setIsProfileOpen] = useState(false);
   const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
   const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
   const location = useLocation();
+  const { showLogoutModal, handleLogoutClick, handleLogoutConfirm, handleLogoutCancel } = useLogout();

   const primaryMenuItems = [
@@ .. @@
     { title: 'Achievement Unlocked', message: '7-day study streak! 🔥', time: '2h ago' },
   ];

-  const handleLogout = () => {
-    // Handle logout logic here
-    console.log('Logout clicked');
-  };

   return (
@@ .. @@
                       <button
                         className="flex items-center w-full px-4 py-2 rounded-md text-red-600 hover:bg-red-50"
+                        onClick={handleLogoutClick}
                       >
                         <LogOut className="h-5 w-5 mr-2" />
                         Logout
@@ .. @@
                   <button
                     className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
-                    onClick={handleLogout}
+                    onClick={handleLogoutClick}
                   >
                     <LogOut className="h-4 w-4 mr-2" />
                     Logout
@@ .. @@
           onClick={() => setIsSidebarOpen(false)}
         ></div>
       )}
+
+      {/* Logout Confirmation Modal */}
+      <LogoutConfirmationModal
+        isOpen={showLogoutModal}
+        onConfirm={handleLogoutConfirm}
+        onCancel={handleLogoutCancel}
+      />
     </div>
   );
 };