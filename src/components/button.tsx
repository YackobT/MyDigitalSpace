// src/components/button.tsx
type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Button({ children, className = '' }: ButtonProps) {
  return (
    <button
      className={`bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-full font-medium transition hover:scale-105 ${className}`}
    >
      {children}
    </button>
  );
}
