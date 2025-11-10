import { Star } from "lucide-react";

export default function GoogleReviews() {
  const reviews = [
    {
      name: "Jagadish Tippini",
      text: "Karthik and his team @ Karthik Mortgage Inc. were a dream to work with—Super communicative and on top of everything from start to finish. He was always helpful and never seemed frustrated. If you're thinking about refinancing, I can't recommend him enough! Thanks so much Karthik!",
      rating: 5,
    },
    {
      name: "Mahalingam Ramasamy",
      text: "I had an outstanding experience working with Karthik for my recent home loan. From the initial application to the final closing, the entire process was incredibly smooth and efficient. Karthik is on top of every detail, ensuring all deadlines were met without any hitches. What can often be a stressful process was made simple and straightforward thanks to their professionalism and expertise. I highly recommend Karthik to anyone looking for a hassle-free lending experience.",
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
      name: "Sridhar P",
      text: "Overall, working with Karthik and team was a good experience. I wish all the best and success in their future endeavors.",
      rating: 5,
    },
    {
      name: "Srikant Konnur",
      text: "Great team to work with! They follow up consistently and make sure we don't experience any hiccups during the closing process. Fair and transparent transactions.",
      rating: 5,
    },
    {
      name: "Manoj Ramalingam",
      text: "We were very fortunate to work with Karthik and his team for processing mortgage for our first home. The process was pretty smooth. Karthik took time to explain what to expect in the process. His team is knowledgeable, diligent in following up and provided guidance on document uploads and verification. The whole process got completed in couple of days and resulted in a smooth closing experience. Happy that we found the right partner to work with. Thank you Karthik & Team! Excellent job!",
      rating: 5,
    },
    {
      name: "Ravi Kura",
      text: "Karthik and his team did an amazing job with refinance. Felt Karthik is very trustworthy and knowledgeable and highly responsive. Great working with him.",
      rating: 5,
    },
    {
      name: "Vadivelkumar Palanisamy",
      text: "Recently I got opportunity to work with Karthik on my house home refinancing. He gave us very competitive interest compare to other lenders and he has in depth knowledge on the tax differentiation between different states. He is very transparent from starting to end. Thank you for all the help and wish you achieve great success!",
      rating: 5,
    },
    {
      name: "Sathiyamoorthy AN",
      text: "Had a great experience with the Karthik Mortgage for my refinance. Karthik and team provided end to end support and easy working with them. They have followed up on time and have shown patience even when I was not turning documents back on time. They explained everything whenever I needed clarification and closing was such easy process. Thank you. Appreciated!",
      rating: 5,
    },
    {
      name: "Ravindra Babu",
      text: "Karthik is knowledgeable no doubt about it. Worth try to talk with him if you have any questions with refinancing. He is so friendly as well and responsive. Strongly suggest him.",
      rating: 5,
    },
  ];

  return (
    <section className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-10">
          What Our Clients Say
        </h1>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-[#FFFCEB] border border-gray-200 rounded-2xl shadow-md p-6 text-left hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="bg-[#ED7A1C] text-white font-semibold text-xl w-12 h-12 flex items-center justify-center rounded-full mr-4">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{review.name}</h3>
                  <div className="flex items-center">
                    {[...Array(review.rating)].map((_, idx) => (
                      <Star
                        key={idx}
                        className="w-4 h-4 text-[#ED7A1C] fill-current"
                      />
                    ))}
                  </div>
                </div>
                <img
                  src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
                  alt="Google"
                  className="ml-auto w-5 h-5"
                />
              </div>

              <p className="text-gray-700 text-sm leading-relaxed">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
