export default function Home() {
  return (
    <div className="min-h-screen bg-brand-dark text-brand-light">
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold text-brand-gold mb-6">
          Studio Legale
        </h1>
        <h2 className="text-3xl mb-4">Avv. Francesco Iaccarino</h2>
        <p className="text-xl text-brand-gold mb-8">Napoli</p>
        <p className="mb-6">Via Toledo 205 - Tel. 3335658459</p>
        <p className="mb-8">studiolegalefrancescoiaccarino@outlook.com</p>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="p-6 border border-brand-gold/20">
            <h3 className="text-xl font-bold text-brand-gold mb-4">Diritto Penale</h3>
            <p>Assistenza completa in ogni stato e grado</p>
          </div>
          <div className="p-6 border border-brand-gold/20">
            <h3 className="text-xl font-bold text-brand-gold mb-4">Diritto Civile</h3>
            <p>Tutela dei diritti e contenzioso civile</p>
          </div>
          <div className="p-6 border border-brand-gold/20">
            <h3 className="text-xl font-bold text-brand-gold mb-4">Immigrazione</h3>
            <p>Pratiche cittadinanza e diritti stranieri</p>
          </div>
        </div>
      </div>
    </div>
  );
}
