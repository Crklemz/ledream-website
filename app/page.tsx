export default function Home() {
  return (
    <main className="min-h-screen bg-dark-black">
      {/* Hero Section */}
      <section className="section-dark section-padding">
        <div className="container-standard text-center">
          <h1 className="text-h1 neon-text-multicolor animate-glow-pulse mb-6">
            LEDream
          </h1>
          <p className="text-xl text-neutral-white max-w-2xl mx-auto mb-8">
            A psychedelic neon experience powered by Next.js 16
          </p>
          <div className="flex gap-4 justify-center">
            <button className="btn-neon-red">Get Started</button>
            <button className="btn-neon-outline border-neon-blue text-neon-blue">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Color Showcase */}
      <section className="section-navy section-padding">
        <div className="container-standard">
          <h2 className="text-h2 text-neutral-white mb-12 text-center">
            Neon Color Palette
          </h2>
          <div className="grid-4-col">
            <div className="text-center space-y-4">
              <div className="h-24 bg-neon-red rounded-lg shadow-neon-red flex items-center justify-center">
                <span className="text-dark-black font-bold">Red</span>
              </div>
              <p className="neon-text-red text-sm">#FF3D00</p>
            </div>
            <div className="text-center space-y-4">
              <div className="h-24 bg-neon-blue rounded-lg shadow-neon-blue flex items-center justify-center">
                <span className="text-dark-black font-bold">Blue</span>
              </div>
              <p className="neon-text-blue text-sm">#00F0FF</p>
            </div>
            <div className="text-center space-y-4">
              <div className="h-24 bg-neon-purple rounded-lg shadow-neon-purple flex items-center justify-center">
                <span className="text-neutral-white font-bold">Purple</span>
              </div>
              <p className="neon-text-purple text-sm">#BF00FF</p>
            </div>
            <div className="text-center space-y-4">
              <div className="h-24 bg-neon-magenta rounded-lg flex items-center justify-center">
                <span className="text-neutral-white font-bold">Magenta</span>
              </div>
              <p className="neon-text-magenta text-sm">#FF10F0</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="section-brick section-padding">
        <div className="container-standard">
          <h2 className="text-h2 text-neutral-white mb-12 text-center">
            Design System Features
          </h2>
          <div className="grid-3-col">
            <div className="card-neon-red">
              <h3 className="text-h3 neon-text-red mb-4">Neon Effects</h3>
              <p className="text-neutral-white">
                Subtle, medium, and strong glow effects for text and borders
              </p>
            </div>
            <div className="card-neon-blue">
              <h3 className="text-h3 neon-text-blue mb-4">Clean Layouts</h3>
              <p className="text-neutral-white">
                Professional structure with spacious dark backgrounds
              </p>
            </div>
            <div className="card-neon-purple">
              <h3 className="text-h3 neon-text-purple mb-4">Smooth Animations</h3>
              <p className="text-neutral-white">
                Purposeful animations with reduced motion support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient Example */}
      <section className="section-dark section-padding">
        <div className="container-standard">
          <div className="bg-gradient-neon-rainbow animate-gradient-shift p-12 rounded-lg text-center">
            <h2 className="text-h2 text-dark-black mb-4 font-black">
              Animated Gradient
            </h2>
            <p className="text-dark-black text-lg">
              Smooth gradient animation showcasing all neon colors
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
