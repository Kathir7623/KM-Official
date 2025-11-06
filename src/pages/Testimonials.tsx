import { Star, Quote, ArrowRight } from 'lucide-react';

interface TestimonialProps {
  name: string;
  text: string;
  rating: number;
}

function Testimonial({ name, text, rating }: TestimonialProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#ED7A1C] hover:shadow-xl transition-shadow">
      <div className="flex items-center mb-4">
        <Quote className="w-10 h-10 text-[#ED7A1C] mr-3" />
        <div className="flex">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-[#ED7A1C] fill-current" />
          ))}
        </div>
      </div>
      <p className="text-gray-700 text-lg mb-6 leading-relaxed italic">"{text}"</p>
      <p className="font-semibold text-gray-800">— {name}</p>
    </div>
  );
}

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Suresh & Anjali P.',
      text: 'Karthik made the entire process effortless. He answered every question, guided us through paperwork, and got us a fantastic rate! We felt supported every step of the way.',
      rating: 5,
    },
    {
      name: 'Ravi K.',
      text: 'I refinanced with Karthik Mortgage and saved over $350 per month. The service was exceptional and the process was much faster than I expected. Highly recommend!',
      rating: 5,
    },
    {
      name: 'Priya D.',
      text: 'As first-time buyers, we were nervous about the process. Karthik explained everything clearly and helped us close early! We couldn\'t be happier with our new home.',
      rating: 5,
    },
    {
      name: 'Michael T.',
      text: 'Professional, knowledgeable, and always available to answer questions. Karthik got us approved quickly and found us a better rate than we thought possible.',
      rating: 5,
    },
    {
      name: 'Sarah & James L.',
      text: 'We had been turned down by other lenders, but Karthik found a solution that worked for us. His expertise and persistence made our dream of homeownership a reality.',
      rating: 5,
    },
    {
      name: 'David M.',
      text: 'Switching from my previous lender to Karthik Mortgage was the best decision. The communication was outstanding, and I closed on time with no surprises.',
      rating: 5,
    },
    {
      name: 'Lisa W.',
      text: 'Karthik took the time to explain all our options and helped us choose the best loan for our situation. We felt like we were his only client, even though I know he\'s busy!',
      rating: 5,
    },
    {
      name: 'Robert & Emily S.',
      text: 'From pre-approval to closing, everything was seamless. Karthik kept us informed throughout and made buying our first home an exciting experience rather than a stressful one.',
      rating: 5,
    },
    {
      name: 'Amanda K.',
      text: 'I refinanced to consolidate debt and lower my payment. Karthik was honest about my options and helped me save thousands. I tell everyone about his service!',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#FFF5E6] to-[#FFE8CC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Star className="w-16 h-16 text-[#ED7A1C] mx-auto mb-6 fill-current" />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Real Stories. Real Results.
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Don't just take our word for it. See what our satisfied clients have to say about their experience with Karthik Mortgage.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                name={testimonial.name}
                text={testimonial.text}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#FFF5E6] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-[#ED7A1C] text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Want to See More Reviews?</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Check out verified reviews from satisfied clients on Google, Zillow, and Facebook to see why Karthik Mortgage is a trusted name in the mortgage industry.
            </p>
            <a
              href="/reviews"
              className="bg-[#ED7A1C] text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#D66A0C] transition-colors shadow-lg inline-flex items-center"
            >
              Read More Reviews <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Join our growing list of satisfied clients. Let's work together to make your homeownership or refinancing goals a reality.
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
