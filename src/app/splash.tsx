export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-2xl font-bold">My App</h1>
        <p className="mt-2 opacity-70">Loading...</p>
      </div>
    </div>
  );
}
