interface SuccessMessageProps {
  onClose: () => void;
}

export function SuccessMessage({ onClose }: SuccessMessageProps) {
  return (
    <div className="text-center space-y-4">
      <h2 className="text-xl font-bold">Success!</h2>
      <p>Your deal has been sent to your phone.</p>
      <button
        onClick={onClose}
        className="w-full bg-primary text-white px-4 py-2 rounded-lg"
      >
        Close
      </button>
    </div>
  );
}
