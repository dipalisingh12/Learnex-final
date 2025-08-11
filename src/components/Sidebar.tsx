@@ .. @@
 import React from 'react';
import { LayoutDashboard, BookOpen, FileText, Users, BarChart2, User, LogOut } from 'lucide-react';
 import { Link } from './Link';
+import LogoutConfirmationModal from './LogoutConfirmationModal';
+import { useLogout } from '../hooks/useLogout';

 const Sidebar: React.FC = () => {
 }
+  const { showLogoutModal, handleLogoutClick, handleLogoutConfirm, handleLogoutCancel } = useLogout();
+
   return (
   )
-    <div className="h-full bg-indigo-900 text-white w-64 flex flex-col py-6 px-4">
+    <>
+      <div className="h-full bg-indigo-900 text-white w-64 flex flex-col py-6 px-4">
       <div className="mb-8 px-4">
@@ .. @@
       
       <div className="mt-auto px-4 py-2">
         <div className="flex items-center">
           <div className="h-8 w-8 rounded-full bg-indigo-700 flex items-center justify-center text-white font-medium">
             JD
           </div>
           <div className="ml-2">
             <p className="text-sm font-medium">John Doe</p>
             <p className="text-xs text-indigo-200">Student</p>
           </div>
         </div>
+        <button
+          onClick={handleLogoutClick}
+          className="mt-3 w-full flex items-center justify-center px-3 py-2 text-red-300 hover:bg-red-600 hover:text-white rounded-md transition-colors"
+        >
+          <LogOut className="h-4 w-4 mr-2" />
+          Logout
+        </button>
       </div>
-    </div>
+      </div>
+
+      {/* Logout Confirmation Modal */}
+      <LogoutConfirmationModal
+        isOpen={showLogoutModal}
+        onConfirm={handleLogoutConfirm}
+        onCancel={handleLogoutCancel}
+      />
+    </>
   );
 };