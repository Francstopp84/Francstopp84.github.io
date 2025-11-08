export default function Home() {
  return (
    <div className="min-h-screen bg-brand-dark text-brand-light">
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">

    
            {/* Logo con bilancia della giustizia */}
            <div className="mb-8">
              <svg width="120" height="120" viewBox="0 0 120 120" className="mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Corona di alloro sinistra */}
                <path d="M20 60 Q15 50, 18 40 Q20 35, 23 33 Q25 40, 22 48 Q20 55, 20 60" stroke="#C5A572" strokeWidth="1.5" fill="#C5A572" opacity="0.8"/>
                <circle cx="17" cy="38" r="2" fill="#C5A572"/>
                <circle cx="21" cy="44" r="1.5" fill="#C5A572"/>
                <circle cx="19" cy="52" r="1.5" fill="#C5A572"/>
                
                {/* Corona di alloro destra */}
                <path d="M100 60 Q105 50, 102 40 Q100 35, 97 33 Q95 40, 98 48 Q100 55, 100 60" stroke="#C5A572" strokeWidth="1.5" fill="#C5A572" opacity="0.8"/>
                <circle cx="103" cy="38" r="2" fill="#C5A572"/>
                <circle cx="99" cy="44" r="1.5" fill="#C5A572"/>
                <circle cx="101" cy="52" r="1.5" fill="#C5A572"/>
                
                {/* Asta centrale della bilancia */}
                <line x1="60" y1="30" x2="60" y2="70" stroke="#8B7355" strokeWidth="2.5"/>
                <circle cx="60" cy="28" r="3" fill="#C5A572"/>
                
                {/* Braccio orizzontale */}
                <line x1="30" y1="45" x2="90" y2="45" stroke="#8B7355" strokeWidth="2"/>
                
                {/* Piatto sinistro */}
                <line x1="35" y1="45" x2="33" y2="52" stroke="#8B7355" strokeWidth="1"/>
                <line x1="25" y1="45" x2="27" y2="52" stroke="#8B7355" strokeWidth="1"/>
                <ellipse cx="30" cy="52" rx="8" ry="2" fill="#C5A572" opacity="0.8"/>
                <path d="M22 52 Q30 54, 38 52" stroke="#8B7355" strokeWidth="1.5" fill="none"/>
                
                {/* Piatto destro */}
                <line x1="85" y1="45" x2="87" y2="52" stroke="#8B7355" strokeWidth="1"/>
                <line x1="95" y1="45" x2="93" y2="52" stroke="#8B7355" strokeWidth="1"/>
                <ellipse cx="90" cy="52" rx="8" ry="2" fill="#C5A572" opacity="0.8"/>
                <path d="M82 52 Q90 54, 98 52" stroke="#8B7355" strokeWidth="1.5" fill="none"/>
                
                {/* Base */}
                <rect x="52" y="70" width="16" height="8" fill="#8B7355" rx="1"/>
                <rect x="48" y="78" width="24" height="4" fill="#8B7355" rx="1"/>
              </svg>
            </div><h1 className="text-5xl font-bold text-brand-gold mb-6">
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
