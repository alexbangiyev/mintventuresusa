import { Link } from 'react-router-dom'
import { siteConfig } from '@/config/site'

export default function Terms() {
  const lastUpdated = 'May 28, 2026'

  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Terms of Service
          </h1>
          <p className="mb-8 text-gray-600">Last updated: {lastUpdated}</p>

          <div className="prose prose-lg max-w-none">
            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
              Agreement to Terms
            </h2>
            <p className="mb-4 text-gray-700">
              These Terms of Service (&ldquo;Terms&rdquo;) govern your access to
              and use of the services provided by {siteConfig.name} (
              &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By
              accessing our website or using our services, you agree to be bound
              by these Terms. If you do not agree to these Terms, please do not
              use our services.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
              Services Description
            </h2>
            <p className="mb-4 text-gray-700">
              {siteConfig.name} provides business operations and technology
              consulting services to small businesses, including but not limited
              to:
            </p>
            <ul className="mb-4 list-disc pl-6 text-gray-700">
              <li>Process optimization and workflow improvements</li>
              <li>Standard operating procedure (SOP) documentation</li>
              <li>Customer relationship management (CRM) setup and configuration</li>
              <li>Team onboarding and training support</li>
              <li>General business operations guidance</li>
            </ul>
            <p className="mb-4 text-gray-700">
              All services are customized based on client needs and are provided
              on a consulting basis.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
              No Guarantees
            </h2>
            <div className="mb-4 rounded-lg border-2 border-yellow-200 bg-yellow-50 p-6">
              <p className="font-semibold text-gray-900">Important Notice:</p>
              <p className="mt-2 text-gray-800">
                Our consulting services are designed to help improve business
                operations and efficiency. However, we make no guarantees about
                specific outcomes, financial results, or business performance.
                Results vary based on numerous factors including implementation,
                market conditions, and individual business circumstances. Past
                performance of our services does not guarantee future results.
              </p>
            </div>

            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
              Client Responsibilities
            </h2>
            <p className="mb-4 text-gray-700">As a client, you agree to:</p>
            <ul className="mb-4 list-disc pl-6 text-gray-700">
              <li>
                Provide accurate and complete information necessary for service
                delivery
              </li>
              <li>
                Cooperate with us in a timely manner to facilitate service
                delivery
              </li>
              <li>
                Implement recommendations at your own discretion and risk
              </li>
              <li>
                Comply with all applicable laws and regulations in your business
                operations
              </li>
              <li>
                Maintain confidentiality of any proprietary information we share
              </li>
            </ul>

            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
              Limitation of Liability
            </h2>
            <p className="mb-4 text-gray-700">
              To the maximum extent permitted by law, {siteConfig.name} shall
              not be liable for any indirect, incidental, special, consequential,
              or punitive damages, or any loss of profits or revenues, whether
              incurred directly or indirectly, or any loss of data, use,
              goodwill, or other intangible losses resulting from:
            </p>
            <ul className="mb-4 list-disc pl-6 text-gray-700">
              <li>Your use or inability to use our services</li>
              <li>
                Any conduct or content of any third party related to our services
              </li>
              <li>Unauthorized access to or alteration of your data</li>
              <li>
                Implementation or non-implementation of our recommendations
              </li>
            </ul>
            <p className="mb-4 text-gray-700">
              Our total liability for any claims arising out of or related to
              these Terms or our services shall not exceed the amount you paid us
              for services in the twelve (12) months preceding the claim.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
              Acceptable Use
            </h2>
            <p className="mb-4 text-gray-700">
              You agree not to use our services:
            </p>
            <ul className="mb-4 list-disc pl-6 text-gray-700">
              <li>
                In any way that violates any applicable federal, state, local, or
                international law or regulation
              </li>
              <li>
                To transmit any harassing, threatening, defamatory, or otherwise
                objectionable material
              </li>
              <li>
                To impersonate or attempt to impersonate {siteConfig.name} or
                our employees
              </li>
              <li>
                In any way that could disable, overburden, or impair our website
                or services
              </li>
            </ul>

            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
              Intellectual Property
            </h2>
            <p className="mb-4 text-gray-700">
              All materials, content, and intellectual property provided by{' '}
              {siteConfig.name} as part of our services remain our property
              unless otherwise specified in writing. You may not reproduce,
              distribute, modify, or create derivative works from our proprietary
              materials without express written permission.
            </p>
            <p className="mb-4 text-gray-700">
              Any customized materials, processes, or documentation created
              specifically for your business as part of our engagement become
              your property upon full payment for services.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
              Confidentiality
            </h2>
            <p className="mb-4 text-gray-700">
              We understand that we may have access to confidential information
              about your business. We agree to maintain the confidentiality of
              such information and will not disclose it to third parties without
              your consent, except as required by law or necessary to provide our
              services.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
              Termination
            </h2>
            <p className="mb-4 text-gray-700">
              Either party may terminate the service relationship at any time
              with written notice. Upon termination:
            </p>
            <ul className="mb-4 list-disc pl-6 text-gray-700">
              <li>
                You remain responsible for payment for services rendered up to
                the termination date
              </li>
              <li>
                We will provide any deliverables completed up to the termination
                date
              </li>
              <li>
                Both parties will return or destroy confidential information as
                appropriate
              </li>
            </ul>

            <h2
              id="sms-messaging"
              className="mb-4 mt-8 text-2xl font-bold text-gray-900"
            >
              SMS Messaging Terms
            </h2>
            <p className="mb-4 text-gray-700">
              If you opt in to receive SMS messages from {siteConfig.name}, the
              following terms apply:
            </p>

            <h3 className="mb-3 mt-6 text-xl font-semibold text-gray-900">
              Eligibility
            </h3>
            <p className="mb-4 text-gray-700">
              You must be 18 years of age or older to use this SMS service.
            </p>

            <h3 className="mb-3 mt-6 text-xl font-semibold text-gray-900">
              Program Name
            </h3>
            <p className="mb-4 text-gray-700">
              Mint Ventures SMS Notifications
            </p>

            <h3 className="mb-3 mt-6 text-xl font-semibold text-gray-900">
              Program Description
            </h3>
            <p className="mb-4 text-gray-700">
              By opting in, you agree to receive both transactional and marketing text messages, including:
            </p>
            <ul className="mb-4 list-disc pl-6 text-gray-700">
              <li>
                <strong>Transactional messages:</strong> Appointment reminders, booking confirmations, notifications about
                scheduled consultations and meetings, and account-related updates
              </li>
              <li>
                <strong>Marketing messages:</strong> Promotional offers, service announcements, tips and resources, and other marketing communications (only with your explicit consent)
              </li>
              <li>
                <strong>Service updates:</strong> Information about ongoing
                projects and service delivery
              </li>
              <li>
                <strong>Support messages:</strong> Responses to your inquiries
                and support requests
              </li>
            </ul>

            <h3 className="mb-3 mt-6 text-xl font-semibold text-gray-900">
              Message Frequency & Rates
            </h3>
            <p className="mb-4 text-gray-700">
              Message frequency varies depending on your engagement with our
              services. Message and data rates may apply based on your mobile
              carrier plan. We are not responsible for any charges you incur from
              your mobile carrier. Carriers are not liable for delayed or
              undelivered messages.
            </p>

            <h3 className="mb-3 mt-6 text-xl font-semibold text-gray-900">
              How to Opt Out & Get Help
            </h3>
            <div className="mb-4 rounded-lg border-2 border-primary-200 bg-primary-50 p-6">
              <p className="mb-3 text-gray-800">
                <strong>To unsubscribe:</strong> Reply <strong>STOP</strong> to
                any SMS message you receive from us. You will receive a
                confirmation message and will no longer receive marketing SMS messages from{' '}
                {siteConfig.name}. Please note that you may still receive transactional messages related to your active service engagements, such as appointment confirmations and important account notifications.
              </p>
              <p className="text-gray-800">
                <strong>For help:</strong> Reply <strong>HELP</strong> to any SMS
                message, or contact us directly using the information at the
                bottom of this page.
              </p>
            </div>

            <h3 className="mb-3 mt-6 text-xl font-semibold text-gray-900">
              Consent Information
            </h3>
            <div className="mb-4 rounded-lg border-2 border-green-200 bg-green-50 p-6">
              <p className="font-semibold text-gray-900">Important:</p>
              <p className="mt-2 text-gray-800">
                Consent is not a condition of purchase. You do not have to opt in
                to SMS messaging to use our consulting services. You may still
                contact us and receive our services through other communication
                methods such as email and phone calls.
              </p>
            </div>

            <h3 className="mb-3 mt-6 text-xl font-semibold text-gray-900">
              Privacy and Data Use
            </h3>
            <p className="mb-4 text-gray-700">
              We respect your privacy and handle your mobile phone number in
              accordance with our{' '}
              <Link to="/privacy" className="text-primary-600 hover:underline">
                Privacy Policy
              </Link>
              . Your mobile number will only be used to send you the messages you
              have requested and will not be shared with third parties for
              marketing purposes. By providing your mobile phone number and opting
              in, you certify that you are the account holder or have the account
              holder&apos;s permission to opt in.
            </p>

            <h3 className="mb-3 mt-6 text-xl font-semibold text-gray-900">
              Supported Carriers
            </h3>
            <p className="mb-4 text-gray-700">
              Our SMS program is supported by major carriers including AT&T,
              T-Mobile, Verizon, Sprint, and others. If you experience any issues
              receiving messages, please contact us.
            </p>

            <div className="mb-6 rounded-lg border-2 border-gray-300 bg-gray-50 p-6">
              <h4 className="mb-2 text-lg font-semibold text-gray-900">
                SMS Quick Reference
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>To opt out:</strong> Reply STOP
                </li>
                <li>
                  <strong>For help:</strong> Reply HELP
                </li>
                <li>
                  <strong>Message frequency:</strong> Varies
                </li>
                <li>
                  <strong>Rates:</strong> Message & data rates may apply
                </li>
              </ul>
            </div>

            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
              Modifications to Terms
            </h2>
            <p className="mb-4 text-gray-700">
              We reserve the right to modify these Terms at any time. We will
              notify you of any changes by posting the updated Terms on our
              website and updating the &ldquo;Last updated&rdquo; date. Your
              continued use of our services after such changes constitutes your
              acceptance of the new Terms.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
              Governing Law
            </h2>
            <p className="mb-4 text-gray-700">
              These Terms shall be governed by and construed in accordance with
              the laws of the State of Wyoming, United States of America, without
              regard to its conflict of law provisions. Any legal action or
              proceeding arising under these Terms will be brought exclusively in
              the courts located in Wyoming.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
              Entire Agreement
            </h2>
            <p className="mb-4 text-gray-700">
              These Terms, together with our Privacy Policy and any written
              service agreements, constitute the entire agreement between you and{' '}
              {siteConfig.name} regarding our services and supersede all prior
              agreements and understandings.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
              Contact Information
            </h2>
            <p className="mb-2 text-gray-700">
              If you have any questions about these Terms, please contact us:
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
