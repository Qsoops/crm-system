import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className='relative bg-gray-800 p-6 rounded shadow-lg text-white max-w-md w-full'
      >
        <button
          onClick={onClose}
          className='absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded'
        >
          X
        </button>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Modal;