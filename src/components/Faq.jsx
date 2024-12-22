import { useState } from "react";

function Faq() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    const faqs = [
      {
        question: "Comment puis-je créer un compte ?",
        answer: "Vous pouvez créer un compte en cliquant sur le bouton 'Inscription' en haut à droite de la page."
      },
      {
        question: "Quels sont les moyens de paiement acceptés ?",
        answer: "Nous acceptons les cartes bancaires, PayPal et les virements bancaires."
      },
      {
        question: "Puis-je annuler une contribution après paiement ?",
        answer: "Non, les contributions ne peuvent pas être annulées une fois le paiement effectué."
      },
      {
        question: "Comment contacter le support client ?",
        answer: "Vous pouvez nous contacter via le formulaire de contact ou par e-mail à support@exemple.com."
      },
      {
        question: "Les contributions sont-elles sécurisées ?",
        answer: "Oui, nous utilisons un cryptage SSL pour garantir la sécurité des transactions."
      }
    ];
  
    return (
      <section className="bg-white py-12 px-4 md:px-16">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left py-4 flex justify-between items-center focus:outline-none"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <span>
                  {openIndex === index ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 12a1 1 0 01-.7-.3l-4-4a1 1 0 111.4-1.4L10 9.6l3.3-3.3a1 1 0 111.4 1.4l-4 4a1 1 0 01-.7.3z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 8a1 1 0 01.7.3l4 4a1 1 0 01-1.4 1.4L10 9.4l-3.3 3.3a1 1 0 01-1.4-1.4l4-4A1 1 0 0110 8z" clipRule="evenodd" />
                    </svg>
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div className="pb-4 text-black">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    );
  };


export default Faq