@@ .. @@
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
+import LogoutConfirmationModal from './LogoutConfirmationModal';
+import { useLogout } from '../hooks/useLogout';

 const TeacherLayout = () => {
   const location = useLocation();
   const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
+  const { showLogoutModal, handleLogoutClick, handleLogoutConfirm, handleLogoutCancel } = useLogout();
   
   const navItems = [
@@ .. @@
           })}
           
-          <button className="flex items-center space-x-3 px-4 py-3 rounded-lg text-blue-200 hover:bg-red-600 hover:text-white transition-colors w-full mt-8">
+          <button 
+            onClick={handleLogoutClick}
+            className="flex items-center space-x-3 px-4 py-3 rounded-lg text-blue-200 hover:bg-red-600 hover:text-white transition-colors w-full mt-8"
+          >
             <LogOut size={20} />
             <span>Logout</span>
           </button>
@@ .. @@

         <Outlet />
       </div>
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