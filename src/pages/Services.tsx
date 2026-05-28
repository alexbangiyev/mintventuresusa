import { Workflow, FileText, Settings, Users } from 'lucide-react'
import ServiceCard from '@/components/ServiceCard'
import { Link } from 'react-router-dom'

export default function Services() {
  const services = [
    {
      icon: Workflow,
      title: 'Process & Workflow Optimization',
      description:
        'Streamline your business operations with efficient workflows designed to reduce complexity and increase productivity. We analyze your current processes and implement practical improvements that make day-to-day operations smoother.',
    },
    {
      icon: FileText,
      title: 'SOPs & Documentation',
      description:
        'Create clear, actionable standard operating procedures and documentation that your team can actually use. We help you capture institutional knowledge and ensure consistency across your organization.',
    },
    {
      icon: Settings,
      title: 'CRM Setup & Automation',
      description:
        'Get your customer relationship management system configured correctly from the start. We handle platform selection, customization, data migration, and automation setup to keep your client relationships organized and responsive.',
    },
    {
      icon: Users,
      title: 'Team Onboarding & Training Support',
      description:
        'Ensure your team knows how to use your systems effectively. We provide hands-on training and create resources that help new and existing team members get up to speed quickly.',
    },
  ]

  return (
    <>
      <section className="bg-gradient-to-b from-white to-gray-50 py-16">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Our Services
            </h1>
            <p className="text-xl text-gray-600">
              Practical consulting services designed to improve how your
              business operates
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              How We Work
            </h2>
            <p className="mb-12 text-lg text-gray-600">
              Our approach is collaborative and focused on practical solutions
              that fit your business
            </p>
            <div className="grid gap-8 text-left md:grid-cols-3">
              <div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-xl font-bold text-primary-600">
                  1
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  Discovery
                </h3>
                <p className="text-gray-600">
                  We learn about your business, challenges, and goals through
                  detailed consultation.
                </p>
              </div>
              <div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-xl font-bold text-primary-600">
                  2
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  Implementation
                </h3>
                <p className="text-gray-600">
                  We work with your team to implement solutions that are
                  practical and sustainable.
                </p>
              </div>
              <div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-xl font-bold text-primary-600">
                  3
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  Support
                </h3>
                <p className="text-gray-600">
                  We provide ongoing support to ensure your systems continue to
                  serve your business well.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Ready to get started?
          </h2>
          <p className="mb-8 text-xl text-gray-600">
            Let&apos;s discuss which services would benefit your business most
          </p>
          <Link to="/contact" className="btn-primary">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
