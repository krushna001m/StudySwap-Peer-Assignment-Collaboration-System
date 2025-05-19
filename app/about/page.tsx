import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Award, BookMarked, GraduationCap, Heart } from "lucide-react"

export default function AboutPage() {
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
            <Link href="/about" className="text-sm font-medium text-purple-600">
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
                  About StudySwap
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Our mission is to create a collaborative learning environment where students help each other succeed
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-purple-100 p-3">
                  <BookMarked className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Story</h2>
                <div className="space-y-4 text-gray-500 md:text-xl/relaxed">
                  <p>
                    StudySwap was born from a simple observation: students often learn best from their peers, yet
                    finding the right peer support can be challenging.
                  </p>
                  <p>
                    Founded in 2025 by a group of university students, StudySwap aims to bridge this gap by creating a
                    platform where students can connect with peers who have the knowledge and skills they need.
                  </p>
                  <p>
                    What started as a small campus project has grown into a community of learners helping each other
                    navigate academic challenges, deepen their understanding, and achieve their educational goals.
                  </p>
                </div>
              </div>
              <Card>
                <CardContent className="p-6">
                  <div className="aspect-video relative overflow-hidden rounded-lg bg-purple-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <GraduationCap className="h-24 w-24 text-purple-300" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Values</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  The principles that guide everything we do
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="rounded-full bg-purple-100 p-3">
                      <Users className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold">Collaborative Learning</h3>
                    <p className="text-gray-500">
                      We believe in the power of peer-to-peer learning and the unique value that students can provide to
                      one another.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="rounded-full bg-purple-100 p-3">
                      <Shield className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold">Academic Integrity</h3>
                    <p className="text-gray-500">
                      We promote ethical collaboration that helps students learn and understand, not just complete
                      assignments.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="rounded-full bg-purple-100 p-3">
                      <Award className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold">Recognition of Expertise</h3>
                    <p className="text-gray-500">
                      We value and recognize the knowledge and skills that students develop throughout their academic
                      journey.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet Our Team</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  The passionate individuals behind StudySwap
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  name: "Alex Chen",
                  role: "Co-Founder & CEO",
                  bio: "Computer Science graduate with a passion for educational technology.",
                },
                {
                  name: "Maya Patel",
                  role: "Co-Founder & CTO",
                  bio: "Software engineer focused on creating intuitive learning platforms.",
                },
                {
                  name: "Jordan Taylor",
                  role: "Head of Community",
                  bio: "Education specialist dedicated to fostering collaborative learning environments.",
                },
                {
                  name: "Sam Rodriguez",
                  role: "Academic Integrity Officer",
                  bio: "Former teaching assistant committed to ethical academic practices.",
                },
              ].map((member, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="h-24 w-24 rounded-full bg-gray-100 flex items-center justify-center">
                        <User className="h-12 w-12 text-gray-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">{member.name}</h3>
                        <p className="text-sm text-purple-600">{member.role}</p>
                      </div>
                      <p className="text-sm text-gray-500">{member.bio}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32 bg-purple-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-purple-100 p-3">
                <Heart className="h-6 w-6 text-purple-600" />
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Our Community</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Be part of a growing network of students helping students
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/signup">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                    Sign Up Now
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    Contact Us
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

function User({ className = "", ...props }) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

function Shield({ className = "", ...props }) {
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
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}
