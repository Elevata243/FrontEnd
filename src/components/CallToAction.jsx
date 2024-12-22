import { useEffect, useState } from 'react';

function CallToAction() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (count < 686) {
          const timer = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
          }, 8); // Incrémente toutes les 100ms
    
          return () => clearInterval(timer); // Nettoie l'intervalle
        }
      }, [count]);

    return (
      <section className="px-4 py-2 md:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Colonne de gauche avec les images */}
          <div className="flex flex-col gap-4">
            <img 
              src="https://via.placeholder.com/200x150" 
              alt="Left Image 1" 
              className="w-48 h-36 object-cover rounded-lg shadow-md"
            />
            <img 
              src="https://via.placeholder.com/200x150" 
              alt="Left Image 2" 
              className="w-48 h-36 object-cover rounded-lg shadow-md "
            />
          </div>
  
          {/* Colonne du milieu avec texte et compteur */}
          <div className="text-center max-w-md justify-end items-center">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Be the Part of Fundraisers With Over
            </h2>
            <p className="text-6xl md:text-9xl font-bold text-black">
            {count}+
            </p>
            <p className="mt-2">
              Join a growing community of impactful contributors changing lives daily.
            </p>
          </div>

          {/* Colonne de droite avec les images */}
          <div className="flex flex-col gap-4">
            <img 
              src="https://via.placeholder.com/200x150" 
              alt="Right Image 1" 
              className="w-48 h-36 object-cover rounded-lg shadow-md"
            />
            <img 
              src="https://via.placeholder.com/200x150" 
              alt="Right Image 2" 
              className="w-48 h-36 object-cover rounded-lg shadow-md "
            />
          </div>
        </div>
      </section>
    );
  };


export default CallToAction