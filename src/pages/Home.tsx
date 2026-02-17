export function Home() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('/landing page copy.jpg')` }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-wide mb-4">
                    Abilash Maria
                </h1>
                <p className="text-sm md:text-base text-white/80 tracking-[0.3em] uppercase">
                    Filmmaker
                </p>
            </div>
        </div>
    );
}
