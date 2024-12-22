// HeroSection.jsx
import heroSection from "../assets/hero-section.jpg";
const HeroSection = () => {
    return (
      <section className="px-4 py-2 relative w-full h-[500px] md:h-[600px] overflow-hidden">
        {/* Image d'arrière-plan */}
        <img
          src={heroSection}
          alt="Hero Background"
          className="w-full h-full object-cover border rounded"
        />
  
        {/* Conteneur des textes */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center space-y-6">
          <h1 className="text-white text-3xl md:text-5xl font-bold drop-shadow-md">
            Bienvenue sur Notre Site
          </h1>
          <p className="text-white text-lg md:text-2xl drop-shadow-md">
            Explorez nos services et découvrez notre expertise.
          </p>
          <button className="py-2 px-6 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300">
            En Savoir Plus
          </button>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  