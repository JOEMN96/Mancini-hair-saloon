import { useState } from 'react';
import portfolioData from '@/data/portfolio.json';

interface PortfolioItem {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
    year: string;
}

export function Portfolio() {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const items: PortfolioItem[] = portfolioData;

    const categories = ['All', ...new Set(items.map(item => item.category))];

    const filteredItems = selectedCategory === 'All'
        ? items
        : items.filter(item => item.category === selectedCategory);

    return (
        <div className="min-h-screen bg-black pt-24 pb-16 px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-light text-white mb-4">Portfolio</h1>
                    <p className="text-white/60 max-w-2xl mx-auto">
                        A collection of cinematic works spanning short films, documentaries, music videos, and commercial projects.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex justify-center gap-4 mb-12 flex-wrap">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 text-sm tracking-wide transition-all duration-300 rounded-full border ${selectedCategory === category
                                    ? 'bg-white text-black border-white'
                                    : 'bg-transparent text-white/70 border-white/20 hover:border-white/50 hover:text-white'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className="group relative overflow-hidden rounded-lg aspect-video cursor-pointer"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-xs text-white/60 tracking-wider uppercase mb-1">
                                    {item.category} · {item.year}
                                </span>
                                <h3 className="text-xl font-medium text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-white/70">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
