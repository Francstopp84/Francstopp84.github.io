export default function About() {
  return (
    <div className="min-h-screen bg-black text-white font-['Montserrat']">
      <div className="max-w-4xl mx-auto py-20 px-6 text-center">
        {/* Foto profilo */}
        <div className="flex justify-center mb-8">
          <div className="w-40 h-40 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-6xl">
            ⚡
          </div>
        </div>
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">Avv. Francesco Iaccarino</h1>
        <p className="text-xl text-yellow-400 mb-6">Cassazionista – Senior Legal Designer – Napoli</p>
        <p className="text-gray-300 mb-8 leading-relaxed">
          Esperto riconosciuto in diritto penale, civile, amministrativo e procedura. Con più di vent'anni di esperienza, guido uno studio legale indipendente garantendo tutela assoluta, aggiornamento costante e strategie difensive personalizzate secondo la riforma Cartabia e i principi costituzionali.
        </p>
        <h2 className="text-2xl font-bold mt-12 mb-6 text-yellow-400 border-b-2 border-yellow-400 pb-3">Skills e Valori Professionali</h2>
        <ul className="text-base text-gray-200 text-left max-w-2xl mx-auto list-disc pl-6 space-y-2 mb-8">
          <li>Redazione atti, memorie, impugnazioni e ricorsi in Cassazione</li>
          <li>Consulenza strategica multidisciplinare su materie penali e civili</li>
          <li>Assoluto rispetto del Codice Deontologico Forense</li>
          <li>Innovazione digitale e problem-solving procedurale</li>
          <li>Oratore e formatore in diritto processuale avanti magistrati e colleghe</li>
          <li>Aggiornamento costante su giurisprudenza della Cassazione</li>
        </ul>
        <h2 className="text-lg font-bold mt-12 mb-4 text-yellow-400">Visione e Missione</h2>
        <p className="text-gray-300 italic">
          “Difendere i diritti significa proteggere il futuro: ogni cliente al centro di una strategia legale personalizzata, costruita con rigore tecnico e dedizione assoluta.”
        </p>
        <div className="mt-12 pt-8 border-t border-yellow-400/20">
          <p className="text-sm text-gray-400">
            Disponibile per consulenze urgenti, collaborazioni interdisciplinari e formazione giuridica specializzata.
          </p>
        </div>
      </div>
    </div>
  );
}
