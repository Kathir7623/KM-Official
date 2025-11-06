import { useState } from 'react';
import { CheckCircle, ChevronRight, Lock } from 'lucide-react';

export default function Apply() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    propertyAddress: '',
    propertyValue: '',
    downPayment: '',
    loanType: 'purchase',
    employer: '',
    annualIncome: '',
    employmentYears: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const nextStep = () => {
    if (step < 5) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(6);
  };

  const steps = [
    'Personal Details',
    'Property Info',
    'Employment',
    'Loan Type',
    'Review & Submit',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF5E6] to-white">
      <section className="bg-gradient-to-br from-[#FFF5E6] to-[#FFE8CC] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
              Apply for Your Mortgage Online — Fast, Secure, and Simple
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Begin your application today and let our team guide you toward the right loan solution for your goals.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {step < 6 && (
            <>
              <div className="mb-8">
                <div className="flex justify-between items-center">
                  {steps.map((s, i) => (
                    <div key={i} className="flex items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                          i + 1 <= step
                            ? 'bg-[#ED7A1C] text-white'
                            : 'bg-gray-300 text-gray-600'
                        }`}
                      >
                        {i + 1 <= step ? <CheckCircle className="w-6 h-6" /> : i + 1}
                      </div>
                      {i < steps.length - 1 && (
                        <div
                          className={`w-12 md:w-24 h-1 mx-2 ${
                            i + 1 < step ? 'bg-[#ED7A1C]' : 'bg-gray-300'
                          }`}
                        ></div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-2">
                  {steps.map((s, i) => (
                    <span
                      key={i}
                      className={`text-xs md:text-sm font-medium ${
                        i + 1 === step ? 'text-[#ED7A1C]' : 'text-gray-600'
                      }`}
                      style={{ width: '80px', textAlign: 'center' }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-[#ED7A1C]">
                <form onSubmit={handleSubmit}>
                  {step === 1 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-gray-800 mb-6">Personal Details</h2>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-gray-700 font-semibold mb-2">
                            First Name *
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-[#ED7A1C] focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-gray-700 font-semibold mb-2">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-[#ED7A1C] focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-[#ED7A1C] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-[#ED7A1C] focus:outline-none"
                        />
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-gray-800 mb-6">Property Information</h2>

                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          Property Address *
                        </label>
                        <input
                          type="text"
                          name="propertyAddress"
                          value={formData.propertyAddress}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-[#ED7A1C] focus:outline-none"
                        />
                        <p className="text-sm text-gray-600 mt-1">
                          If refinancing, enter your current property address
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-gray-700 font-semibold mb-2">
                            Property Value *
                          </label>
                          <input
                            type="number"
                            name="propertyValue"
                            value={formData.propertyValue}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-[#ED7A1C] focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-gray-700 font-semibold mb-2">
                            Down Payment *
                          </label>
                          <input
                            type="number"
                            name="downPayment"
                            value={formData.downPayment}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-[#ED7A1C] focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-gray-800 mb-6">Employment & Income</h2>

                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          Employer Name *
                        </label>
                        <input
                          type="text"
                          name="employer"
                          value={formData.employer}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-[#ED7A1C] focus:outline-none"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-gray-700 font-semibold mb-2">
                            Annual Income *
                          </label>
                          <input
                            type="number"
                            name="annualIncome"
                            value={formData.annualIncome}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-[#ED7A1C] focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-gray-700 font-semibold mb-2">
                            Years at Current Job *
                          </label>
                          <input
                            type="number"
                            name="employmentYears"
                            value={formData.employmentYears}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-[#ED7A1C] focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 4 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-gray-800 mb-6">Loan Type</h2>

                      <div>
                        <label className="block text-gray-700 font-semibold mb-4">
                          What type of loan are you applying for? *
                        </label>
                        <div className="space-y-3">
                          <label className="flex items-center p-4 border-2 border-gray-300 rounded-md cursor-pointer hover:border-[#ED7A1C] transition-colors">
                            <input
                              type="radio"
                              name="loanType"
                              value="purchase"
                              checked={formData.loanType === 'purchase'}
                              onChange={handleChange}
                              className="w-5 h-5 text-[#ED7A1C]"
                            />
                            <div className="ml-3">
                              <span className="font-semibold text-gray-800">Home Purchase</span>
                              <p className="text-sm text-gray-600">
                                I'm buying a new home
                              </p>
                            </div>
                          </label>

                          <label className="flex items-center p-4 border-2 border-gray-300 rounded-md cursor-pointer hover:border-[#ED7A1C] transition-colors">
                            <input
                              type="radio"
                              name="loanType"
                              value="refinance"
                              checked={formData.loanType === 'refinance'}
                              onChange={handleChange}
                              className="w-5 h-5 text-[#ED7A1C]"
                            />
                            <div className="ml-3">
                              <span className="font-semibold text-gray-800">Refinance</span>
                              <p className="text-sm text-gray-600">
                                I want to refinance my existing mortgage
                              </p>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 5 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-gray-800 mb-6">Review & Submit</h2>

                      <div className="bg-[#FFF5E6] p-6 rounded-lg space-y-4">
                        <div>
                          <h3 className="font-bold text-gray-800 mb-2">Personal Details</h3>
                          <p className="text-gray-700">
                            {formData.firstName} {formData.lastName}
                          </p>
                          <p className="text-gray-700">{formData.email}</p>
                          <p className="text-gray-700">{formData.phone}</p>
                        </div>

                        <div>
                          <h3 className="font-bold text-gray-800 mb-2">Property Information</h3>
                          <p className="text-gray-700">{formData.propertyAddress}</p>
                          <p className="text-gray-700">
                            Property Value: ${Number(formData.propertyValue).toLocaleString()}
                          </p>
                          <p className="text-gray-700">
                            Down Payment: ${Number(formData.downPayment).toLocaleString()}
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold text-gray-800 mb-2">Employment & Income</h3>
                          <p className="text-gray-700">Employer: {formData.employer}</p>
                          <p className="text-gray-700">
                            Annual Income: ${Number(formData.annualIncome).toLocaleString()}
                          </p>
                          <p className="text-gray-700">
                            Employment Years: {formData.employmentYears}
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold text-gray-800 mb-2">Loan Type</h3>
                          <p className="text-gray-700 capitalize">
                            {formData.loanType === 'purchase'
                              ? 'Home Purchase'
                              : 'Refinance'}
                          </p>
                        </div>
                      </div>

                      <div className="bg-blue-50 border-2 border-blue-500 rounded-lg p-4 flex items-start">
                        <Lock className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-700">
                          <span className="font-semibold">Your data is secure:</span> Your information is
                          encrypted and protected. By submitting this application, you consent to a credit
                          check and agree to our terms of service.
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between mt-8">
                    {step > 1 && step < 6 && (
                      <button
                        type="button"
                        onClick={prevStep}
                        className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md font-semibold hover:bg-gray-300 transition-colors"
                      >
                        Previous
                      </button>
                    )}

                    {step < 5 ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        className="bg-[#ED7A1C] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#D66A0C] transition-colors shadow-lg ml-auto flex items-center"
                      >
                        Next <ChevronRight className="ml-2 w-5 h-5" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="bg-[#ED7A1C] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#D66A0C] transition-colors shadow-lg ml-auto flex items-center"
                      >
                        Submit Application <ChevronRight className="ml-2 w-5 h-5" />
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </>
          )}

          {step === 6 && (
            <div className="bg-white p-12 rounded-lg shadow-xl border-t-4 border-[#ED7A1C] text-center">
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Application Submitted!</h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Thank you for applying with Karthik Mortgage. We've received your application and will
                review it shortly.
              </p>
              <div className="bg-[#FFF5E6] p-6 rounded-lg mb-8">
                <h3 className="font-bold text-gray-800 mb-3 text-lg">What Happens Next?</h3>
                <ul className="text-left space-y-2 text-gray-700">
                  <li>• Our team will review your application within 24 hours</li>
                  <li>• We'll contact you to discuss next steps and answer any questions</li>
                  <li>• You'll receive a list of documents needed for pre-approval</li>
                  <li>• We'll guide you through the entire process from start to finish</li>
                </ul>
              </div>
              <p className="text-gray-600 mb-8">
                Have questions? Call us at <span className="font-semibold">(555) 123-4567</span> or
                email <span className="font-semibold">info@karthikmortgage.com</span>
              </p>
              <a
                href="/"
                className="bg-[#ED7A1C] text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#D66A0C] transition-colors shadow-lg inline-block"
              >
                Return to Home
              </a>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
