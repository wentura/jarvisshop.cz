"use client";
import { useState } from "react";

export default function AddShopModal({ onClose, onAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    logo: "",
    map: "",
    gps: "",
    short_name: "",
    id_inter: "",
    is_visible: false,
    is_deleted: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Prepare data with null values for empty optional fields
      const submitData = {
        ...formData,
        logo:
          formData.logo && formData.logo.trim() === "" ? null : formData.logo,
        map: formData.map && formData.map.trim() === "" ? null : formData.map,
        gps: formData.gps && formData.gps.trim() === "" ? null : formData.gps,
        desc:
          formData.desc && formData.desc.trim() === "" ? null : formData.desc,
        short_name:
          formData.short_name && formData.short_name.trim() === ""
            ? null
            : formData.short_name,
        id_inter:
          formData.id_inter && formData.id_inter.toString().trim() === ""
            ? null
            : formData.id_inter,
      };

      const response = await fetch("/api/shops/admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to create shop");
      }

      const data = await response.json();
      onAdd(data.shop);
      onClose();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-20 mx-auto p-5 border w-[600px] shadow-lg rounded-md bg-white">
        <div className="mt-3">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Přidat nový obchod
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Název
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-4 border-2"
                required
                placeholder="Zadejte název obchodu"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Krátký název (pro URL)
              </label>
              <input
                type="text"
                name="short_name"
                value={formData.short_name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-4 border-2"
                placeholder="napr-obchod"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                ID Inter
              </label>
              <input
                type="text"
                name="id_inter"
                value={formData.id_inter}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-4 border-2"
                placeholder="Externí ID"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Popis
              </label>
              <textarea
                name="desc"
                value={formData.desc}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-4 border-2"
                placeholder="Zadejte popis obchodu"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Logo URL
              </label>
              <input
                type="url"
                name="logo"
                value={formData.logo}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-4 border-2"
                placeholder="https://example.com/logo.png"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mapa URL
              </label>
              <input
                type="url"
                name="map"
                value={formData.map}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-4 border-2"
                placeholder="https://example.com/map.png"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                GPS souřadnice
              </label>
              <input
                type="text"
                name="gps"
                value={formData.gps}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-4 border-2"
                placeholder="50.0755, 14.4378"
              />
            </div>

            {/* Status Controls */}
            <div className="border-t pt-4">
              <h4 className="text-sm font-medium text-gray-900 mb-3">
                Stav obchodu
              </h4>

              <div className="space-y-3">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="is_visible"
                    checked={formData.is_visible}
                    onChange={handleChange}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label className="ml-2 text-sm text-gray-700">
                    Obchod je viditelný pro zákazníky
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="is_deleted"
                    checked={formData.is_deleted}
                    onChange={handleChange}
                    className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  />
                  <label className="ml-2 text-sm text-gray-700">
                    Obchod je smazán (soft delete)
                  </label>
                </div>
              </div>
            </div>

            {error && <div className="text-sm text-red-600">{error}</div>}

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md"
              >
                Zrušit
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md disabled:opacity-50"
              >
                {loading ? "Vytvářím..." : "Vytvořit obchod"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
