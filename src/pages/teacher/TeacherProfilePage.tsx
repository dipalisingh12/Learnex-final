@@ .. @@
                 <button className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                   Logout
                 </button>
@@ .. @@
 import React, { useState } from 'react';
 import { Edit, Save, X, Camera, Mail, User, BookOpen, FileText, ClipboardList, FileCheck, Award, Calendar } from 'lucide-react';
+import LogoutConfirmationModal from '../../components/LogoutConfirmationModal';
+import { useLogout } from '../../hooks/useLogout';

 const TeacherProfilePage = () => {
   const [isEditing, setIsEditing] = useState(false);
+  const { showLogoutModal, handleLogoutClick, handleLogoutConfirm, handleLogoutCancel } = useLogout();
   const [profileData, setProfileData] = useState({
@@ .. @@
                 <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                   Change Password
                 </button>
-                <button className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors">
+                <button 
+                  onClick={handleLogoutClick}
+                  className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
+                >
                   Logout
                 </button>
               </div>
@@ .. @@
           </div>
         </div>
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