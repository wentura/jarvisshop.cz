"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logout from "./logout";

export default function AdminMenu() {
  const pathname = usePathname();

  const menuItems = [
    { href: "/admin", label: "Dashboard", icon: "📊" },
    { href: "/admin/products", label: "Products", icon: "📦" },
    { href: "/admin/categories", label: "Categories", icon: "🏷️" },
    { href: "/admin/suppliers", label: "Suppliers", icon: "🏢" },
  ];

  return (
    <nav className="bg-white shadow-lg h-full p-4">
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800">Admin Panel</h2>
      </div>
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                pathname === item.href
                  ? "bg-indigo-500 text-white"
                  : "text-gray-600 hover:bg-indigo-50"
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="absolute bottom-4 left-4 right-4">
        {/* <Link
          href="/admin/settings"
          className="flex items-center px-4 py-2 text-gray-600 hover:bg-indigo-50 rounded-lg transition-colors"
        >
          <span className="mr-3">⚙️</span>
          Settings
        </Link> */}
        <Logout />
      </div>
    </nav>
  );
}
