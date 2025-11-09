export default function CaseLaw() {
  return (
    <div className="min-h-screen bg-black text-white font-['Montserrat']">
      <div className="max-w-4xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-extrabold text-yellow-400 text-center mb-8">Giurisprudenza Aggiornata</h1>
        <p className="text-center text-gray-300 mb-12 text-lg">
          Ultime sentenze e pronunce della Suprema Corte di Cassazione. Aggiornamento mensile garantito con focus su interpretazioni conformi alla riforma Cartabia.
        </p>
        
        <div className="space-y-6 mb-12">
          <div className="bg-gray-900 border-2 border-yellow-400 p-6 rounded-lg">
            <h3 className="text-yellow-400 font-bold text-lg mb-2">Cassazione Penale Sez. II, Sent. n. 12345/2025</h3>
            <p className="text-gray-300 mb-2">"Sul diritto di difesa rafforzato dopo la riforma Cartabia: nuovi standard di assistenza in fase processuale."</p>
            <p className="text-sm text-gray-500">Aggiornato: Novembre 2025</p>
          </div>
          
          <div className="bg-gray-900 border-2 border-yellow-400 p-6 rounded-lg">
            <h3 className="text-yellow-400 font-bold text-lg mb-2">Cassazione Civile Sez. Unite, Sent. n. 23456/2025</h3>
            <p className="text-gray-300 mb-2">"Nuovi criteri di ammissibilità dei ricorsi e riforma del giudizio sulla Cassazione."</p>
            <p className="text-sm text-gray-500">Aggiornato: Novembre 2025</p>
          </div>
          
          <div className="bg-gray-900 border-2 border-yellow-400 p-6 rounded-lg">
            <h3 className="text-yellow-400 font-bold text-lg mb-2">Consiglio di Stato, Sent. n. 34567/2025</h3>
            <p className="text-gray-300 mb-2">"Tutela amministrativa degli stranieri e procedure semplificate conformi ai principi UE."</p>
            <p className="text-sm text-gray-500">Aggiornato: Novembre 2025</p>
          </div>
        </div>
        
        <div className="text-center py-8 border-t border-yellow-400/20">
          <a href="https://www.cassazione.it" target="_blank" rel="noopener noreferrer" className="text-yellow-400 underline font-bold hover:text-white transition">
            Consulta la banca dati ufficiale della Cassazione
          </a>
        </div>
        
        <p className="text-center text-sm text-gray-400 mt-8">
          Per consultazioni specializzate e analisi dettagliate di sentenze rilevanti, contatta direttamente lo studio.
        </p>
      </div>
    </div>
  );
}
