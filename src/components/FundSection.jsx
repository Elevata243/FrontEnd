
function FundSection() {
    return (
        <section className="px-4 py-2 ">
          {/* Titre de la section */}
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Fund, Fast As Flash</h2>
            <p className="text-lg text-gray-600 mt-4">
              Découvrez des opportunités uniques pour investir, innover et vous connecter globalement.
            </p>
          </div>
    
          {/* Cartes */}
          <div className="container mx-auto px-4 md:px-0 flex flex-col md:flex-row justify-between gap-8">
            {/* Carte 1 */}
            <div className="flex-1 border bg-white p-6 rounded-lg hover:shadow-xl transition duration-300">
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v12m0 0l-3-3m3 3l3-3" />
                </svg>
                <h3 className="text-2xl font-semibold text-gray-800">Ignite Impact</h3>
              </div>
              <p className="text-gray-600">
                Laissez-nous vous aider à allumer le feu de l&apos;impact social et environnemental.
              </p>
            </div>
    
            {/* Carte 2 */}
            <div className="flex-1 border bg-white p-6 rounded-lg hover:shadow-xl transition duration-300">
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 4v4h4M4 4h4v16H4zm12 0h4v16h-4z" />
                </svg>
                <h3 className="text-2xl font-semibold text-gray-800">Spread The Word</h3>
              </div>
              <p className="text-gray-600">
                Partagez notre message pour propager des idées révolutionnaires à travers le monde.
              </p>
            </div>
    
            {/* Carte 3 */}
            <div className="flex-1 border bg-white p-6 rounded-lg hover:shadow-xl transition duration-300">
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 10l4 4m0 0l-4 4m4-4H6" />
                </svg>
                <h3 className="text-2xl font-semibold text-gray-800">Connect Globally</h3>
              </div>
              <p className="text-gray-600">
                Créez des connexions à l’échelle mondiale pour une collaboration optimale.
              </p>
            </div>
          </div>  
        </section>
      );
    };

export default FundSection