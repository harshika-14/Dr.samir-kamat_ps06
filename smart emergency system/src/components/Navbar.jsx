export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-black/60 fixed w-full z-50">
      <h1 className="text-2xl font-bold text-red-500">RoadRescue</h1>

      <ul className="hidden md:flex gap-8 text-sm">
        <li>Features</li>
        <li>How It Works</li>
        <li>Who Benefits</li>
        <li>FAQ</li>
      </ul>

      <button className="bg-red-600 px-5 py-2 rounded-full text-sm hover:bg-red-700">
        Order Now
      </button>
    </nav>
  );
}