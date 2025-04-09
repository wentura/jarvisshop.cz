"use client";
import { useState } from "react";

export default function Feedback() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    text: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Nepodařilo se odeslat zpětnou vazbu");
      }

      if (data.success) {
        setSuccess(true);
        setFormData({ name: "", email: "", text: "" });
      } else {
        throw new Error("Neočekávaná odpověď ze serveru");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setError(err.message || "Nepodařilo se odeslat zpětnou vazbu");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="mb-1 text-4xl nadpisText-800 uppercase tracking-tight md:text-7xl text-jarvisSecondary">
            Zpětná vazba
          </h1>
          <p className="text-gray-600">
            Vaše názory jsou pro nás důležité. Napište nám, co si myslíte.
          </p>
        </div>

        {success ? (
          <div className="text-center py-8 bg-green-50 rounded-lg">
            <svg
              className="mx-auto h-12 w-12 text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <p className="mt-2 text-lg text-green-600">
              Děkujeme za Vaši zpětnou vazbu!
            </p>
            <button
              onClick={() => {
                setSuccess(false);
                setFormData({ name: "", email: "", text: "" });
              }}
              className="mt-4 px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-md"
            >
              Odeslat další zpětnou vazbu
            </button>
          </div>
        ) : (
          <div className="bg-white shadow-sm rounded-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 text-jarvisSecondary uppercase">
                  Jméno - nepovinné
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-4 border-2 border-jarvisSecondary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 text-jarvisSecondary uppercase">
                  Email - nepovinné
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-4 border-2 border-jarvisSecondary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 text-jarvisSecondary uppercase">
                  Text zpětné vazby
                </label>
                <textarea
                  name="text"
                  value={formData.text}
                  onChange={handleChange}
                  rows={5}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-4 border-2 border-jarvisSecondary"
                  required
                />
              </div>

              {error && (
                <div className="text-sm text-red-600 p-3 bg-red-50 rounded">
                  {error}
                </div>
              )}

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  //   className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md disabled:opacity-50"
                  className="mt-4 px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-md"
                >
                  {loading ? "Odesílám..." : "Odeslat zpětnou vazbu"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
