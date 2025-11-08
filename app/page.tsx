export default function Home() {
  return (
    <main className="min-h-screen bg-dark-black bg-brick-wall">
      <div className="container mx-auto px-4 py-24">
        <div className="text-center space-y-8">
          {/* Hero Title */}
          <h1 className="font-display text-7xl md:text-9xl font-black neon-text-multicolor animate-glow-pulse">
            LEDream
          </h1>

          {/* Subtitle */}
          <p className="text-white font-body text-xl md:text-2xl max-w-2xl mx-auto">
            A psychedelic neon experience powered by Next.js 16
          </p>

          {/* Color Showcase */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-16 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="h-20 bg-neon-red rounded-lg glow-red"></div>
              <p className="text-neon-red text-sm font-body">Red</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 bg-neon-blue rounded-lg glow-blue"></div>
              <p className="text-neon-blue text-sm font-body">Blue</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 bg-neon-purple rounded-lg glow-purple"></div>
              <p className="text-neon-purple text-sm font-body">Purple</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 bg-neon-magenta rounded-lg"></div>
              <p className="text-neon-magenta text-sm font-body">Magenta</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 bg-neon-green rounded-lg"></div>
              <p className="text-neon-green text-sm font-body">Green</p>
            </div>
          </div>

          {/* Example Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">
            <div className="bg-dark-brick neon-border-red p-6 rounded-lg">
              <h3 className="neon-text-red font-display text-2xl mb-4">
                Neon Red
              </h3>
              <p className="text-white font-body">
                Classic neon red glow effect
              </p>
            </div>

            <div className="bg-dark-brick neon-border-blue p-6 rounded-lg">
              <h3 className="neon-text-blue font-display text-2xl mb-4">
                Electric Blue
              </h3>
              <p className="text-white font-body">
                Vibrant electric blue neon
              </p>
            </div>

            <div className="bg-dark-brick neon-border-purple p-6 rounded-lg">
              <h3 className="neon-text-purple font-display text-2xl mb-4">
                Purple Power
              </h3>
              <p className="text-white font-body">
                Psychedelic purple glow
              </p>
            </div>
          </div>

          {/* Animated Gradient Example */}
          <div className="mt-16 max-w-2xl mx-auto">
            <div className="bg-gradient-neon-rainbow animate-gradient-shift p-8 rounded-lg">
              <h2 className="font-display text-4xl font-bold text-dark-black mb-4">
                Animated Gradient
              </h2>
              <p className="text-dark-black font-body">
                Smooth gradient animation showcasing all neon colors
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

