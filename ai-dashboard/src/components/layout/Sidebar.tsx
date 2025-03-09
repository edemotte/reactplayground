import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-5">
      <h2 className="text-xl font-bold mb-4">AI Dashboard</h2>
      <ul>
        <li className="mb-2">
          <Link href="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
