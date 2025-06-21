import React, { useState } from "react";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const initialForm = {
    name: "",
    email: "",
    project: "",
    message: "",
};

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState(initialForm);
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await emailjs.send(
                "service_kit7qlt", // Replace with your actual EmailJS service ID
                "template_7bqh7hf", // Replace with your actual template ID
                formData,
                "U8rZvK8d2A839CK6v" // Replace with your actual public key
            );
            setSent(true);
            setFormData(initialForm);
        } catch (error) {
            alert("Failed to send message. Please try again.");
        }
        setLoading(false);
    };

    return (
        <section className="relative z-0">
            <div className="container-custom max-w-3xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold">
                        Contact <span className="text-secondary">Us</span>
                    </h2>
                </div>

                <div className="bg-gray-900 p-8 rounded-2xl shadow-xl border border-primary/10">
                    <form onSubmit={handleSubmit} className="space-y-6" autoComplete="off">
                        <div>
                            <label htmlFor="name" className="block text-sm text-gray-300 mb-2">
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                type="text"
                                required
                                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-primary/30 focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm text-gray-300 mb-2">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                type="email"
                                required
                                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-primary/30 focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none"
                            />
                        </div>

                        <div>
                            <label htmlFor="project" className="block text-sm text-gray-300 mb-2">
                                Project / Company
                            </label>
                            <input
                                id="project"
                                name="project"
                                value={formData.project}
                                onChange={handleChange}
                                type="text"
                                required
                                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-primary/30 focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm text-gray-300 mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                required
                                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-primary/30 focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full flex justify-center items-center bg-secondary text-white py-2 px-4 rounded-lg hover:bg-secondary/80 transition disabled:opacity-50"
                        >
                            {loading ? "Sending..." : "Send Message"}
                            {!loading && <Send size={18} className="ml-2" />}
                        </button>

                        {sent && (
                            <p className="text-green-500 text-sm mt-4 text-center">
                                ✅ Message sent successfully!
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
