import AdminMenu from "./components/AdminMenu";

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100 font-mono">
      {/* Sidebar */}
      <div className="w-[300px] fixed left-0 top-0 h-screen border-r border-gray-200">
        <AdminMenu />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-[300px] font-mono">
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}
