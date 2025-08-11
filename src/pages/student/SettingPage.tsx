@@ .. @@
 import React, { useState } from 'react';
 import { 
   User, 
   Mail, 
   Lock, 
   Upload, 
   AlertTriangle, 
   Globe, 
   Bell, 
   Clock, 
   FileText,
   Trash2,
   Shield,
   Eye,
   EyeOff
 } from 'lucide-react';
 import Button from '../../components/Button';
 import Input from '../../components/Input';
 import Toast, { ToastType } from '../../components/Toast';
+import LogoutConfirmationModal from '../../components/LogoutConfirmationModal';
+import { useLogout } from '../../hooks/useLogout';

 const SettingsPage: React.FC = () => {
+  const { showLogoutModal, handleLogoutClick, handleLogoutConfirm, handleLogoutCancel } = useLogout();
   const [formData, setFormData] = useState({
@@ .. @@
                 <Button 
                   variant="outline"
                   className="border-red-300 text-red-600 hover:bg-red-50"
+                  onClick={handleLogoutClick}
                   disabled
                 >
                   <Trash2 className="h-4 w-4 mr-2" />
-                  Delete Account
+                  Logout
                 </Button>
                 <p className="text-xs text-red-600 mt-2">
-                  Contact support to enable account deletion
+                  Sign out of your account
                 </p>
               </div>
             </div>
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
     </div>
   );
 };