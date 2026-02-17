import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Youtube, Linkedin } from 'lucide-react';

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="min-h-screen bg-black pt-24 pb-16 px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-light text-white mb-4">Contact</h1>
                    <p className="text-white/60 max-w-xl mx-auto">
                        Have a project in mind? Let's create something extraordinary together.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-light text-white mb-6">Get in Touch</h2>
                            <p className="text-white/60 leading-relaxed mb-8">
                                I'm always open to discussing new projects, creative ideas, or opportunities
                                to be part of your vision. Feel free to reach out!
                            </p>
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-4">
                            <a
                                href="mailto:hello@abilashmaria.com"
                                className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/50 transition-colors">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-white/50">Email</p>
                                    <p className="text-white">hello@abilashmaria.com</p>
                                </div>
                            </a>

                            <a
                                href="tel:+919876543210"
                                className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/50 transition-colors">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-white/50">Phone</p>
                                    <p className="text-white">+91 98765 43210</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 text-white/70">
                                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-white/50">Location</p>
                                    <p className="text-white">Kerala, India</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="pt-8 border-t border-white/10">
                            <p className="text-sm text-white/50 mb-4">Follow me</p>
                            <div className="flex gap-4">
                                {[
                                    { icon: Instagram, href: '#' },
                                    { icon: Youtube, href: '#' },
                                    { icon: Linkedin, href: '#' },
                                ].map(({ icon: Icon, href }, index) => (
                                    <a
                                        key={index}
                                        href={href}
                                        className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:border-white/50 hover:text-white transition-all"
                                    >
                                        <Icon className="w-4 h-4" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                        <h3 className="text-xl font-light text-white mb-6">Send a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm text-white/50 mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm text-white/50 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm text-white/50 mb-2">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
                                    placeholder="Project inquiry"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm text-white/50 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-white text-black font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-white/90 transition-colors"
                            >
                                <Send className="w-4 h-4" />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
