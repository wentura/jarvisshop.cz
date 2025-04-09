import React from "react";
import SurveyForm from "./components/SurveyForm"; // Adjust path if needed

export default function Feedback() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        {" "}
        {/* Increased max-width for longer form */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 text-jarvisPrimary">
            Dotazník spokojenosti
          </h1>
          <p className="text-gray-600 mx-auto max-w-2xl text-left">
            Vážený zákazníku, děkujeme, že jste si vybral/a naši prodejnu
            Jarvis.
            <br />
            Rádi bychom věděli více o Vás a Vašich zkušenostech, abychom mohli
            naše služby dále zlepšovat. Vyplnění dotazníku Vám zabere jen 1
            minuta a je <strong>anonymní</strong>. Děkujeme!
          </p>
        </div>
        <SurveyForm />
      </div>
    </div>
  );
}
