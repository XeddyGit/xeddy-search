import { useState } from 'react';

interface VerificationFormProps {
  onVerify: (code: string) => void;
  onResend: () => void;
  phone: string;
}

export function VerificationForm({ onVerify, onResend, phone }: VerificationFormProps) {
  const [code, setCode] = useState('');

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Verify Your Phone</h2>
      <p className="text-sm">
        Enter the verification code sent to {phone}
      </p>
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        placeholder="Enter code"
      />
      <button
        onClick={() => onVerify(code)}
        className="w-full bg-primary text-white px-4 py-2 rounded-lg"
      >
        Verify Code
      </button>
      <button
        onClick={onResend}
        className="w-full text-primary underline"
      >
        Resend Code
      </button>
    </div>
  );
}
