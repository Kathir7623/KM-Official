import { Star, ExternalLink, ArrowRight } from 'lucide-react';

export default function Reviews() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#FFF5E6] to-[#FFE8CC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Star className="w-16 h-16 text-[#ED7A1C] mx-auto mb-6 fill-current" />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              See What Homeowners Are Saying About Us
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Check out verified reviews from satisfied clients on Google, Zillow, and Facebook to see why Karthik Mortgage is a trusted name in the mortgage industry.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 text-[#ED7A1C] fill-current" />
                ))}
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-800 mb-2">5.0 Average Rating</p>
            <p className="text-lg text-gray-600">Based on 100+ verified reviews</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-200 hover:border-[#ED7A1C] hover:shadow-xl transition-all text-center group"
            >
              <div className="bg-[#FFF5E6] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#ED7A1C] transition-colors">
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    className="text-[#ED7A1C] group-hover:text-white"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Google Reviews</h3>
              <div className="flex items-center justify-center mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#ED7A1C] fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">5.0 rating with 50+ reviews</p>
              <div className="flex items-center justify-center text-[#ED7A1C] font-semibold group-hover:text-[#D66A0C]">
                Read Reviews <ExternalLink className="ml-2 w-4 h-4" />
              </div>
            </a>

            <a
              href="https://www.zillow.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-200 hover:border-[#ED7A1C] hover:shadow-xl transition-all text-center group"
            >
              <div className="bg-[#FFF5E6] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#ED7A1C] transition-colors">
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    className="text-[#ED7A1C] group-hover:text-white"
                    d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Zillow Reviews</h3>
              <div className="flex items-center justify-center mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#ED7A1C] fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">5.0 rating with 30+ reviews</p>
              <div className="flex items-center justify-center text-[#ED7A1C] font-semibold group-hover:text-[#D66A0C]">
                Read Reviews <ExternalLink className="ml-2 w-4 h-4" />
              </div>
            </a>

            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-200 hover:border-[#ED7A1C] hover:shadow-xl transition-all text-center group"
            >
              <div className="bg-[#FFF5E6] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#ED7A1C] transition-colors">
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    className="text-[#ED7A1C] group-hover:text-white"
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Facebook Reviews</h3>
              <div className="flex items-center justify-center mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#ED7A1C] fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">5.0 rating with 20+ reviews</p>
              <div className="flex items-center justify-center text-[#ED7A1C] font-semibold group-hover:text-[#D66A0C]">
                Read Reviews <ExternalLink className="ml-2 w-4 h-4" />
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#FFF5E6] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-[#ED7A1C] text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Makes Us Different?</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our consistently high ratings across all platforms reflect our commitment to exceptional service, clear communication, and putting our clients first. We don't just close loans — we build lasting relationships.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <p className="text-4xl font-bold text-[#ED7A1C] mb-2">100+</p>
                <p className="text-gray-700">Happy Clients</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-[#ED7A1C] mb-2">5.0</p>
                <p className="text-gray-700">Average Rating</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-[#ED7A1C] mb-2">98%</p>
                <p className="text-gray-700">Would Recommend</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Experience 5-Star Service?</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Join our growing family of satisfied clients. Let's start your journey toward homeownership or refinancing today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/apply"
              className="bg-[#ED7A1C] text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#D66A0C] transition-colors shadow-lg inline-flex items-center justify-center"
            >
              Apply Now <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="/testimonials"
              className="bg-white text-[#ED7A1C] border-2 border-[#ED7A1C] px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#FFF5E6] transition-colors shadow-lg"
            >
              Read More Testimonials
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
