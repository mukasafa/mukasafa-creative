import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
    const form = useRef();
    const [isLoading, setIsLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs
            .sendForm(
                'service_ixkuktm', // Service ID Anda
                'template_zij3kkm', // Template ID Anda
                form.current,
                { publicKey: 'kGxsbMLba6OdZ9Csx' }
            )
            .then(
                () => {
                    toast.success('Pesan terkirim! 🎉');
                    form.current.reset();
                },
                (error) => {
                    toast.error(`Gagal mengirim: ${error.text}`);
                }
            )
            .finally(() => setIsLoading(false));
    };

    return (
        <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
                {/* Input fields sama seperti sebelumnya */}
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Mengirim...' : 'Kirim Pesan'}
                </button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default ContactForm;