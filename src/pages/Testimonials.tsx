import { Star, Quote, ArrowRight } from "lucide-react";

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
      name: "Jagadish Tippini",
      text: "Karthik and his team @ Karthik Mortgage Inc. were a dream to work with—Super communicative and on top of everything from start to finish. He was always helpful and never seemed frustrated. If you're thinking about refinancing, I can't recommend him enough! Thanks so much Karthik!",
      rating: 5,
    },
    {
      name: "Mahalingam Ramasamy",
      text: "I had an outstanding experience working with Karthik for my recent home loan. From the initial application to the final closing, the entire process was incredibly smooth and efficient. Karthik is on top of every detail, ensuring all deadlines were met without any hitches. I highly recommend Karthik to anyone looking for a hassle-free lending experience.",
      rating: 5,
    },
    {
      name: "Sriram Ramesh",
      text: "Entire refinance process was very smooth, super communicative, always available for any clarifications.",
      rating: 5,
    },
    {
      name: "Saidulu Sai",
      text: "Karthik has provided a great service, explained all details and approachable for all your queries.",
      rating: 5,
    },
    {
      name: "Ramasamy Muthusamy",
      text: "Excellent Service. Karthik is detailed always and provides best service.",
      rating: 5,
    },
    {
      name: "Ashok Peddi",
      text: "Detailed explanation!!!",
      rating: 5,
    },
    {
      name: "Sathiyamoorthy AN",
      text: "Had a great experience with the Karthik Mortgage for my refinance. Karthik and team provided end to end support and easy working with them. They followed up on time and showed patience even when I was late with documents. Closing was an easy process. Thank you!",
      rating: 5,
    },
    {
      name: "Ravindra Babu",
      text: "Karthik is knowledgeable, friendly and responsive. Worth talking to him if you have any questions about refinancing. Strongly recommend him!",
      rating: 5,
    },
    {
      name: "Srikant Konnur",
      text: "Great team to work with! They follow up consistently and make sure there are no hiccups during the closing process. Fair and transparent transactions.",
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
  