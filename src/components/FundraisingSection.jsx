
function FundraisingSection() {
 // Données fictives pour les cartes
 const fundraisingData = [
    {
      id: 1,
      image: 'https://www.nature-isere.fr/sites/default/files/styles/natureisere_large/public/images/temoignages/principale/iceland-2111810_1920.jpg?itok=PMXb-dCB',
      creator: 'Alice Johnson',
      title: 'Medical Aid for Refugees',
      collected: 500,
      target: 5000,
      daysLeft: 12,
    },
    {
      id: 2,
      image: 'https://www.nature-isere.fr/sites/default/files/styles/natureisere_large/public/images/temoignages/principale/iceland-2111810_1920.jpg?itok=PMXb-dCB',
      creator: 'Bob Smith',
      title: 'Education for Children',
      collected: 2000,
      target: 4000,
      daysLeft: 20,
    },
    {
      id: 3,
      image: 'https://www.nature-isere.fr/sites/default/files/styles/natureisere_large/public/images/temoignages/principale/iceland-2111810_1920.jpg?itok=PMXb-dCB',
      creator: 'Carol White',
      title: 'Disaster Relief Fund',
      collected: 3500,
      target: 5000,
      daysLeft: 5,
    },
    {
      id: 4,
      image: 'https://www.nature-isere.fr/sites/default/files/styles/natureisere_large/public/images/temoignages/principale/iceland-2111810_1920.jpg?itok=PMXb-dCB',
      creator: 'David Lee',
      title: 'Clean Water Project',
      collected: 1200,
      target: 5000,
      daysLeft: 15,
    },
    {
      id: 5,
      image: 'https://www.nature-isere.fr/sites/default/files/styles/natureisere_large/public/images/temoignages/principale/iceland-2111810_1920.jpg?itok=PMXb-dCB',
      creator: 'Eve Adams',
      title: 'Animal Shelter Support',
      collected: 4500,
      target: 5000,
      daysLeft: 8,
    },
  ];

  // Détermine la couleur de la barre de progression
  const getProgressBarColor = (collected, target) => {
    const percentage = (collected / target) * 100;
    if (percentage < 25) return 'bg-red-500';
    if (percentage < 50) return 'bg-blue-500';
    return 'bg-green-500';
  };

  return (
    <section className="px-4 py-2">
      {/* Titre et sous-titre */}
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-5xl font-bold ">Urgent Fundraising !</h2>
        <p className="text-lg text-gray-600 mt-4">
          Chaque contribution compte ! Participez à ces campagnes cruciales dès aujourd&apos;hui.
        </p>
      </div>

      {/* Cartes Scrollables */}
      <div className="overflow-x-auto scrollbar-custom  py-4">
        <div className="flex space-x-6 md:space-x-8">
          {fundraisingData.map((fund) => (
            <div
              key={fund.id}
              className="min-w-[200px] md:min-w-[300px] rounded-lg  overflow-hidden"
            >
              {/* Image */}
              <img
                src={fund.image}
                alt={fund.title}
                className="w-full h-48 object-cover border rounded"
              />

              {/* Contenu */}
              <div className="pt-2">
                <p className="text-xs text-gray-500">{fund.creator}</p>
                <h3 className="text-base font-semibold text-black mb-3">{fund.title}</h3>

                {/* Barre de progression */}
                <div className="w-full  rounded-full h-3 mb-3">
                  <div
                    className={`h-2 rounded-full ${getProgressBarColor(fund.collected, fund.target)}`}
                    style={{ width: `${(fund.collected / fund.target) * 100}%` }}
                  ></div>
                </div>

                {/* Montant collecté et nombre de jours restants */}
                <div className="flex justify-between items-center text-sm">
                  <span>
                  <strong> ${fund.collected.toLocaleString()}</strong> / ${fund.target.toLocaleString()}
                  </span>
                  <span>{fund.daysLeft} jours restants</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default FundraisingSection