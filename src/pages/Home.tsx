import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight } from 'lucide-react'
import FAQ from '@/components/FAQ'

export default function Home() {
  const trustBullets = [
    'Practical workflows you can follow',
    'Clear SOPs and documentation',
    'Reliable client follow-up systems',
    'Tailored CRM setup and automation',
    'Ongoing support when needed',
  ]

  const testimonials = [
    {
      quote:
        'Mint Ventures helped us streamline our operations and set up workflows that actually work for our team. The documentation they created has been invaluable.',
      author: 'Sarah M.',
      company: 'Local Service Business',
    },
    {
      quote:
        'Their CRM setup and training made a huge difference in how we manage client relationships. We now have systems that keep us organized and responsive.',
      author: 'Michael R.',
      company: 'Professional Services Firm',
    },
  ]

  const faqItems = [
    {
      question: 'How do your consultations work?',
      answer:
        'We start with a discovery call to understand your business needs and challenges. From there, we create a customized plan focusing on the areas where you need the most support—whether that\'s process optimization, documentation, CRM setup, or workflow design. We work collaboratively with your team to implement practical solutions.',
    },
    {
      question: 'Do you offer ongoing support?',
      answer:
        'Yes, we provide ongoing support tailored to your needs. This can include regular check-ins, system maintenance, training for new team members, and continuous optimization of your processes as your business evolves.',
    },
    {
      question: 'Can you help set up a CRM?',
      answer:
        'Absolutely. We specialize in CRM selection, setup, and configuration based on your specific business requirements. We\'ll help you choose the right platform, customize it for your workflows, migrate your data, and train your team to use it effectively.',
    },
  ]

  return (
    <>
      <section className="bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Business Operations Consulting that simplifies how your business runs.
            </h1>
            <p className="mb-8 text-xl text-gray-600 sm:text-2xl">
              Process optimization, workflow design, SOPs, and CRM setup—built
              for clarity and consistency.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link to="/contact" className="btn-primary">
                Book a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/services" className="btn-secondary">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
              What We Deliver
            </h2>
            <div className="space-y-4">
              {trustBullets.map((bullet, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-primary-600" />
                  <p className="text-lg text-gray-700">{bullet}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            What Our Clients Say
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm"
              >
                <p className="mb-6 text-lg italic text-gray-700">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto max-w-3xl">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      <section className="bg-primary-600 py-16 text-white">
        <div className="container-custom text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Ready to simplify your operations?
          </h2>
          <p className="mb-8 text-xl text-primary-100">
            Let&apos;s discuss how we can help your business run more smoothly.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-medium text-primary-600 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
