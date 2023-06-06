export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="bg-green-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      {children}
    </button>
  );
}
