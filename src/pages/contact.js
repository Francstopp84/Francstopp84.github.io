export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white font-['Montserrat']">
      <div className="max-w-4xl mx-auto py-20 px-6 text-center">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-8">Contatti & Appuntamenti</h1>
        <p className="text-gray-300 mb-12 text-lg">
          Prenota una consulenza specialistica o comunica direttamente per urgenze processuali. Risposta garantita in giornata con massima riservatezza e professionalità.
        </p>
        
        {/* Form di contatto */}
        <div className="max-w-lg mx-auto mb-12 bg-gray-900 border-2 border-yellow-400 p-8 rounded-lg">
          <form className="text-left space-y-6">
            <div>
              <label className="block text-yellow-400 font-bold mb-2">Nome Completo</label>
              <input className="w-full p-3 bg-gray-800 text-white border border-yellow-400/30 rounded focus:border-yellow-400 focus:outline-none" type="text" placeholder="Inserisci nome e cognome" required />
            </div>
            
            <div>
              <label className="block text-yellow-400 font-bold mb-2">Email</label>
              <input className="w-full p-3 bg-gray-800 text-white border border-yellow-400/30 rounded focus:border-yellow-400 focus:outline-none" type="email" placeholder="Inserisci email" required />
            </div>
            
            <div>
              <label className="block text-yellow-400 font-bold mb-2">Telefono</label>
              <input className="w-full p-3 bg-gray-800 text-white border border-yellow-400/30 rounded focus:border-yellow-400 focus:outline-none" type="tel" placeholder="Inserisci numero di telefono" />
            </div>
            
            <div>
              <label className="block text-yellow-400 font-bold mb-2">Messaggio</label>
              <textarea className="w-full p-3 bg-gray-800 text-white border border-yellow-400/30 rounded focus:border-yellow-400 focus:outline-none" rows="6" placeholder="Descrivi il tuo caso legale..." required></textarea>
            </div>
            
            <button type="submit" className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-white transition-all shadow-lg hover:shadow-yellow-400/50">
              Invia Richiesta di Consulenza
            </button>
          </form>
        </div>
        
        {/* Contatti diretti */}
        <div className="text-center py-8 border-t border-yellow-400/20">
          <h2 className="text-2xl font-bold text-yellow-400 mb-6">Contatti Diretti</h2>
          <p className="text-lg text-gray-300 mb-2">
            <span className="font-bold">Telefono:</span> 3335658459
          </p>
          <p className="text-lg text-gray-300 mb-2">
            <span className="font-bold">Email:</span> studiolegalefrancescoiaccarino@outlook.com
          </p>
          <p className="text-lg text-gray-300 mb-6">
            <span className="font-bold">Indirizzo:</span> Via Toledo 205, Napoli
          </p>
          
          {/* Button social/messaging */}
          <div className="flex justify-center gap-4 mt-6">
            <a href="https://wa.me/3335658459" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-6 py-2 rounded font-bold hover:bg-green-700 transition">
              WhatsApp
            </a>
            <a href="tel:+3335658459" className="bg-blue-600 text-white px-6 py-2 rounded font-bold hover:bg-blue-700 transition">
              Chiama ora
            </a>
          </div>
        </div>
        
        <p className="text-sm text-gray-400 mt-8">
          Massima riservatezza garantita. Tutti i dati personali sono protetti secondo le norme GDPR.
        </p>
      </div>
    </div>
  );
}
