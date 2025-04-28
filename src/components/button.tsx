export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-6 py-2 rounded-full font-semibold bg-blue-600 text-white hover:bg-blue-700 transition">
      {children}
    </button>
  );
}
