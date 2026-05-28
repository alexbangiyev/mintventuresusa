import { siteConfig } from '@/config/site'

export default function Privacy() {
  const lastUpdated = 'May 28, 2026'

  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Privacy Policy
          </h1>
          <p className="mb-8 text-gray-600">Last updated: {lastUpdated}</p>

          <div className="prose prose-lg max-w-none">
            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
              Introduction
            </h2>
            <p className="mb-4 text-gray-700">
              {siteConfig.name} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;) respects your privacy and is committed to
              protecting your personal information. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when
              you visit our website or use our services.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
              Information We Collect
            </h2>
            <p className="mb-4 text-gray-700">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="mb-4 list-disc pl-6 text-gray-700">
              <li>Name (first and last)</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name</li>
              <li>Message content</li>
              <li>
                Communication preferences (SMS consent and email consent flags)
              </li>
            </ul>

            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
              How We Use Your Information
            </h2>
            <p className="mb-4 text-gray-700">
              We use the information we collect for the following purposes:
            </p>
            <ul className="mb-4 list-disc pl-6 text-gray-700">
              <li>To respond to your inquiries and provide customer support</li>
              <li>To schedule and manage consultation appointments</li>
              <li>To deliver our consulting services</li>
              <li>
                To send service-related communications, including appointment
                reminders and updates
              </li>
              <li>
                To send marketing communications (only with your explicit
                consent)
              </li>
              <li>To improve our website and services</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
              SMS Communications
            </h2>
            <p className="mb-4 text-gray-700">
              If you opt in to receive SMS messages from us, we will send you both transactional and marketing messages, including:
            </p>
            <ul className="mb-4 list-disc pl-6 text-gray-700">
              <li>
                <strong>Transactional messages:</strong> Appointment reminders, booking confirmations, service updates, and account notifications
              </li>
              <li>
                <strong>Marketing messages:</strong> Promotional offers, service announcements, tips and resources, and other marketing communications (only with your explicit consent)
              </li>
              <li>
                <strong>Support messages:</strong> Responses to your inquiries and customer support communications
              </li>
            </ul>
            <p className="mb-4 text-gray-700">
              Message frequency varies. Message and data rates may apply. You
              can opt out of marketing messages at any time by replying STOP to any SMS message. Reply
              HELP for assistance. Note that opting out will stop marketing messages but you may still receive transactional messages related to your active service engagements.
            </p>
            <div className="mb-4 rounded-lg border-2 border-primary-200 bg-primary-50 p-6">
              <p className="font-semibold text-gray-900">
                Important SMS Privacy Statement:
              </p>
              <p className="mt-2 text-gray-800">
                No mobile information will be shared with third
                parties/affiliates for marketing/promotional purposes.
                Information sharing to subcontractors in support services, such
                as customer service, is permitted.
              </p>
            </div>

            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
              Cookies and Analytics
            </h2>
            <p className="mb-4 text-gray-700">
              We may use cookies and similar tracking technologies to collect
              information about your browsing activities. This helps us improve
              our website and understand how visitors use our services. You can
              control cookies through your browser settings.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
              Data Retention and Security
            </h2>
            <p className="mb-4 text-gray-700">
              We retain your personal information for as long as necessary to
              fulfill the purposes outlined in this Privacy Policy, unless a
              longer retention period is required or permitted by law. We
              implement reasonable security measures to protect your information
              from unauthorized access, disclosure, alteration, or destruction.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
              Information Sharing
            </h2>
            <p className="mb-4 text-gray-700">
              We do not sell, trade, or rent your personal information to third
              parties. We may share your information with:
            </p>
            <ul className="mb-4 list-disc pl-6 text-gray-700">
              <li>
                Service providers who assist us in operating our business and
                delivering services
              </li>
              <li>
                Professional advisors such as lawyers and accountants when
                necessary
              </li>
              <li>
                Law enforcement or regulatory authorities when required by law
              </li>
            </ul>

            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
              Your Rights
            </h2>
            <p className="mb-4 text-gray-700">You have the right to:</p>
            <ul className="mb-4 list-disc pl-6 text-gray-700">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>
                Opt out of marketing communications at any time (including SMS
                and email)
              </li>
              <li>Lodge a complaint with a data protection authority</li>
            </ul>

            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
              Children&apos;s Privacy
            </h2>
            <p className="mb-4 text-gray-700">
              Our services are not directed to individuals under the age of 18.
              We do not knowingly collect personal information from children
              under 18.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
              Changes to This Privacy Policy
            </h2>
            <p className="mb-4 text-gray-700">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the &ldquo;Last updated&rdquo; date.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
              Contact Us
            </h2>
            <p className="mb-2 text-gray-700">
              If you have any questions about this Privacy Policy or our privacy
              practices, please contact us:
            </p>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
              <p className="font-semibold text-gray-900">{siteConfig.name}</p>
              <p className="text-gray-700">{siteConfig.address}</p>
              <p className="text-gray-700">Email: {siteConfig.email}</p>
              <p className="text-gray-700">Phone: {siteConfig.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
