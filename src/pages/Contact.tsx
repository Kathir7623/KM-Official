import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#FFF5E6] to-[#FFE8CC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Mail className="w-16 h-16 text-[#ED7A1C] mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              We'd Love to Hear From You
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Whether you're ready to apply or just exploring your options, our team is here to answer questions and guide you through every step of the mortgage journey.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Have questions about mortgages, our process, or your specific situation? Fill out the form and we'll get back to you promptly. You can also reach us by phone or email.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#FFF5E6] p-3 rounded-full mr-4">
                    <Phone className="w-6 h-6 text-[#ED7A1C]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-700">(470) 706-5858</p>
                    <p className="text-sm text-gray-600">Monday - Friday: 9am - 6pm</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#FFF5E6] p-3 rounded-full mr-4">
                    <Mail className="w-6 h-6 text-[#ED7A1C]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-700">karthik@karthikmortgage.com</p>
                    <p className="text-sm text-gray-600">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#FFF5E6] p-3 rounded-full mr-4">
                    <MapPin className="w-6 h-6 text-[#ED7A1C]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Office</h3>
                    <p className="text-gray-700">5900 Balcones Dr #17422</p>
                    <p className="text-gray-700">Austin, TX 78731</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-[#FFF5E6] p-6 rounded-lg border-l-4 border-[#ED7A1C]">
                <h3 className="font-bold text-gray-800 mb-2">Ready to Apply?</h3>
                <p className="text-gray-700 mb-4">
                  If you're ready to get started, you can begin your application online right now. It's fast, secure, and you can save your progress.
                </p>
                <a
                  href="https://rammtg.my1003app.com/2507848/register"
                  className="inline-flex items-center text-[#ED7A1C] font-semibold hover:text-[#D66A0C]"
                >
                  Start Your Application <Send className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <div className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-[#ED7A1C]">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>

                {submitted ? (
                  <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8 text-center">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                    <p className="text-gray-700">
                      Thank you for reaching out. We'll get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-[#ED7A1C] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-[#ED7A1C] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-[#ED7A1C] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-[#ED7A1C] focus:outline-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#ED7A1C] text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#D66A0C] transition-colors shadow-lg flex items-center justify-center"
                    >
                      <Send className="mr-2 w-5 h-5" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
