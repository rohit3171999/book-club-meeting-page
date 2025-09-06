import React, { useState } from 'react';

export default function App() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        rsvp: 'yes',
        comments: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        alert(`Thank you, ${formData.name}! Your RSVP has been recorded.`);
        setFormData({ name: '', email: '', rsvp: 'yes', comments: '' });
    };

    return (
        <div className="bg-slate-50 font-sans text-gray-800">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=swap');

                body { font-family: 'Inter', sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
                html { scroll-behavior: smooth; }

                .hero-bg {
                    background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2070&auto=format&fit=crop');
                    background-size: cover;
                    background-position: center;
                }

                .card-hover:hover { transform: translateY(-5px); transition: all 0.3s ease-in-out; }
                .button-hover:hover { transform: scale(1.05); transition: all 0.3s ease-in-out; }
            `}</style>

            {/* Hero Section */}
            <header className="hero-bg text-white">
                <div className="container mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
                        <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">The Bharthia Bookworms</h1>
                        <p className="text-xl md:text-2xl mb-6 drop-shadow-md">Discover new worlds, one chapter at a time. Join our community of readers.</p>
                        <a href="#rsvp" className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg button-hover hover:bg-indigo-700">
                            Join the Next Meeting
                        </a>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <img src="https://placehold.co/300x450/A98467/FFFFFF?text=Current+Book" alt="Current Book Cover" className="rounded-lg shadow-2xl w-64" />
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-6 py-16 space-y-20">

                {/* Current Book */}
                <section id="current-book" className="text-center">
                    <h2 className="text-4xl font-bold mb-4 text-indigo-600">This Month's Read</h2>
                    <p className="text-gray-500 mb-10">Get ready for a thrilling discussion!</p>
                    <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-xl flex flex-col md:flex-row items-center gap-8 card-hover">
                        <img src="https://placehold.co/200x300/A98467/FFFFFF?text=Book+Cover" alt="Book Cover" className="rounded-md shadow-lg w-48 flex-shrink-0" />
                        <div className="text-left">
                            <h3 className="text-3xl font-bold text-indigo-600 mb-2">The Midnight Library</h3>
                            <p className="text-lg text-gray-600 mb-4">by Matt Haig</p>
                            <p className="text-gray-700 leading-relaxed">
                                Between life and death, there is a library. When Nora Seed finds herself in the Midnight Library, she has a chance to make things right. It's a dazzling novel about all the choices that go into a life well-lived.
                            </p>
                            <a href="#" className="text-indigo-500 hover:underline mt-4 inline-block">Purchase or Read Online &rarr;</a>
                        </div>
                    </div>
                </section>

                {/* Meeting Schedule */}
                <section id="schedule">
                    <h2 className="text-4xl font-bold text-center mb-10 text-indigo-600">Next Meeting Details</h2>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        {[
                            { title: "🗓️ Date & Time", content: ["Saturday, September 27, 2025", "6:00 PM - 7:30 PM IST"] },
                            { title: "📍 Location", content: ["The Corner Cafe", "123 Readers Lane, Bharthia"] },
                            { title: "🔁 Schedule", content: ["We meet on the", "Last Saturday of every month"] }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl shadow-lg card-hover">
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                {item.content.map((line, i) => <p key={i}>{line}</p>)}
                            </div>
                        ))}
                    </div>
                    <div className="mt-10 bg-gray-200 h-64 rounded-lg flex items-center justify-center text-gray-500 shadow-inner">
                        [ Embedded Google Map of "The Corner Cafe, 123 Readers Lane, Bharthia" would go here ]
                    </div>
                </section>

                {/* RSVP Form */}
                <section id="rsvp" className="bg-white p-10 rounded-xl shadow-xl max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8 text-indigo-600">RSVP for the Next Meeting</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 transition duration-300" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 transition duration-300" required />
                        </div>
                        <div>
                            <span className="block text-gray-700 font-medium mb-2">Will you be attending?</span>
                            <div className="flex items-center gap-6">
                                {["yes", "no", "maybe"].map(opt => (
                                    <label key={opt} className="flex items-center">
                                        <input type="radio" name="rsvp" value={opt} checked={formData.rsvp === opt} onChange={handleChange} className="mr-2" /> {opt.charAt(0).toUpperCase() + opt.slice(1)}
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="comments" className="block text-gray-700 font-medium mb-2">Questions or Comments?</label>
                            <textarea id="comments" name="comments" value={formData.comments} onChange={handleChange} rows="4" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 transition duration-300"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg button-hover hover:bg-indigo-700">
                            Submit RSVP
                        </button>
                    </form>
                </section>

                {/* Testimonials */}
                <section id="testimonials">
                    <h2 className="text-4xl font-bold text-center mb-10 text-indigo-600">What Our Members Say</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { quote: "This book club has been a highlight of my month! The discussions are always so engaging and the people are wonderful.", name: "- Priya S." },
                            { quote: "I've discovered so many amazing books I would have never picked up on my own. Highly recommend joining!", name: "- Sameer K." }
                        ].map((t, i) => (
                            <div key={i} className="bg-white p-8 rounded-xl shadow-lg card-hover">
                                <blockquote className="text-gray-600 italic">"{t.quote}"</blockquote>
                                <p className="text-right mt-4 font-semibold text-indigo-600">{t.name}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white mt-16">
                <div className="container mx-auto px-6 py-8 text-center">
                    <p className="text-xl font-bold mb-4">Connect with the Bharthia Bookworms</p>
                    <div className="flex justify-center space-x-6 mb-6">
                        <a href="#" className="hover:text-indigo-400">Facebook</a>
                        <a href="#" className="hover:text-indigo-400">Instagram</a>
                        <a href="#" className="hover:text-indigo-400">Twitter</a>
                    </div>
                    <p className="text-gray-400">Contact: rohit.sharma@example.com</p>
                    <p className="text-sm text-gray-500 mt-4">&copy; 2025 Bharthia Bookworms. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}
