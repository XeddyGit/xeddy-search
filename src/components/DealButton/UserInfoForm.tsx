interface UserInfoFormProps {
  onSubmit: (e: React.FormEvent) => void;
  userInfo: { name: string; phone: string };
  setUserInfo: (info: { name: string; phone: string }) => void;
}

export function UserInfoForm({ onSubmit, userInfo, setUserInfo }: UserInfoFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <h2 className="text-xl font-bold">Get Your Deal</h2>
      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={userInfo.name}
          onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          value={userInfo.phone}
          onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
        
      </div>
      <div className="flex justify-center items-center">
        <input
          type="checkbox"
          id="agreement"
          className="mr-2"
          required
        />
        <label htmlFor="agreement" className="text-sm text-black-500">
        I agree to receive promotional text messages and marketing communications from Xeddy about deals and offers from restaurants. Standard messaging rates may apply. Reply STOP to opt out.

        </label>
      </div>
      <button
        type="submit"
        className="w-full bg-primary text-white px-4 py-2 rounded-lg"
      >
        Send Verification Code
      </button>
    </form>
  );
}
