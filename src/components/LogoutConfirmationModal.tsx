import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LogOut, AlertTriangle } from 'lucide-react';
import Button from './Button';

interface LogoutConfirmationModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const LogoutConfirmationModal: React.FC<LogoutConfirmationModalProps> = ({
  isOpen,
  onConfirm,
  onCancel
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full shadow-xl"
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Confirm Logout</h3>
              <p className="text-gray-600">
                Are you sure you want to log out?
              </p>
            </div>

            <div className="flex gap-4">
              <Button
                variant="outline"
                onClick={onCancel}
                className="flex-1"
              >
                No
              </Button>
              <Button
                onClick={onConfirm}
                className="flex-1 bg-red-600 hover:bg-red-700"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Yes
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LogoutConfirmationModal;