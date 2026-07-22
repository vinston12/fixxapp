import { useState } from 'react';
import { mockSpecialists, type SpecialistCard } from './data';

// --- KOMPONENTY WSPÓŁDZIELONE ---

const Button = ({ children, variant = 'primary', className = '', type = 'button', ...props }: any) => {
  const baseStyle = "px-5 py-2.5 rounded-md font-bold transition-all duration-200 text-center flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark shadow-sm hover:shadow-md",
    accent: "bg-accent text-text hover:bg-accent-hover shadow-sm hover:shadow-md"
  };
  return (
    <button type={type} className={`${baseStyle} ${variants[variant as keyof typeof variants]} ${className}`} {...props}>
      {children}
    </button>
  );
};

// --- SEKCJE ---

const Header = () => (
  <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur-sm border-b border-border h-[60px] md:h-[70px] flex items-center">
    <div className="max-w-[1280px] w-full mx-auto px-4 md:px-8 flex justify-between items-center">
      <div className="text-2xl font-black text-primary tracking-tight flex items-center gap-2">
        ⚡ FixApp
      </div>
      <nav className="hidden md:flex gap-6 items-center font-bold text-text text-sm">
        <a href="#o-nas" className="hover:text-primary transition-colors">O nas</a>
        <a href="#opinie" className="hover:text-primary transition-colors">Opinie</a>
      </nav>
      <button className="md:hidden text-primary p-2 text-xl">☰</button>
    </div>
  </header>
);

const HeroSection = () => (
  <section className="pt-10 pb-12 md:pt-16 md:pb-16 px-4 text-center max-w-[800px] mx-auto">
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-text leading-tight mb-4">
      Potrzebujesz fachowca? <br /> Wybierz kategorię
    </h1>
    <p className="text-base md:text-lg text-muted mb-8 font-medium">
      Znajdź sprawdzonych specjalistów w swojej okolicy w ułamek sekundy.
    </p>
    <div className="flex flex-col md:flex-row justify-center gap-3">
      <a href="#elektrycy" className="block w-full md:w-auto">
        <Button variant="primary" className="w-full text-lg py-3 px-6 rounded-xl">⚡ Elektryk</Button>
      </a>
      <a href="#naprawa-agd" className="block w-full md:w-auto">
        <Button variant="primary" className="w-full text-lg py-3 px-6 rounded-xl">🔧 Naprawa AGD</Button>
      </a>
    </div>
  </section>
);

const TrustStats = () => (
  <section className="bg-surface py-6 border-y border-border">
    <div className="max-w-[1000px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-border">
      <div className="py-2 flex flex-col items-center justify-center">
        <div className="flex items-center gap-1.5 text-xl font-black text-text mb-0.5">
          <span className="text-accent text-2xl">⭐</span> 4.8 / 5
        </div>
        <div className="text-muted font-bold text-xs uppercase tracking-wide">Średnia ocena</div>
      </div>
      <div className="py-2 flex flex-col items-center justify-center">
        <div className="flex items-center gap-1.5 text-xl font-black text-text mb-0.5">
          <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">✓</span> Ponad 1200+
        </div>
        <div className="text-primary font-bold text-xs uppercase tracking-wide">Zrealizowanych zleceń</div>
      </div>
      <div className="py-2 flex flex-col items-center justify-center">
        <div className="flex items-center gap-1.5 text-xl font-black text-text mb-0.5">
          <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">🛡️</span> 100%
        </div>
        <div className="text-muted font-bold text-xs uppercase tracking-wide">Zweryfikowani</div>
      </div>
    </div>
  </section>
);

const AboutSection = () => (
  <section id="o-nas" className="py-10 md:py-14 bg-bg scroll-mt-20">
    <div className="max-w-[800px] mx-auto px-4 md:px-8 text-center">
      <h2 className="text-2xl md:text-3xl font-black text-text mb-4">O FixApp</h2>
      <p className="text-sm md:text-base text-muted font-medium leading-relaxed">
        Jesteśmy lokalną platformą, która błyskawicznie łączy mieszkańców ze sprawdzonymi fachowcami. 
        Nasz cel to szybka, bezpieczna i bezstresowa pomoc w każdej domowej awarii. Od razu widzisz ceny, 
        opinie i terminy – bez ukrytych kosztów.
      </p>
    </div>
  </section>
);

const SpecialistCardComponent = ({ data }: { data: SpecialistCard }) => {
  const [showPhone, setShowPhone] = useState(false);

  return (
    <div className="bg-surface rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-border p-4 md:p-5 flex flex-col cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary">

      <div className="flex items-center gap-4 mb-4">
        <div className="relative flex-shrink-0">
          <img src={data.image} alt={data.name} className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-[3px] border-bg shadow-sm" />
          {data.verified && (
            <div className="absolute bottom-0 right-0 bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center border-2 border-surface shadow-sm text-xs" title="Zweryfikowany">
              ✓
            </div>
          )}
        </div>

        <div>
          <h3 className="text-xl font-black text-text leading-tight">{data.name}</h3>
          <p className="text-primary font-extrabold uppercase tracking-widest text-[10px] md:text-xs mt-1 mb-1">{data.category.replace('-', ' ')}</p>
          <div className="flex items-center text-accent font-black text-base">
            ⭐ {data.rating} <span className="text-muted text-xs font-medium ml-1.5">({data.reviewCount})</span>
          </div>
        </div>
      </div>

      <div className="bg-bg rounded-lg p-3 mb-4 border border-border/60">
        <span className="block text-[10px] text-muted font-bold uppercase tracking-wide mb-0.5">Dostępność</span>
        <span className="font-bold text-[#008a00] flex items-center gap-1.5 text-sm mb-1">
          <span className="w-2 h-2 rounded-full bg-[#008a00] animate-pulse"></span>
          Szybkie terminy
        </span>
        <span className="text-muted text-xs font-medium">📞 Zadzwoń – sprawdzimy najbliższą dostępność.</span>
      </div>

      <div className="mt-auto flex flex-col gap-2">
        {data.phone && (
          <Button
            variant="accent"
            className="w-full py-2.5 rounded-lg text-sm shadow-sm"
            onClick={() => setShowPhone(prev => !prev)}
          >
            {showPhone ? `📞 ${data.phone}` : 'Pokaż numer'}
          </Button>
        )}

      </div>
    </div>
  );
};

const SpecialistsSection = ({ id, title, specialists }: { id: string, title: string, specialists: SpecialistCard[] }) => (
  <section id={id} className="py-8 md:py-10 scroll-mt-20">
    <div className="max-w-[1280px] mx-auto px-4 md:px-8">
      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-2xl md:text-4xl font-black text-primary tracking-tight whitespace-nowrap">{title}</h2>
        <div className="h-1 w-full bg-border rounded-full opacity-50"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {specialists.map(specialist => (
          <SpecialistCardComponent key={specialist.id} data={specialist} />
        ))}
      </div>
    </div>
  </section>
);

const ContactAndReviewsSection = () => (
  <section id="opinie" className="py-12 md:py-16 border-t border-border mt-4 scroll-mt-20">
    <div className="max-w-[1280px] mx-auto px-4 md:px-8">
      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-2xl md:text-3xl font-black text-text whitespace-nowrap">Okiem klientów</h2>
        <div className="h-1 w-full bg-border rounded-full"></div>
      </div>

      <div className="flex flex-col gap-4 max-w-[600px]">
        <div className="bg-bg border border-border p-5 rounded-xl flex gap-4 items-start shadow-sm">
          <div className="w-12 h-12 rounded-full bg-border flex items-center justify-center font-bold text-muted text-base flex-shrink-0">KW</div>
          <div>
            <div className="flex text-accent mb-1.5 text-sm">⭐⭐⭐⭐⭐</div>
            <p className="text-text font-medium text-sm leading-relaxed mb-2">"Świetna usługa! Fachowiec był u mnie w godzinę. Pełen profesjonalizm i porządek po robocie."</p>
            <p className="text-text font-black text-[10px] md:text-xs uppercase tracking-wide">— Katarzyna W.</p>
          </div>
        </div>

        <div className="bg-bg border border-border p-5 rounded-xl flex gap-4 items-start shadow-sm">
          <div className="w-12 h-12 rounded-full bg-border flex items-center justify-center font-bold text-muted text-base flex-shrink-0">MP</div>
          <div>
            <div className="flex text-accent mb-1.5 text-sm">⭐⭐⭐⭐⭐</div>
            <p className="text-text font-medium text-sm leading-relaxed mb-2">"Szybko, solidnie i w dobrej cenie. Zdecydowanie najlepsza platforma do szukania pomocy w domu."</p>
            <p className="text-text font-black text-[10px] md:text-xs uppercase tracking-wide">— Michał P.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const LocationFooter = () => (
  <footer className="bg-bg border-t border-border pt-10 pb-6">
    <div className="max-w-[1280px] mx-auto px-4 text-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-text text-sm font-medium mb-6">
        <span className="h-px w-12 bg-border hidden md:block"></span>
        <p>Obsługujemy: <strong className="font-black text-primary">Stare Miasto, Krowodrza, Podgórze, Nowa Huta</strong> i okolice.</p>
        <span className="h-px w-12 bg-border hidden md:block"></span>
      </div>
      <div className="text-muted font-bold text-xs tracking-wide">
        &copy; {new Date().getFullYear()} FixApp. Wszelkie prawa zastrzeżone.
      </div>
    </div>
  </footer>
);

// --- GŁÓWNA APLIKACJA ---

export default function App() {
  const electricians = mockSpecialists.filter(s => s.category === 'elektryk');
  const applianceRepair = mockSpecialists.filter(s => s.category === 'naprawa-agd');

  return (
    <div className="min-h-screen bg-bg font-sans text-text selection:bg-accent selection:text-text">
      <Header />
      <main>
        <HeroSection />
        <TrustStats />
        <AboutSection />
        <SpecialistsSection id="elektrycy" title="Elektrycy" specialists={electricians} />
        <SpecialistsSection id="naprawa-agd" title="Naprawa AGD" specialists={applianceRepair} />
        <ContactAndReviewsSection />
      </main>
      <LocationFooter />
    </div>
  );
}
