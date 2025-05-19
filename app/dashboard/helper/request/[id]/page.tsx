"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Clock, Download, MessageSquare, Send, AlertCircle } from "lucide-react"
import DashboardLayout from "@/components/dashboard-layout"

// Mock data for the assignment
const assignmentDetails = {
  id: 1,
  title: "Calculus II: Integration Techniques",
  subject: "Mathematics",
  deadline: "May 25, 2025",
  requester: {
    name: "Alex Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4.8,
    completedRequests: 12,
  },
  requestDate: "May 15, 2025",
  description: `I'm struggling with the following integration techniques:
  
1. Integration by parts
2. Trigonometric substitution
3. Partial fractions

I've attached my assignment sheet and my attempts so far. I'm particularly stuck on problems 3, 5, and 7. Any guidance or step-by-step explanations would be greatly appreciated.

The deadline is May 25th, but I'd like to get help as soon as possible so I have time to understand the concepts.`,
  attachments: [
    { name: "calculus_assignment.pdf", size: "1.2 MB" },
    { name: "my_attempts.pdf", size: "850 KB" },
  ],
}

export default function AssignmentRequestPage() {
  const params = useParams()
  const [offerHelp, setOfferHelp] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would handle the form submission
    window.location.href = "/dashboard/helper"
  }

  return (
    <DashboardLayout userRole="helper">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">{assignmentDetails.title}</h1>
          <div className="flex items-center gap-2 mt-1">
            <Badge variant="outline">{assignmentDetails.subject}</Badge>
            <span className="text-sm text-gray-500">Posted on {assignmentDetails.requestDate}</span>
          </div>
        </div>
        <Link href="/dashboard/helper">
          <Button variant="outline">Back to Dashboard</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Assignment Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="mr-2 h-4 w-4" />
                <span>Deadline: {assignmentDetails.deadline}</span>
              </div>

              <div className="prose max-w-none">
                <p className="whitespace-pre-line">{assignmentDetails.description}</p>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-medium">Attachments</h4>
                <div className="space-y-2">
                  {assignmentDetails.attachments.map((attachment, index) => (
                    <div key={index} className="flex items-center justify-between p-2 border rounded-md">
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 mr-2 text-gray-500" />
                        <span className="text-sm">{attachment.name}</span>
                        <span className="text-xs text-gray-500 ml-2">({attachment.size})</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {offerHelp ? (
            <Card>
              <CardHeader>
                <CardTitle>Offer Your Help</CardTitle>
                <CardDescription>Explain how you can help with this assignment</CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent>
                  <Textarea
                    placeholder="Describe how you can help with this assignment. Be specific about which parts you can assist with and your approach."
                    className="min-h-[150px]"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                  <div className="flex items-start space-x-2 text-sm mt-4">
                    <AlertCircle className="h-4 w-4 text-amber-500 mt-0.5" />
                    <p className="text-gray-500">
                      Remember to follow academic integrity guidelines. Provide guidance and explanations, not just
                      answers.
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button type="button" variant="outline" onClick={() => setOfferHelp(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
                    <Send className="mr-2 h-4 w-4" />
                    Send Offer
                  </Button>
                </CardFooter>
              </form>
            </Card>
          ) : (
            <div className="flex justify-center">
              <Button className="bg-purple-600 hover:bg-purple-700" onClick={() => setOfferHelp(true)}>
                <MessageSquare className="mr-2 h-4 w-4" />
                Offer to Help
              </Button>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Requester</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage
                    src={assignmentDetails.requester.avatar || "/placeholder.svg"}
                    alt={assignmentDetails.requester.name}
                  />
                  <AvatarFallback>AJ</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{assignmentDetails.requester.name}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Star className="h-4 w-4 text-amber-500 mr-1" />
                    <span>{assignmentDetails.requester.rating} rating</span>
                  </div>
                  <p className="text-sm text-gray-500">
                    {assignmentDetails.requester.completedRequests} completed requests
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Similar Assignments</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Link href="#" className="block hover:bg-gray-50 p-2 rounded-md">
                  <p className="font-medium text-sm">Calculus: Definite Integrals</p>
                  <p className="text-xs text-gray-500">Mathematics • Due May 28</p>
                </Link>
                <Link href="#" className="block hover:bg-gray-50 p-2 rounded-md">
                  <p className="font-medium text-sm">Calculus: Applications of Integration</p>
                  <p className="text-xs text-gray-500">Mathematics • Due June 2</p>
                </Link>
                <Link href="#" className="block hover:bg-gray-50 p-2 rounded-md">
                  <p className="font-medium text-sm">Advanced Calculus: Series and Sequences</p>
                  <p className="text-xs text-gray-500">Mathematics • Due May 30</p>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}

function Star({ className = "", ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function FileText({ className = "", ...props }) {
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
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <line x1="10" y1="9" x2="8" y2="9" />
    </svg>
  )
}
