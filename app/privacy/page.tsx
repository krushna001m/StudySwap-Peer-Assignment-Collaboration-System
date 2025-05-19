import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-purple-600" />
              <span className="text-xl font-bold">StudySwap</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium">
              Home
            </Link>
            <Link href="/how-it-works" className="text-sm font-medium">
              How It Works
            </Link>
            <Link href="/about" className="text-sm font-medium">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline">Log In</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          <div className="prose max-w-none">
            <p className="text-gray-500 mb-6">Last updated: May 19, 2025</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p>
              StudySwap ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how
              we collect, use, disclose, and safeguard your information when you use our platform.
            </p>
            <p>
              Please read this Privacy Policy carefully. By accessing or using the StudySwap platform, you acknowledge
              that you have read, understood, and agree to be bound by all the terms of this Privacy Policy.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Personal Information:</strong> Name, email address, educational institution, field of study, and
                profile picture.
              </li>
              <li>
                <strong>Account Information:</strong> Username, password, and account preferences.
              </li>
              <li>
                <strong>Content:</strong> Information you provide when creating assignment requests, offering help, or
                communicating with other users.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you use our platform, including log data, device
                information, and analytics.
              </li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
            <p>We use the information we collect for various purposes, including to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve the StudySwap platform</li>
              <li>Process and complete transactions</li>
              <li>Send you technical notices, updates, and administrative messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Match requesters with appropriate helpers based on skills and expertise</li>
              <li>Monitor and analyze trends, usage, and activities in connection with our platform</li>
              <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
              <li>Personalize your experience on the platform</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">4. Sharing Your Information</h2>
            <p>We may share your information in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>With Other Users:</strong> When you create a request or offer help, certain information from
                your profile may be visible to other users.
              </li>
              <li>
                <strong>With Service Providers:</strong> We may share your information with third-party vendors who
                provide services on our behalf.
              </li>
              <li>
                <strong>For Legal Reasons:</strong> We may disclose your information if required to do so by law or in
                response to valid requests by public authorities.
              </li>
              <li>
                <strong>With Your Consent:</strong> We may share your information with your consent or at your
                direction.
              </li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect the security of your personal
              information. However, please be aware that no method of transmission over the Internet or method of
              electronic storage is 100% secure.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">6. Your Privacy Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The right to access and receive a copy of your personal information</li>
              <li>The right to rectify or update your personal information</li>
              <li>The right to delete your personal information</li>
              <li>The right to restrict or object to our processing of your personal information</li>
              <li>The right to data portability</li>
            </ul>
            <p>
              To exercise these rights, please contact us at{" "}
              <a href="mailto:privacy@studyswap.com" className="text-purple-600 hover:underline">
                privacy@studyswap.com
              </a>
              .
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">7. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy
              are effective when they are posted on this page.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:privacy@studyswap.com" className="text-purple-600 hover:underline">
                privacy@studyswap.com
              </a>
              .
            </p>
          </div>
        </div>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
            © 2025 StudySwap. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <Link href="/terms">Terms</Link>
            <Link href="/privacy" className="text-purple-600">
              Privacy
            </Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
