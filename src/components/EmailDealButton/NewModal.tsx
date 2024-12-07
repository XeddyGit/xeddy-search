import React from 'react';

interface NewModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function NewModal({ isOpen, onClose, children }: NewModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2">×</button>
        {children}
      </div>
    </div>
  );
}
