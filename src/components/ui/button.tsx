export function Button({
  children,
  variant = "default",
  className,
}: {
  children: React.ReactNode;
  variant?: "default" | "outline";
  className?: string;
}) {
  const styles =
    variant === "outline"
      ? "border border-black text-black bg-transparent"
      : "bg-black text-white";

  return (
    <button className={`px-4 py-2 rounded-full font-semibold ${styles} ${className}`}>
      {children}
    </button>
  );
}
