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
  const [loading, setLoading] = useState(false);

  // ⚠️ Replace this with your actual Google Apps Script URL
  const scriptURL = 'https://script.google.com/macros/s/AKfycbz09WJt4VItVY2PTEXH8cyNUkAGbH0zyDkF2Uw7FA5jKvCgL2yDpy6wJ_rCg9qv3e4a/exec';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors', // important for Google Apps Script
        headers: { 'Content-Type': 'application/json' },  
        body: JSON.stringify(formData),
      });

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });

      setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an issue submitting your form. Please try again later.');
    } finally {
      setLoading(false);
    }
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
                Have questions about mortgages, our process, or your specific situation? Fill out the form and we'll get back to you promptly.
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
                      disabled={loading}
                      className={`w-full ${
                        loading ? 'bg-gray-400' : 'bg-[#ED7A1C] hover:bg-[#D66A0C]'
                      } text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors shadow-lg flex items-center justify-center`}
                    >
                      {loading ? 'Sending...' : <><Send className="mr-2 w-5 h-5" /> Send Message</>}
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
