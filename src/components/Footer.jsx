function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-200 px-4 py-2 border rounded-lg ">
          <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Colonne 1 : À Propos */}
            <div>
              <h3 className="text-lg font-semibold mb-4">À Propos</h3>
              <p className="text-sm">Nous nous engageons à offrir des solutions innovantes pour répondre à vos besoins numériques.</p>
            </div>
            
            {/* Colonne 2 : Liens rapides */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-green-400">Accueil</a></li>
                <li><a href="#" className="hover:text-green-400">Services</a></li>
                <li><a href="#" className="hover:text-green-400">À Propos</a></li>
                <li><a href="#" className="hover:text-green-400">Contact</a></li>
              </ul>
            </div>
            
            {/* Colonne 3 : Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>Email: support@exemple.com</li>
                <li>Téléphone: +243 900 000 000</li>
                <li>Adresse: 123 Rue Exemple, Kinshasa</li>
              </ul>
            </div>
            
            {/* Colonne 4 : Réseaux sociaux */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-green-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.26 4.26 0 0 0 1.88-2.34 8.48 8.48 0 0 1-2.69 1.03 4.24 4.24 0 0 0-7.22 3.86A12.06 12.06 0 0 1 3.12 4.9a4.24 4.24 0 0 0 1.31 5.66 4.21 4.21 0 0 1-1.92-.53v.05a4.24 4.24 0 0 0 3.4 4.15 4.26 4.26 0 0 1-1.91.07 4.24 4.24 0 0 0 3.96 2.95 8.5 8.5 0 0 1-5.27 1.82A8.6 8.6 0 0 1 2 18.84a12 12 0 0 0 6.5 1.91c7.8 0 12.06-6.46 12.06-12.06 0-.18-.01-.37-.02-.55a8.6 8.6 0 0 0 2.12-2.2z"/></svg>
                </a>
                <a href="#" className="hover:text-green-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.42 3.59 8.08 8.21 9.78v-6.91H7.89v-2.87h2.36V9.57c0-2.34 1.39-3.63 3.52-3.63 1.02 0 2.09.18 2.09.18v2.3h-1.18c-1.17 0-1.53.73-1.53 1.48v1.77h2.6l-.42 2.87h-2.18V22c4.62-1.7 8.21-5.36 8.21-9.78 0-5.5-4.46-9.96-9.96-9.96z"/></svg>
                </a>
                <a href="#" className="hover:text-green-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.75 2h-15.5A2.25 2.25 0 0 0 2 4.25v15.5A2.25 2.25 0 0 0 4.25 22h15.5A2.25 2.25 0 0 0 22 19.75V4.25A2.25 2.25 0 0 0 19.75 2zM8 17.25H5.5V9.5H8v7.75zm-1.25-8.5A1.25 1.25 0 1 1 8 7.5a1.25 1.25 0 0 1-1.25 1.25zm11.75 8.5h-2.5v-3.75c0-.92-.74-1.67-1.67-1.67s-1.67.75-1.67 1.67v3.75H10V9.5h2.5v1.06a2.92 2.92 0 0 1 2.5-1.06c1.93 0 3.5 1.57 3.5 3.5v4.25z"/></svg>
                </a>
              </div>
            </div>
          </div>
    
          {/* Section Copyright */}
          <div className="mt-8 text-center text-sm border-t border-gray-700 pt-4">
            © 2024 MonSite. Tous droits réservés.
          </div>
        </footer>
      );
    };

export default Footer