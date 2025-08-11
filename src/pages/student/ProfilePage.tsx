@@ .. @@
 import React, { useState } from 'react';
 import { 
   // User, 
   // Mail, 
   // Calendar, 
   Download,
   Share2,
   TrendingUp,
   Award,
   Target,
   Clock,
   BookOpen,
   Star,
   Trophy,
   Zap,
   CheckCircle2,
   Edit3,
   Camera,
   Linkedin,
   ExternalLink,
+  LogOut,
   // BarChart3
 } from 'lucide-react';
 import { motion } from 'framer-motion';
 import Button from '../../components/Button';
 import Toast, { ToastType } from '../../components/Toast';
+import LogoutConfirmationModal from '../../components/LogoutConfirmationModal';
+import { useLogout } from '../../hooks/useLogout';

 interface Achievement {
@@ .. @@
 const ProfilePage: React.FC = () => {
   const [showToast, setShowToast] = useState(false);
   const [toastMessage, setToastMessage] = useState('');
   const [toastType, setToastType] = useState<ToastType>('success');
+  const { showLogoutModal, handleLogoutClick, handleLogoutConfirm, handleLogoutCancel } = useLogout();

   // Mock user data
@@ .. @@
           </div>
         </div>
       </div>

+      {/* Logout Button */}
+      <div className="mt-8">
+        <Button 
+          onClick={handleLogoutClick}
+          variant="outline"
+          className="border-red-300 text-red-600 hover:bg-red-50"
+        >
+          <LogOut className="h-4 w-4 mr-2" />
+          Logout
+        </Button>
+      </div>
+
       {/* Toast Notification */}
       {showToast && (
         <Toast
@@ -1,6 +1,13 @@
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