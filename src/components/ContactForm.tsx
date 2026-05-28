import { useState, FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { siteConfig } from '@/config/site'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  message: string
  smsConsent: boolean
  emailConsent: boolean
}

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  company?: string
  message?: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    smsConsent: false,
    emailConsent: false,
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (formData.smsConsent && !formData.phone.trim()) {
      newErrors.phone = 'Phone number is required when opting in to SMS'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log('Form submitted:', formData)

    setIsSuccess(true)
    setIsSubmitting(false)

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      smsConsent: false,
      emailConsent: false,
    })
  }

  if (isSuccess) {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <svg
            className="h-6 w-6 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="mb-2 text-xl font-semibold text-gray-900">
          Thank you for your message!
        </h3>
        <p className="mb-6 text-gray-600">
          We&apos;ll get back to you as soon as possible.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="btn-primary"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="firstName"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            className={`input-field ${errors.firstName ? 'input-error' : ''}`}
            aria-invalid={!!errors.firstName}
            aria-describedby={errors.firstName ? 'firstName-error' : undefined}
          />
          {errors.firstName && (
            <p id="firstName-error" className="mt-1 text-sm text-red-600">
              {errors.firstName}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            className={`input-field ${errors.lastName ? 'input-error' : ''}`}
            aria-invalid={!!errors.lastName}
            aria-describedby={errors.lastName ? 'lastName-error' : undefined}
          />
          {errors.lastName && (
            <p id="lastName-error" className="mt-1 text-sm text-red-600">
              {errors.lastName}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={`input-field ${errors.email ? 'input-error' : ''}`}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-600">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="phone"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          Phone {formData.smsConsent && <span className="text-red-500">*</span>}
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className={`input-field ${errors.phone ? 'input-error' : ''}`}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className="mt-1 text-sm text-red-600">
            {errors.phone}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="company"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          Company Name
        </label>
        <input
          type="text"
          id="company"
          value={formData.company}
          onChange={(e) =>
            setFormData({ ...formData, company: e.target.value })
          }
          className="input-field"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className={`input-field ${errors.message ? 'input-error' : ''}`}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      <div className="space-y-4 rounded-lg border border-gray-200 bg-gray-50 p-4">
        <div className="flex items-start">
          <input
            type="checkbox"
            id="smsConsent"
            checked={formData.smsConsent}
            onChange={(e) =>
              setFormData({ ...formData, smsConsent: e.target.checked })
            }
            className="mt-1 h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-2 focus:ring-primary-500"
          />
          <label htmlFor="smsConsent" className="ml-3 text-sm text-gray-700">
            I consent to receive SMS Notifications and Alerts from {siteConfig.name}. Message frequency varies. Message & data rates may apply.
            Text HELP to {siteConfig.phone} for Help.
            You can reply STOP to unsubscribe at any time.
          </label>
        </div>

        <div className="flex items-start">
          <input
            type="checkbox"
            id="emailConsent"
            checked={formData.emailConsent}
            onChange={(e) =>
              setFormData({ ...formData, emailConsent: e.target.checked })
            }
            className="mt-1 h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-2 focus:ring-primary-500"
          />
          <label htmlFor="emailConsent" className="ml-3 text-sm text-gray-700">
            By checking this box, I agree to receive occasional marketing messages from {siteConfig.name}.
          </label>
        </div>
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full disabled:opacity-50"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
        <p className="mt-3 text-center text-sm text-gray-600">
          <Link to="/privacy" className="text-primary-600 hover:underline">
            Privacy Policy
          </Link>
          {' | '}
          <Link to="/terms" className="text-primary-600 hover:underline">
            Terms of Service
          </Link>
        </p>
      </div>
    </form>
  )
}
