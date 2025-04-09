"use client";
import { useState } from "react";

export default function SurveyForm() {
  const [formData, setFormData] = useState({
    age: "",
    distance: "",
    frequency: "",
    pref_farmarske_produkty: false,
    pref_cerstve_pecivo: false,
    pref_mlecne_vyrobky: false,
    pref_uzeniny_pastiky: false,
    pref_trvanlive_potraviny: false,
    pref_napoje: false,
    pref_alkohol: false,
    pref_tabakove_vyrobky: false,
    preference_focus: "",
    reason_open_247: false,
    reason_location: false,
    reason_local_products: false,
    reason_no_queues: false,
    reason_anonymous: false,
    reason_other: false,
    reason_other_text: "",
    improvement_text: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      age: "",
      distance: "",
      frequency: "",
      pref_farmarske_produkty: false,
      pref_cerstve_pecivo: false,
      pref_mlecne_vyrobky: false,
      pref_uzeniny_pastiky: false,
      pref_trvanlive_potraviny: false,
      pref_napoje: false,
      pref_alkohol: false,
      pref_tabakove_vyrobky: false,
      preference_focus: "",
      reason_open_247: false,
      reason_location: false,
      reason_local_products: false,
      reason_no_queues: false,
      reason_anonymous: false,
      reason_other: false,
      reason_other_text: "",
      improvement_text: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch("/api/survey", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Nepodařilo se odeslat dotazník");
      }

      if (data.success) {
        setSuccess(true);
        // Optionally reset form after success:
        // resetForm();
      } else {
        throw new Error("Neočekávaná odpověď ze serveru");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setError(err.message || "Nepodařilo se odeslat dotazník");
    } finally {
      setLoading(false);
    }
  };

  // Options definitions
  const ageOptions = ["pod 18", "18-25", "26-35", "36-45", "46-55", "nad 56"];
  const distanceOptions = ["pod 5km", "5-20km", "nad 20km"];
  const frequencyOptions = ["denně", "týdně", "měsíčně", "byl jsem poprvé"];
  const preferenceFocusOptions = ["cena", "kvalita", "poměr cena/kvalita"];

  // New product preferences definition
  const productPreferences = [
    { id: "pref_farmarske_produkty", label: "Farmářské produkty" },
    { id: "pref_cerstve_pecivo", label: "Čerstvé pečivo" },
    { id: "pref_mlecne_vyrobky", label: "Mléčné výrobky" },
    { id: "pref_uzeniny_pastiky", label: "Uzeniny a paštiky" },
    { id: "pref_trvanlive_potraviny", label: "Trvanlivé potraviny" },
    { id: "pref_napoje", label: "Nápoje" },
    { id: "pref_alkohol", label: "Alkohol" },
    { id: "pref_tabakove_vyrobky", label: "Tabákové výrobky" },
  ];

  return (
    <div className="bg-white shadow-sm rounded-lg mt-4 md:mt-24 max-w-2xl mx-auto">
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
            Děkujeme za vyplnění dotazníku!
          </p>
          <button
            onClick={() => {
              setSuccess(false);
              resetForm();
            }}
            className="mt-4 px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-md"
          >
            Vyplnit znovu
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Age */}
          <fieldset>
            <legend className="text-sm font-medium text-gray-700 mb-1">
              Kolik Vám je let?
            </legend>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {ageOptions.map((option) => (
                <div key={option} className="flex items-center">
                  <input
                    id={`age-${option}`}
                    name="age"
                    type="radio"
                    value={option}
                    checked={formData.age === option}
                    onChange={handleRadioChange}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                  />
                  <label
                    htmlFor={`age-${option}`}
                    className="ml-2 block text-sm text-gray-900"
                  >
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>

          {/* Distance */}
          <fieldset>
            <legend className="text-sm font-medium text-gray-700 mb-1">
              Jak daleko bydlíte?
            </legend>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {distanceOptions.map((option) => (
                <div key={option} className="flex items-center">
                  <input
                    id={`distance-${option}`}
                    name="distance"
                    type="radio"
                    value={option}
                    checked={formData.distance === option}
                    onChange={handleRadioChange}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                  />
                  <label
                    htmlFor={`distance-${option}`}
                    className="ml-2 block text-sm text-gray-900"
                  >
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>

          {/* Frequency */}
          <fieldset>
            <legend className="text-sm font-medium text-gray-700 mb-1">
              Jak často zde nakupujete?
            </legend>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {frequencyOptions.map((option) => (
                <div key={option} className="flex items-center">
                  <input
                    id={`frequency-${option}`}
                    name="frequency"
                    type="radio"
                    value={option}
                    checked={formData.frequency === option}
                    onChange={handleRadioChange}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                  />
                  <label
                    htmlFor={`frequency-${option}`}
                    className="ml-2 block text-sm text-gray-900"
                  >
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>

          {/* Product Preference */}
          <fieldset>
            <legend className="text-sm font-medium text-gray-700 mb-1">
              Jaké produkty preferujete? (můžete vybrat více)
            </legend>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 md:grid-cols-3">
              {productPreferences.map((pref) => (
                <div key={pref.id} className="flex items-center">
                  <input
                    id={pref.id}
                    name={pref.id}
                    type="checkbox"
                    checked={formData[pref.id]}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor={pref.id}
                    className="ml-2 block text-sm text-gray-900"
                  >
                    {pref.label}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>

          {/* Preference Focus */}
          <fieldset>
            <legend className="text-sm font-medium text-gray-700 mb-1">
              Co preferujete?
            </legend>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {preferenceFocusOptions.map((option) => (
                <div key={option} className="flex items-center">
                  <input
                    id={`preference_focus-${option}`}
                    name="preference_focus"
                    type="radio"
                    value={option}
                    checked={formData.preference_focus === option}
                    onChange={handleRadioChange}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                  />
                  <label
                    htmlFor={`preference_focus-${option}`}
                    className="ml-2 block text-sm text-gray-900"
                  >
                    {option === "poměr cena/kvalita"
                      ? "Poměr cena/kvalita"
                      : option.charAt(0).toUpperCase() + option.slice(1)}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>

          {/* Reason */}
          <fieldset>
            <legend className="text-sm font-medium text-gray-700 mb-1">
              Proč volíte JarvisShop? (můžete vybrat více)
            </legend>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 md:grid-cols-3">
              <div className="flex items-center">
                <input
                  id="reason_open_247"
                  name="reason_open_247"
                  type="checkbox"
                  checked={formData.reason_open_247}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="reason_open_247"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Otevřeno 24/7
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="reason_location"
                  name="reason_location"
                  type="checkbox"
                  checked={formData.reason_location}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="reason_location"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Na dobré cestě
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="reason_local_products"
                  name="reason_local_products"
                  type="checkbox"
                  checked={formData.reason_local_products}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="reason_local_products"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Lokální produkty
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="reason_no_queues"
                  name="reason_no_queues"
                  type="checkbox"
                  checked={formData.reason_no_queues}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="reason_no_queues"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Nákup bez front
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="reason_anonymous"
                  name="reason_anonymous"
                  type="checkbox"
                  checked={formData.reason_anonymous}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="reason_anonymous"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Anonymita
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="reason_other"
                  name="reason_other"
                  type="checkbox"
                  checked={formData.reason_other}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="reason_other"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Jiné
                </label>
              </div>
              {formData.reason_other && (
                <div className="col-span-2 md:col-span-3">
                  <label
                    htmlFor="reason_other_text"
                    className="block text-sm font-medium text-gray-700 sr-only"
                  >
                    Jiný důvod
                  </label>
                  <input
                    id="reason_other_text"
                    name="reason_other_text"
                    type="text"
                    value={formData.reason_other_text}
                    onChange={handleTextChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Uveďte jiný důvod"
                  />
                </div>
              )}
            </div>
          </fieldset>

          {/* Improvement */}
          <div>
            <label
              htmlFor="improvement_text"
              className="block text-sm font-medium text-gray-700"
            >
              Co byste chtěli zlepšit?
            </label>
            <textarea
              id="improvement_text"
              name="improvement_text"
              value={formData.improvement_text}
              onChange={handleTextChange}
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border-2"
              placeholder="Vaše návrhy na zlepšení..."
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
              className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md disabled:opacity-50"
            >
              {loading ? "Odesílám..." : "Odeslat dotazník"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
