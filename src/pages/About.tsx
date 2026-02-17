export function About() {
    return (
        <div className="min-h-screen bg-black pt-24 pb-16 px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-light text-white mb-4">About</h1>
                    <p className="text-white/60">The story behind the lens</p>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                        <img
                            src="/landing page copy.jpg"
                            alt="Abilash Maria"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>

                    {/* Bio */}
                    <div className="space-y-6">
                        <h2 className="text-2xl md:text-3xl font-light text-white">
                            Abilash Maria
                        </h2>
                        <p className="text-white/70 leading-relaxed">
                            A passionate filmmaker with over 8 years of experience crafting visual stories
                            that captivate and inspire. Specializing in cinematic storytelling, I bring a
                            unique perspective to every project, whether it's a short film, documentary,
                            music video, or commercial.
                        </p>
                        <p className="text-white/70 leading-relaxed">
                            My work has been featured in numerous film festivals and has garnered recognition
                            for its innovative approach to visual narrative. I believe in the power of imagery
                            to evoke emotion and create lasting connections with audiences.
                        </p>
                        <p className="text-white/70 leading-relaxed">
                            Based in India, I work with clients worldwide, bringing visions to life through
                            meticulous attention to detail and artistic excellence.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                            <div className="text-center">
                                <p className="text-3xl font-light text-white">8+</p>
                                <p className="text-sm text-white/50">Years Experience</p>
                            </div>
                            <div className="text-center">
                                <p className="text-3xl font-light text-white">50+</p>
                                <p className="text-sm text-white/50">Projects Completed</p>
                            </div>
                            <div className="text-center">
                                <p className="text-3xl font-light text-white">15+</p>
                                <p className="text-sm text-white/50">Awards Won</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="mt-20">
                    <h3 className="text-xl font-light text-white text-center mb-8">Expertise</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {['Cinematography', 'Direction', 'Color Grading', 'Editing', 'Sound Design', 'Storytelling'].map((skill) => (
                            <span
                                key={skill}
                                className="px-6 py-3 rounded-full border border-white/20 text-white/70 text-sm hover:border-white/50 hover:text-white transition-all duration-300"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
