export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition">
      {children}
    </button>
  );
}
