"use client";
import { useEffect, useState } from "react";
import AddProductModal from "./components/AddProductModal";
import EditProductModal from "./components/EditProductModal";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingProduct, setEditingProduct] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [sortField, setSortField] = useState("id");
  const [sortDirection, setSortDirection] = useState("asc");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSupplier, setSelectedSupplier] = useState("");
  const [selectedShop, setSelectedShop] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsRes, categoriesRes, suppliersRes, shopsRes] =
          await Promise.all([
            fetch("/api/products/admin"),
            fetch("/api/categories"),
            fetch("/api/suppliers"),
            fetch("/api/shops/admin"),
          ]);

        if (!productsRes.ok) {
          throw new Error("Failed to fetch products");
        }
        if (!categoriesRes.ok) {
          throw new Error("Failed to fetch categories");
        }
        if (!suppliersRes.ok) {
          throw new Error("Failed to fetch suppliers");
        }
        if (!shopsRes.ok) {
          throw new Error("Failed to fetch shops");
        }

        const productsData = await productsRes.json();
        const categoriesData = await categoriesRes.json();
        const suppliersData = await suppliersRes.json();
        const shopsData = await shopsRes.json();

        setProducts(productsData.products);
        setCategories(categoriesData.categories);
        setSuppliers(suppliersData.suppliers);
        setShops(shopsData.shops);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleUpdate = (updatedProduct) => {
    setProducts(
      products.map((prod) =>
        prod.id === updatedProduct.id ? updatedProduct : prod
      )
    );
  };

  const handleAdd = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  // Filter products by selected category, supplier, and shop
  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      !selectedCategory ||
      product.id_main_category === parseInt(selectedCategory);
    const supplierMatch =
      !selectedSupplier || product.id_supplier === parseInt(selectedSupplier);
    const shopMatch =
      !selectedShop ||
      (product.is_in_shop_inter_id &&
        product.is_in_shop_inter_id.includes(parseInt(selectedShop)));
    return categoryMatch && supplierMatch && shopMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    let aValue, bValue;

    switch (sortField) {
      case "id":
        aValue = a.id;
        bValue = b.id;
        break;
      case "jmeno":
        aValue = a.name?.toLowerCase() || "";
        bValue = b.name?.toLowerCase() || "";
        break;
      case "cena":
        aValue = parseFloat(a.price) || 0;
        bValue = parseFloat(b.price) || 0;
        break;
      case "kategorie":
        aValue = a.categories?.name?.toLowerCase() || "";
        bValue = b.categories?.name?.toLowerCase() || "";
        break;
      case "dodavatel":
        aValue = a.suppliers?.name?.toLowerCase() || "";
        bValue = b.suppliers?.name?.toLowerCase() || "";
        break;
      default:
        return 0;
    }

    if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
    if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-32">
        <div className="text-gray-500">Loading products...</div>
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
        <h1 className="text-2xl font-bold text-gray-900">Produkty</h1>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
        >
          Přidat produkt
        </button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-6">
        {/* Category Filter */}
        <div className="flex items-center gap-2">
          <label
            htmlFor="category-filter"
            className="text-sm font-medium text-gray-700"
          >
            Kategorie:
          </label>
          <select
            id="category-filter"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Všechny</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Supplier Filter */}
        <div className="flex items-center gap-2">
          <label
            htmlFor="supplier-filter"
            className="text-sm font-medium text-gray-700"
          >
            Dodavatel:
          </label>
          <select
            id="supplier-filter"
            value={selectedSupplier}
            onChange={(e) => setSelectedSupplier(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Všichni</option>
            {suppliers.map((supplier) => (
              <option key={supplier.id} value={supplier.id}>
                {supplier.name}
              </option>
            ))}
          </select>
        </div>

        {/* Shop Filter */}
        <div className="flex items-center gap-2">
          <label
            htmlFor="shop-filter"
            className="text-sm font-medium text-gray-700"
          >
            Obchod:
          </label>
          <select
            id="shop-filter"
            value={selectedShop}
            onChange={(e) => setSelectedShop(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Všechny</option>
            {shops.map((shop) => (
              <option key={shop.id} value={shop.id_inter}>
                {shop.name} {shop.id_inter && `(${shop.id_inter})`}
              </option>
            ))}
          </select>
        </div>

        {/* Clear All Filters */}
        {(selectedCategory || selectedSupplier || selectedShop) && (
          <button
            onClick={() => {
              setSelectedCategory("");
              setSelectedSupplier("");
              setSelectedShop("");
            }}
            className="px-3 py-2 text-sm text-gray-600 hover:text-gray-800 underline"
          >
            Zrušit všechny filtry
          </button>
        )}
      </div>

      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort("id")}
              >
                <div className="flex items-center">
                  ID
                  {sortField === "id" && (
                    <span className="ml-1">
                      {sortDirection === "asc" ? "↑" : "↓"}
                    </span>
                  )}
                </div>
              </th>
              <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                &nbsp;
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort("jmeno")}
              >
                <div className="flex items-center">
                  jmeno
                  {sortField === "jmeno" && (
                    <span className="ml-1">
                      {sortDirection === "asc" ? "↑" : "↓"}
                    </span>
                  )}
                </div>
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort("cena")}
              >
                <div className="flex items-center">
                  cena
                  {sortField === "cena" && (
                    <span className="ml-1">
                      {sortDirection === "asc" ? "↑" : "↓"}
                    </span>
                  )}
                </div>
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort("kategorie")}
              >
                <div className="flex items-center">
                  kategorie
                  {sortField === "kategorie" && (
                    <span className="ml-1">
                      {sortDirection === "asc" ? "↑" : "↓"}
                    </span>
                  )}
                </div>
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort("dodavatel")}
              >
                <div className="flex items-center">
                  dodavatel
                  {sortField === "dodavatel" && (
                    <span className="ml-1">
                      {sortDirection === "asc" ? "↑" : "↓"}
                    </span>
                  )}
                </div>
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                akce
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedProducts.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {product.id}
                </td>
                <td className="py-2 whitespace-nowrap text-sm text-gray-900 flex justify-center items-center w-16">
                  <img
                    src={product.img_url}
                    alt={product.name}
                    className="w-auto h-12"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {product.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {product.price} Kč
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {product.categories?.name || "N/A"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {product.suppliers?.name || "N/A"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  {product.is_visible ? (
                    <span className="bg-green-200 p-1 mr-4 rounded-full">
                      &nbsp;
                    </span>
                  ) : (
                    <span className="bg-red-200 p-1 mr-4 rounded-full">
                      &nbsp;
                    </span>
                  )}

                  <button
                    onClick={() => handleEdit(product)}
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
        {sortedProducts.length === 0 && (
          <div className="text-center py-4 text-gray-500">
            {products.length === 0
              ? "No products found"
              : selectedCategory || selectedSupplier || selectedShop
              ? "No products found matching selected filters"
              : "No products match current filters"}
          </div>
        )}
      </div>

      {editingProduct && (
        <EditProductModal
          product={editingProduct}
          onClose={() => setEditingProduct(null)}
          onUpdate={handleUpdate}
        />
      )}

      {isAddModalOpen && (
        <AddProductModal
          onClose={() => setIsAddModalOpen(false)}
          onAdd={handleAdd}
        />
      )}
    </div>
  );
}
