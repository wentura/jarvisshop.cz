"use client";
import { useEffect, useState } from "react";
import AddShopModal from "./components/AddShopModal";
import EditShopModal from "./components/EditShopModal";

export default function Shops() {
  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingShop, setEditingShop] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [showDeleted, setShowDeleted] = useState(false);
  const [showInvisible, setShowInvisible] = useState(true);

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const response = await fetch("/api/shops/admin");
        if (!response.ok) {
          throw new Error("Failed to fetch shops");
        }
        const data = await response.json();
        setShops(data.shops);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchShops();
  }, []);

  const handleEdit = (shop) => {
    setEditingShop(shop);
  };

  const handleUpdate = (updatedShop) => {
    setShops(
      shops.map((shop) => (shop.id === updatedShop.id ? updatedShop : shop))
    );
  };

  const handleAdd = (newShop) => {
    setShops([...shops, newShop]);
  };

  // Filter shops based on visibility and deletion status
  const filteredShops = shops.filter((shop) => {
    if (!showDeleted && shop.is_deleted) return false;
    if (!showInvisible && !shop.is_visible) return false;
    return true;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-32">
        <div className="text-gray-500">Loading shops...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-32">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Obchody</h1>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
        >
          Přidat obchod
        </button>
      </div>

      {/* Filter Controls */}
      <div className="flex gap-4 items-center">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="showDeleted"
            checked={showDeleted}
            onChange={(e) => setShowDeleted(e.target.checked)}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label htmlFor="showDeleted" className="ml-2 text-sm text-gray-700">
            Zobrazit smazané
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="showInvisible"
            checked={showInvisible}
            onChange={(e) => setShowInvisible(e.target.checked)}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label htmlFor="showInvisible" className="ml-2 text-sm text-gray-700">
            Zobrazit skryté
          </label>
        </div>
      </div>

      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Logo
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Název
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Krátký název
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Popis
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                GPS
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Stav
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Akce
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredShops.map((shop) => (
              <tr
                key={shop.id}
                className={`hover:bg-gray-50 ${
                  shop.is_deleted ? "bg-red-50" : ""
                }`}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {shop.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 max-w-24">
                  {shop.logo && (
                    <img
                      src={shop.logo}
                      alt={shop.name}
                      className="w-full h-auto rounded-full"
                    />
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {shop.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {shop.short_name || ""}
                </td>
                <td className="px-6 py-4 max-w-96 text-sm text-gray-500">
                  {shop.desc || ""}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {shop.gps || ""}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <div className="flex flex-col gap-1">
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        shop.is_visible
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {shop.is_visible ? "Viditelný" : "Skrytý"}
                    </span>
                    {shop.is_deleted && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        Smazán
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => handleEdit(shop)}
                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                  >
                    Edit
                  </button>
                  {/* <button className="text-red-600 hover:text-red-900">
                    Delete
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredShops.length === 0 && (
          <div className="text-center py-4 text-gray-500">
            {shops.length === 0
              ? "No shops found"
              : "No shops match current filters"}
          </div>
        )}
      </div>

      {editingShop && (
        <EditShopModal
          shop={editingShop}
          onClose={() => setEditingShop(null)}
          onUpdate={handleUpdate}
        />
      )}

      {isAddModalOpen && (
        <AddShopModal
          onClose={() => setIsAddModalOpen(false)}
          onAdd={handleAdd}
        />
      )}
    </div>
  );
}
