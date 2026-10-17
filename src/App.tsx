import { useState, useEffect } from 'react';

function WebPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="web" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M50 0 L50 100 M0 50 L100 50 M0 0 L100 100 M100 0 L0 100" stroke="white" strokeWidth="0.5" fill="none" />
            <circle cx="50" cy="50" r="20" stroke="white" strokeWidth="0.3" fill="none" />
            <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="0.3" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#web)" />
      </svg>
    </div>
  );
}

function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500" />
    </div>
  );
}

function GlitchText({ text }: { text: string }) {
  return (
    <span className="relative inline-block">
      <span className="relative z-10">{text}</span>
      <span className="absolute top-0 left-0.5 text-pink-500 opacity-70 animate-pulse" aria-hidden="true">{text}</span>
      <span className="absolute top-0 -left-0.5 text-blue-400 opacity-70 animate-pulse delay-300" aria-hidden="true">{text}</span>
    </span>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/90 backdrop-blur-md shadow-lg shadow-purple-500/10' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <span className="text-white font-bold text-sm">G</span>
          </div>
          <span className="text-white font-bold text-lg tracking-wide">Ghost-Spider</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors text-sm font-medium">About</a>
          <a href="#abilities" className="text-gray-300 hover:text-purple-400 transition-colors text-sm font-medium">Abilities</a>
          <a href="#dimensions" className="text-gray-300 hover:text-purple-400 transition-colors text-sm font-medium">Dimensions</a>
          <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors text-sm font-medium">Contact</a>
        </div>
        <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition-all">
          Swing In
        </button>
      </div>
    </nav>
  );
}

function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Hey Gwen...";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <WebPattern />
      <FloatingOrbs />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-gray-900/50 to-gray-900" />
      
      <div className="relative z-10 text-center px-6">
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            Earth-65 • Dimension Hopper
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-6 tracking-tight">
          <GlitchText text={displayText} />
          <span className="animate-pulse text-purple-400">|</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Drummer. Hero. Dimensional traveler.<br />
          <span className="text-purple-300">The spider chose differently this time.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-purple-500/30 transition-all hover:scale-105">
            <span className="flex items-center gap-2">
              Enter the Web
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
          <button className="px-8 py-4 border border-purple-500/50 text-purple-300 font-bold rounded-full hover:bg-purple-500/10 transition-all hover:scale-105">
            Watch Origin
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-purple-500/50 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 rounded-full bg-purple-400 animate-pulse" />
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-purple-400 font-mono text-sm tracking-wider uppercase">// About</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-6">
              Gwen Stacy
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              In another universe, the spider bit differently. Gwen Stacy isn't just a drummer in her band — she's Ghost-Spider, swinging between dimensions to protect the multiverse.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              With her iconic white and purple suit, she fights crime while keeping her identity secret from everyone... except maybe Miles.
            </p>
            <div className="flex gap-4">
              <div className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                <span className="text-purple-300 text-sm font-medium">Earth-65</span>
              </div>
              <div className="px-4 py-2 bg-pink-500/10 border border-pink-500/30 rounded-lg">
                <span className="text-pink-300 text-sm font-medium">Spider-Touched</span>
              </div>
              <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <span className="text-blue-300 text-sm font-medium">Multiverse</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/20 p-8 flex items-center justify-center">
              <div className="relative">
                {/* Spider web SVG art */}
                <svg viewBox="0 0 200 200" className="w-64 h-64 text-purple-400 opacity-80">
                  <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="100" cy="100" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <line x1="100" y1="20" x2="100" y2="180" stroke="currentColor" strokeWidth="0.5" />
                  <line x1="20" y1="100" x2="180" y2="100" stroke="currentColor" strokeWidth="0.5" />
                  <line x1="43" y1="43" x2="157" y2="157" stroke="currentColor" strokeWidth="0.5" />
                  <line x1="157" y1="43" x2="43" y2="157" stroke="currentColor" strokeWidth="0.5" />
                  {/* Spider in center */}
                  <circle cx="100" cy="100" r="8" fill="currentColor" opacity="0.6" />
                  <circle cx="100" cy="92" r="5" fill="currentColor" opacity="0.6" />
                  {/* Legs */}
                  <path d="M92 100 Q80 90 70 85" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M108 100 Q120 90 130 85" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M92 102 Q78 105 68 110" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M108 102 Q122 105 132 110" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M94 96 Q82 88 74 80" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M106 96 Q118 88 126 80" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M94 106 Q80 112 72 120" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M106 106 Q120 112 128 120" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent rounded-3xl" />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-pink-500/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

function AbilitiesSection() {
  const abilities = [
    {
      icon: "🕸️",
      title: "Web-Slinging",
      description: "Organic web-shooters and wrist-mounted web fluid for swinging through NYC's skyline.",
      color: "purple"
    },
    {
      icon: "⚡",
      title: "Spider-Sense",
      description: "Precognitive danger awareness that tingles before threats materialize.",
      color: "pink"
    },
    {
      icon: "🌀",
      title: "Dimensional Travel",
      description: "Ability to phase between parallel universes using specialized tech.",
      color: "blue"
    },
    {
      icon: "🥁",
      title: "Drummer Skills",
      description: "When she's not saving the world, she's keeping the beat in her band.",
      color: "purple"
    },
    {
      icon: "💪",
      title: "Enhanced Strength",
      description: "Superhuman strength allowing her to lift approximately 10 tons.",
      color: "pink"
    },
    {
      icon: "🎭",
      title: "Stealth & Agility",
      description: "Acrobatic prowess and enhanced reflexes for evading any danger.",
      color: "blue"
    }
  ];

  const colorClasses: Record<string, { bg: string; border: string; text: string; shadow: string }> = {
    purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-400', shadow: 'hover:shadow-purple-500/20' },
    pink: { bg: 'bg-pink-500/10', border: 'border-pink-500/30', text: 'text-pink-400', shadow: 'hover:shadow-pink-500/20' },
    blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400', shadow: 'hover:shadow-blue-500/20' },
  };

  return (
    <section id="abilities" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-purple-400 font-mono text-sm tracking-wider uppercase">// Abilities</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-4">
            With Great Power...
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-xl mx-auto">
            Every spider has its gifts. Here's what makes Ghost-Spider one of the most versatile heroes in the multiverse.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {abilities.map((ability, index) => {
            const colors = colorClasses[ability.color];
            return (
              <div
                key={index}
                className={`group p-6 rounded-2xl ${colors.bg} border ${colors.border} hover:shadow-xl ${colors.shadow} transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="text-4xl mb-4">{ability.icon}</div>
                <h3 className={`text-xl font-bold ${colors.text} mb-2`}>{ability.title}</h3>
                <p className="text-gray-400 leading-relaxed">{ability.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DimensionsSection() {
  const dimensions = [
    { name: "Earth-65", status: "Home", color: "from-purple-600 to-pink-600" },
    { name: "Earth-1610", status: "Visited", color: "from-blue-600 to-purple-600" },
    { name: "Earth-616", status: "Allied", color: "from-pink-600 to-red-600" },
    { name: "Earth-???", status: "Unknown", color: "from-gray-600 to-purple-600" },
  ];

  return (
    <section id="dimensions" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-purple-400 font-mono text-sm tracking-wider uppercase">// Dimensions</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-4">
            Across the Multiverse
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-xl mx-auto">
            Gwen doesn't just swing through New York — she swings through realities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dimensions.map((dim, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
              <div className={`absolute inset-0 bg-gradient-to-br ${dim.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
              <div className="relative p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-white">{dim.name}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    dim.status === 'Home' ? 'bg-green-500/20 text-green-400' :
                    dim.status === 'Visited' ? 'bg-blue-500/20 text-blue-400' :
                    dim.status === 'Allied' ? 'bg-purple-500/20 text-purple-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {dim.status}
                  </span>
                </div>
                <div className="w-full h-1 rounded-full bg-gray-700 overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${dim.color} rounded-full`} style={{ width: `${100 - index * 20}%` }} />
                </div>
                <p className="text-gray-500 text-sm mt-3">Dimensional stability: {100 - index * 20}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CombatStats() {
  const [hoveredStat, setHoveredStat] = useState<string | null>(null);
  
  const stats = [
    { name: "Strength", level: 85, color: "from-purple-500 to-pink-500", icon: "💪" },
    { name: "Speed", level: 92, color: "from-blue-500 to-purple-500", icon: "⚡" },
    { name: "Agility", level: 96, color: "from-pink-500 to-red-500", icon: "🌀" },
    { name: "Combat IQ", level: 88, color: "from-purple-600 to-blue-500", icon: "🧠" },
    { name: "Web Mastery", level: 94, color: "from-purple-500 to-pink-600", icon: "🕸️" },
    { name: "Danger Sense", level: 98, color: "from-red-500 to-pink-500", icon: "⚠️" },
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Dark red/purple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-red-950/10 to-gray-900" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-red-400 font-mono text-sm tracking-wider uppercase">// Combat Protocol</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-4">
            Don't Let the Flowers Fool You
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
            Yeah, I can be peaceful. But when things go sideways? Let's just say I've taken down villains twice my size and lived to drum another day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Stats bars */}
          <div className="space-y-6">
            {stats.map((stat) => (
              <div
                key={stat.name}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredStat(stat.name)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{stat.icon}</span>
                    <span className="text-white font-bold">{stat.name}</span>
                  </div>
                  <span className={`font-mono text-sm transition-colors ${
                    hoveredStat === stat.name ? 'text-white' : 'text-gray-500'
                  }`}>
                    {stat.level}/100
                  </span>
                </div>
                <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className={`absolute inset-y-0 left-0 bg-gradient-to-r ${stat.color} rounded-full transition-all duration-1000 ease-out ${
                      hoveredStat === stat.name ? 'shadow-lg' : ''
                    }`}
                    style={{
                      width: `${stat.level}%`,
                      boxShadow: hoveredStat === stat.name ? '0 0 20px rgba(239, 68, 68, 0.5)' : 'none'
                    }}
                  />
                  {hoveredStat === stat.name && (
                    <div className="absolute inset-0 bg-white/10 animate-pulse rounded-full" />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Combat info card */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-50" />
            <div className="relative bg-gray-900/80 border border-red-500/30 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                <span className="text-red-400 font-mono text-sm">THREAT ASSESSMENT</span>
              </div>
              
              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center py-2 border-b border-gray-800">
                  <span className="text-gray-400">Combat Style</span>
                  <span className="text-white font-medium">Acrobatic Striker</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-800">
                  <span className="text-gray-400">Preferred Range</span>
                  <span className="text-white font-medium">Close-Mid</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-800">
                  <span className="text-gray-400">Signature Move</span>
                  <span className="text-white font-medium">Web Barrage</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-800">
                  <span className="text-gray-400">Weakness</span>
                  <span className="text-white font-medium">Sonic Attacks</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-800">
                  <span className="text-gray-400">Kill Count</span>
                  <span className="text-green-400 font-medium">Zero (Non-lethal)</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-400">Danger Level</span>
                  <span className="text-red-400 font-bold">EXTREME</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                <p className="text-red-300 text-sm italic">
                  "I don't kill. But I can make sure you won't be getting up anytime soon."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PeacefulMoment() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-amber-950/20 to-gray-900" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="text-amber-400 font-mono text-sm tracking-wider uppercase">// A Quiet Moment</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-4">
            Where the Web Ends...
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-xl mx-auto">
            Even heroes need a place to rest. A field of flowers, a river's song, and someone to share the silence with.
          </p>
        </div>

        <div className="relative group">
          {/* Glow effects behind image */}
          <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 via-purple-500/10 to-pink-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-700" />
          
          {/* Image container */}
          <div className="relative rounded-3xl overflow-hidden border border-amber-500/20 shadow-2xl shadow-amber-500/10">
            <img
              src="https://image.qwenlm.ai/generated-images/a6bb0670-49c1-4895-a672-c534240efcd1/_result.png"
              alt="Two friends sitting together in a sunlit field of wildflowers by a gentle river"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay gradient at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
            
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <p className="text-white/90 text-lg md:text-xl font-medium italic max-w-2xl">
                "Some days, the best thing you can do is put down the mask, sit in the flowers, and just... be."
              </p>
              <p className="text-amber-400/80 text-sm mt-3 font-mono">— a quiet afternoon, somewhere between dimensions</p>
            </div>
          </div>
        </div>

        {/* Decorative flowers */}
        <div className="flex justify-center gap-3 mt-8 text-2xl opacity-60">
          <span>🌸</span>
          <span>🌼</span>
          <span>💜</span>
          <span>🌷</span>
          <span>🌻</span>
          <span>💛</span>
          <span>🌸</span>
        </div>
      </div>
    </section>
  );
}

function QuoteSection() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-8xl text-purple-500/20 font-serif">"</div>
          <blockquote className="text-3xl md:text-4xl font-bold text-white leading-relaxed relative z-10">
            Everyone tells you what's going to happen. They try to write your story for you. But{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              you're the one who gets to decide.
            </span>
          </blockquote>
          <div className="mt-8 text-gray-400">— Gwen Stacy, Ghost-Spider</div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20" />
          <div className="absolute inset-0 border border-purple-500/20 rounded-3xl" />
          
          <div className="relative p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Ready to Swing?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
              Whether you need a hero, a drummer, or just someone to talk to across dimensions — Gwen's got you covered.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-purple-500/30 transition-all hover:scale-105">
                Send a Web-Signal
              </button>
              <button className="px-8 py-4 border border-purple-500/50 text-purple-300 font-bold rounded-full hover:bg-purple-500/10 transition-all hover:scale-105">
                Join the Spider-Society
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-800 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <span className="text-white font-bold text-sm">G</span>
          </div>
          <span className="text-gray-400 text-sm">Ghost-Spider © Earth-65</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors">
            <i className="fab fa-twitter text-lg"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors">
            <i className="fab fa-instagram text-lg"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors">
            <i className="fab fa-spotify text-lg"></i>
          </a>
        </div>
        <p className="text-gray-600 text-sm">
          "Not every story has to end the way you expect."
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <AbilitiesSection />
      <DimensionsSection />
      <CombatStats />
      <PeacefulMoment />
      <QuoteSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
