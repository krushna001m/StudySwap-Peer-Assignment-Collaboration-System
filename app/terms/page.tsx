import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen } from "lucide-react"

export default function TermsPage() {
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
          <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
          <div className="prose max-w-none">
            <p className="text-gray-500 mb-6">Last updated: May 19, 2025</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p>
              Welcome to StudySwap. These Terms of Service ("Terms") govern your access to and use of the StudySwap
              platform, including any content, functionality, and services offered on or through studyswap.com (the
              "Service").
            </p>
            <p>
              By registering with us or by using our Service, you agree to be bound by these Terms. If you disagree with
              any part of the terms, you may not access the Service.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">2. Academic Integrity</h2>
            <p>
              StudySwap is designed to facilitate peer-to-peer learning and collaboration. Users are expected to adhere
              to the following academic integrity guidelines:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Helpers should provide guidance, explanations, and support that helps requesters understand concepts and
                develop their own solutions.
              </li>
              <li>
                Requesters should not use StudySwap to circumvent academic requirements or to submit work that is not
                their own.
              </li>
              <li>
                All users must comply with their educational institution's academic integrity policies and honor codes.
              </li>
              <li>
                StudySwap reserves the right to remove content or suspend accounts that violate academic integrity
                principles.
              </li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">3. User Accounts</h2>
            <p>
              When you create an account with us, you must provide information that is accurate, complete, and current
              at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate
              termination of your account on our Service.
            </p>
            <p>
              You are responsible for safeguarding the password that you use to access the Service and for any
              activities or actions under your password.
            </p>
            <p>
              You agree not to disclose your password to any third party. You must notify us immediately upon becoming
              aware of any breach of security or unauthorized use of your account.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">4. User Content</h2>
            <p>
              Our Service allows you to post, link, store, share and otherwise make available certain information, text,
              graphics, or other material ("Content"). You are responsible for the Content that you post on or through
              the Service, including its legality, reliability, and appropriateness.
            </p>
            <p>
              By posting Content on or through the Service, you represent and warrant that: (i) the Content is yours
              (you own it) or you have the right to use it and grant us the rights and license as provided in these
              Terms, and (ii) the posting of your Content on or through the Service does not violate the privacy rights,
              publicity rights, copyrights, contract rights or any other rights of any person.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">5. Prohibited Uses</h2>
            <p>You agree not to use the Service:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>In any way that violates any applicable national or international law or regulation.</li>
              <li>
                To transmit, or procure the sending of, any advertising or promotional material, including any "junk
                mail", "chain letter," "spam," or any other similar solicitation.
              </li>
              <li>
                To impersonate or attempt to impersonate StudySwap, a StudySwap employee, another user, or any other
                person or entity.
              </li>
              <li>
                To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service, or
                which, as determined by us, may harm StudySwap or users of the Service or expose them to liability.
              </li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">6. Termination</h2>
            <p>
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason
              whatsoever, including without limitation if you breach the Terms.
            </p>
            <p>
              Upon termination, your right to use the Service will immediately cease. If you wish to terminate your
              account, you may simply discontinue using the Service or delete your account through the settings page.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">7. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision
              is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
            </p>
            <p>
              By continuing to access or use our Service after those revisions become effective, you agree to be bound
              by the revised terms. If you do not agree to the new terms, please stop using the Service.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">8. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at{" "}
              <a href="mailto:support@studyswap.com" className="text-purple-600 hover:underline">
                support@studyswap.com
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
            <Link href="/terms" className="text-purple-600">
              Terms
            </Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
