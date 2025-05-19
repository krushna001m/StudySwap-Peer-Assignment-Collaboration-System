import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Upload, MessageSquare, Star, CheckCircle, Shield } from "lucide-react"

export default function HowItWorksPage() {
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
            <Link href="/how-it-works" className="text-sm font-medium text-purple-600">
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
      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-purple-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  How StudySwap Works
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Our platform connects students who need help with assignments to peers who can provide guidance and
                  support.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:gap-24">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-purple-100 p-3">
                    <Upload className="h-6 w-6 text-purple-600" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">1. Request Help</h2>
                  <p className="text-gray-500 md:text-xl/relaxed">
                    Students who need assistance create a detailed request, specifying the subject, deadline, and type
                    of help needed. Upload relevant files to provide context.
                  </p>
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle>New Assignment Request</CardTitle>
                    <CardDescription>Fill out the details to get help from peers</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="h-4 w-full bg-gray-100 rounded"></div>
                      <div className="h-4 w-3/4 bg-gray-100 rounded"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="h-4 w-full bg-gray-100 rounded"></div>
                        <div className="h-8 w-full bg-gray-100 rounded"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-4 w-full bg-gray-100 rounded"></div>
                        <div className="h-8 w-full bg-gray-100 rounded"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-4 w-full bg-gray-100 rounded"></div>
                      <div className="h-24 w-full bg-gray-100 rounded"></div>
                    </div>
                    <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center">
                      <Upload className="h-8 w-8 text-gray-400 mb-2" />
                      <p className="text-sm text-gray-500">Upload assignment files</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <Card className="lg:order-last">
                  <CardHeader>
                    <CardTitle>Browse Assignment Requests</CardTitle>
                    <CardDescription>Find assignments where you can help</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="h-10 w-full bg-gray-100 rounded"></div>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="border rounded-md p-4 space-y-2">
                        <div className="h-4 w-1/4 bg-purple-100 rounded"></div>
                        <div className="h-4 w-3/4 bg-gray-100 rounded"></div>
                        <div className="h-4 w-1/2 bg-gray-100 rounded"></div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-gray-400" />
                          <div className="h-4 w-1/3 bg-gray-100 rounded"></div>
                        </div>
                      </div>
                      <div className="border rounded-md p-4 space-y-2">
                        <div className="h-4 w-1/4 bg-purple-100 rounded"></div>
                        <div className="h-4 w-3/4 bg-gray-100 rounded"></div>
                        <div className="h-4 w-1/2 bg-gray-100 rounded"></div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-gray-400" />
                          <div className="h-4 w-1/3 bg-gray-100 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-purple-100 p-3">
                    <MessageSquare className="h-6 w-6 text-purple-600" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">2. Connect with Helpers</h2>
                  <p className="text-gray-500 md:text-xl/relaxed">
                    Knowledgeable peers browse available requests and offer to help with assignments they're familiar
                    with. They can provide guidance, feedback, or explanations.
                  </p>
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-purple-100 p-3">
                    <CheckCircle className="h-6 w-6 text-purple-600" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">3. Collaborate and Learn</h2>
                  <p className="text-gray-500 md:text-xl/relaxed">
                    Helpers provide assistance through comments, explanations, and guidance. Requesters can ask
                    follow-up questions to ensure they understand the concepts.
                  </p>
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle>Assignment Collaboration</CardTitle>
                    <CardDescription>Work together to solve problems</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="border rounded-md p-4 bg-gray-50">
                      <div className="flex items-start space-x-3">
                        <div className="h-8 w-8 bg-purple-100 rounded-full"></div>
                        <div className="space-y-2 flex-1">
                          <div className="h-4 w-1/4 bg-gray-200 rounded"></div>
                          <div className="h-4 w-full bg-gray-200 rounded"></div>
                          <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                        </div>
                      </div>
                    </div>
                    <div className="border rounded-md p-4 bg-purple-50">
                      <div className="flex items-start space-x-3">
                        <div className="h-8 w-8 bg-purple-200 rounded-full"></div>
                        <div className="space-y-2 flex-1">
                          <div className="h-4 w-1/4 bg-purple-200 rounded"></div>
                          <div className="h-4 w-full bg-purple-200 rounded"></div>
                          <div className="h-4 w-3/4 bg-purple-200 rounded"></div>
                          <div className="h-4 w-1/2 bg-purple-200 rounded"></div>
                        </div>
                      </div>
                    </div>
                    <div className="border rounded-md p-4 bg-gray-50">
                      <div className="flex items-start space-x-3">
                        <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
                        <div className="space-y-2 flex-1">
                          <div className="h-4 w-1/4 bg-gray-200 rounded"></div>
                          <div className="h-4 w-full bg-gray-200 rounded"></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="h-10 flex-1 bg-gray-100 rounded"></div>
                      <div className="h-10 w-10 bg-purple-600 rounded"></div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <Card className="lg:order-last">
                  <CardHeader>
                    <CardTitle>Rate Your Experience</CardTitle>
                    <CardDescription>Provide feedback on the help received</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-8 w-8 text-amber-400" fill="currentColor" />
                      ))}
                    </div>
                    <div className="space-y-2">
                      <div className="h-4 w-full bg-gray-100 rounded"></div>
                      <div className="h-24 w-full bg-gray-100 rounded"></div>
                    </div>
                    <div className="flex justify-end">
                      <div className="h-10 w-1/4 bg-purple-600 rounded"></div>
                    </div>
                  </CardContent>
                </Card>
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-purple-100 p-3">
                    <Star className="h-6 w-6 text-purple-600" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">4. Rate and Build Reputation</h2>
                  <p className="text-gray-500 md:text-xl/relaxed">
                    After receiving help, requesters rate their helpers based on the quality of assistance. Helpers
                    build a reputation that showcases their expertise and reliability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-purple-100 p-3">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Academic Integrity</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  StudySwap is designed to promote ethical collaboration and learning
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Guidance, Not Cheating</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Our platform encourages helpers to provide explanations and guidance rather than complete solutions.
                    The focus is on helping peers understand concepts.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Clear Guidelines</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    All users agree to follow academic integrity policies. We provide clear guidelines on what
                    constitutes appropriate help versus academic dishonesty.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Learning Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    StudySwap aims to build a community where students help each other learn and grow academically,
                    fostering collaboration and knowledge sharing.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Join StudySwap today to connect with peers and transform your learning experience.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/signup?role=requester">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                    Request Help
                  </Button>
                </Link>
                <Link href="/signup?role=helper">
                  <Button size="lg" variant="outline">
                    Become a Helper
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
            © 2025 StudySwap. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function Clock({ className = "", ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}
