"use client"
import React, { useState } from 'react'
import Social from '@/components/ui/social'
import MagicButton from './MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
/** import { socialMedia } from '@/data'**/
import emailjs from 'emailjs-com'

const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        description: ''
    });
    const [isSent, setIsSent] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        emailjs.send("Mail_service", "template_iimacv3", formData, 'ytoEJKJTcSB5bG8EU')
            .then((result) => {
                console.log('Email successfully sent:', result.text);
                setIsSent(true);
                setTimeout(() => {
                    setIsModalOpen(false);
                    setIsSent(false);
                }, 2000);
            })
            .catch((error) => {
                console.error('Email sending error:', error.text);
            });
    };

    return (
        <footer className="w-full  pb-10 " id="contact">
            <div className='flex flex-col items-center'>
                <h1 className='heading lg:max-w-[45vw]'>
                    Ready to take a chance on <span className='text-purple'>Me?</span>
                </h1>
                <h1 className='heading lg:max-w-[45vw]'>
                    Waiting to hear from <span className='text-purple'>you</span>
                </h1>
                <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out to me today and Let&apos;s talk. </p>

                <MagicButton
                    title="Let's get in touch"
                    icon={<FaLocationArrow />}
                    position="right"
                    handleClick={() => setIsModalOpen(true)} // Move the onClick handler here
                />
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg relative">
                        <button
                            className="absolute top-2 right-2 text-xl"
                            onClick={() => setIsModalOpen(false)}>
                            &times;
                        </button>
                        <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
                        {isSent ? (
                            <p className="text-green-600">Email sent successfully!</p>
                        ) : (
                            <form onSubmit={sendEmail} className="flex flex-col gap-4">
                                <div>
                                    <label htmlFor="title" className="block text-sm font-medium">
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="description" className="block text-sm font-medium">
                                        Description
                                    </label>
                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                        rows={4}
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="mt-4 bg-purple-600 text-white py-2 px-4 rounded-lg"
                                >
                                    Send Message
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            )}

            <Social />
        </footer>
    )
}

export default Footer;