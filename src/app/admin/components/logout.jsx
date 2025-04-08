"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
// import AdminForm from "./components/Form";

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated =
      localStorage.getItem("isAdminAuthenticated") === "true";
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("isAdminAuthenticated");
    document.cookie =
      "isAdminAuthenticated=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT";
    router.push("/login");
  };

  return (
    <div>
      <button
        onClick={handleLogout}
        className="flex items-center px-4 py-2 text-gray-600 hover:bg-indigo-50 rounded-lg transition-colors"
      >
        <span className="mr-3">🚪</span>
        Odhlásit se
      </button>
    </div>
  );
}
