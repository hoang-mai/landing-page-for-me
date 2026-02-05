'use client';
import { ChangeEvent, useState } from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaUser, FaEnvelope, FaCommentDots } from 'react-icons/fa';
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

export default function Contact() {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0, 0, 0.2, 1] as const,
            },
        },
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        setIsSubmitting(true);

        const templateParams = {
            title: "New Contact Message",
            name: formData.name,
            email: formData.email,
            message: formData.message,
            time: new Date().toLocaleString()
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((result) => {
                console.log(result.text);
                alert("Message sent successfully!");
                setFormData({ name: '', email: '', message: '' });
            }, (error) => {
                console.log(error.text);
                alert("Failed to send message.");
            }).finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center py-20 px-4">
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-4xl font-bold mb-4">
                    Contact Me
                </h1>
            </motion.div>

            <motion.div
                className="w-full max-w-6xl grid md:grid-cols-2 gap-12"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.div
                    className="bg-white/70 backdrop-blur-sm rounded-lg p-8 shadow-md border border-gray-100"
                    variants={itemVariants}
                >
                    <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                Name
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                    <FaUser className="w-5 h-5" />
                                </div>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                                    placeholder="Your name"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Email
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                    <FaEnvelope className="w-5 h-5" />
                                </div>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                                    placeholder="Your email"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                Message
                            </label>
                            <div className="relative">
                                <div className="absolute top-3 left-0 pl-3 flex items-start pointer-events-none text-gray-400">
                                    <FaCommentDots className="w-5 h-5" />
                                </div>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={2}
                                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 resize-x-none"
                                    placeholder="Your message"
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="cursor-pointer w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:opacity-90 transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        >
                            {isSubmitting ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    Sending...
                                </span>
                            ) : (
                                'Send Message'
                            )}
                        </button>
                    </form>
                </motion.div>
                <motion.div
                    className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md border border-gray-100"
                    variants={itemVariants}
                >
                    <h3 className="text-2xl font-semibold mb-8">Connect with Me</h3>
                    <div className="flex gap-6">
                        <a
                            href="https://github.com/hoang-mai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-gray-800 hover:bg-gray-800 hover:text-white hover:scale-[1.02] transition-all duration-300"
                        >
                            <FaGithub className="text-3xl" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/anh-ho%C3%A0ng-mai-49b172305/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white hover:scale-[1.02] transition-all duration-300"
                        >
                            <FaLinkedin className="text-3xl" />
                        </a>
                        <a
                            href="https://www.facebook.com/mai.anh.hoang.434872"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2] hover:text-white hover:scale-[1.02] transition-all duration-300"
                        >
                            <FaFacebook className="text-3xl" />
                        </a>
                        <a
                            href="https://www.instagram.com/maianhhoang3107/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 rounded-full bg-pink-50 flex items-center justify-center text-[#E4405F] hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#E4405F] hover:to-[#FCAF45] hover:text-white hover:scale-[1.02] transition-all duration-300"
                        >
                            <FaInstagram className="text-3xl" />
                        </a>
                    </div>
                </motion.div>


            </motion.div>
        </div>
    );
}
