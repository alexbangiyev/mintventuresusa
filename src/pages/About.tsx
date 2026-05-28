import { Link } from 'react-router-dom'
import { Target, Heart, Shield } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Practical Solutions',
      description:
        'We focus on solutions that work in the real world, not just on paper. Every recommendation is designed to be implemented and sustained.',
    },
    {
      icon: Heart,
      title: 'Client-Centered',
      description:
        'Your business is unique. We take the time to understand your specific needs and challenges before recommending any solutions.',
    },
    {
      icon: Shield,
      title: 'Reliable Support',
      description:
        'We\'re here when you need us. Our ongoing support ensures that your systems continue to serve your business effectively over time.',
    },
  ]

  return (
    <>
      <section className="bg-gradient-to-b from-white to-gray-50 py-16">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              About Mint Ventures Inc
            </h1>
            <p className="text-xl text-gray-600">
              Helping small businesses build better operational foundations
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Our Mission
              </h2>
              <p className="mb-4 text-lg text-gray-700">
                At Mint Ventures Inc, we believe that every small business
                deserves operational clarity and systems that support growth.
                Too many businesses struggle with unclear processes,
                undocumented workflows, and technology that doesn&apos;t work
                the way they need it to.
              </p>
              <p className="text-lg text-gray-700">
                We&apos;re here to change that. Through practical consulting and
                hands-on implementation, we help small businesses create
                operational foundations that are clear, consistent, and built
                to last.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Our Approach
              </h2>
              <p className="mb-4 text-lg text-gray-700">
                We take a collaborative, no-nonsense approach to business
                consulting. We don&apos;t believe in one-size-fits-all
                solutions or complicated frameworks that look good in theory but
                fail in practice.
              </p>
              <p className="mb-4 text-lg text-gray-700">
                Instead, we focus on understanding your business, identifying
                what&apos;s working and what isn&apos;t, and implementing
                practical improvements that your team can actually use. We work
                alongside you to build systems that make sense for your specific
                situation.
              </p>
              <p className="text-lg text-gray-700">
                Whether you need help optimizing a process, documenting your
                workflows, setting up a CRM, or training your team, we bring
                practical experience and a commitment to solutions that deliver
                real value.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Our Values
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Work With Us
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              If you&apos;re looking for practical operational consulting that
              delivers real improvements, we&apos;d love to hear from you.
            </p>
            <Link to="/contact" className="btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
