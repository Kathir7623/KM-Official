import { Heart, Target, Shield, Users, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#FFF5E6] to-[#FFE8CC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Meet Karthik — A Mortgage Professional Who Puts People First
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              At <span className="font-semibold text-[#ED7A1C]">Karthik Mortgage</span>, we're more than a lender — we're your financial guide on the path to homeownership and refinancing success.
            </p>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Founded by <span className="font-semibold">Karthik</span>, a passionate mortgage advisor with years of experience, our company stands for integrity, communication, and long-term relationships.
            </p>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              We know that every client's financial story is unique. That's why we take the time to understand your goals and deliver loan solutions that fit your life — not just your paperwork.
            </p>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Our commitment goes beyond closing day. We're here to help you build equity, refinance when the time is right, and reach your long-term financial milestones.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#FFF5E6] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-[#ED7A1C] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-[#FFF5E6] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-10 h-10 text-[#ED7A1C]" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Transparency & Honesty</h3>
              <p className="text-gray-700 leading-relaxed">
                We believe in clear communication and honest advice. No hidden fees, no surprises — just straightforward guidance you can trust.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-[#FFF5E6] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-[#ED7A1C]" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Education & Empowerment</h3>
              <p className="text-gray-700 leading-relaxed">
                We empower our clients through education. Understanding your options helps you make confident, informed decisions about your financial future.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-[#FFF5E6] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-[#ED7A1C]" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Respect & Reliability</h3>
              <p className="text-gray-700 leading-relaxed">
                We treat every client with respect and deliver on our promises. Your time matters, your goals matter, and your trust matters to us.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-[#FFF5E6] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-10 h-10 text-[#ED7A1C]" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Service Beyond the Sale</h3>
              <p className="text-gray-700 leading-relaxed">
                Our relationship doesn't end at closing. We're here for the long haul, ready to support you through refinancing, equity questions, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#ED7A1C] to-[#D66A0C] text-white p-12 rounded-lg shadow-xl">
              <h2 className="text-3xl font-bold mb-6">Why Clients Choose Karthik Mortgage</h2>
              <div className="space-y-4 text-lg">
                <p className="flex items-start">
                  <span className="text-2xl mr-4">•</span>
                  <span>Years of industry experience and deep knowledge of mortgage products</span>
                </p>
                <p className="flex items-start">
                  <span className="text-2xl mr-4">•</span>
                  <span>Personal attention and customized loan solutions for every client</span>
                </p>
                <p className="flex items-start">
                  <span className="text-2xl mr-4">•</span>
                  <span>Fast pre-approvals and efficient closing processes</span>
                </p>
                <p className="flex items-start">
                  <span className="text-2xl mr-4">•</span>
                  <span>Competitive rates and access to a wide range of loan programs</span>
                </p>
                <p className="flex items-start">
                  <span className="text-2xl mr-4">•</span>
                  <span>Ongoing support and availability throughout your homeownership journey</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#FFF5E6] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Experience the Difference?</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Join the countless clients who have trusted Karthik Mortgage with their home financing needs. Let's start a conversation about your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/apply"
              className="bg-[#ED7A1C] text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#D66A0C] transition-colors shadow-lg inline-flex items-center justify-center"
            >
              Apply Now <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="/contact"
              className="bg-white text-[#ED7A1C] border-2 border-[#ED7A1C] px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#FFF5E6] transition-colors shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
