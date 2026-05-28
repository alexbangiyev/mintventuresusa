import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import { siteConfig } from '@/config/site'

export default function Contact() {
  return (
    <>
      <section className="bg-gradient-to-b from-white to-gray-50 py-16">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600">
              Ready to improve your business operations? We&apos;re here to help.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                Contact Information
              </h2>

              <div className="mb-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-gray-900">
                      Address
                    </h3>
                    <p className="text-gray-600">{siteConfig.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">{siteConfig.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-gray-900">Email</h3>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-primary-600 hover:text-primary-700"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-gray-900">
                      Business Hours
                    </h3>
                    <p className="text-gray-600">{siteConfig.hours}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-primary-200 bg-primary-50 p-6">
                <h3 className="mb-2 font-semibold text-primary-900">
                  What to Expect
                </h3>
                <p className="text-sm text-primary-800">
                  When you reach out, we&apos;ll schedule a discovery call to
                  learn about your business and discuss how we can help. Most
                  consultations can be arranged within a few business days.
                </p>
              </div>
            </div>

            <div>
              <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
