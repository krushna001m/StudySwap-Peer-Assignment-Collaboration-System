"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Clock, Download, MessageSquare, Star, Send, FileText } from "lucide-react"
import DashboardLayout from "@/components/dashboard-layout"

// Mock data for the assignment
const assignmentDetails = {
  id: 1,
  title: "Calculus II: Integration Techniques",
  subject: "Mathematics",
  deadline: "May 25, 2025",
  status: "active",
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
  helpers: [
    {
      id: 101,
      name: "Jamie Lee",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.9,
      completedHelps: 28,
      status: "accepted",
    },
    {
      id: 102,
      name: "Taylor Smith",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.7,
      completedHelps: 15,
      status: "pending",
    },
  ],
  messages: [
    {
      id: 1,
      sender: {
        id: 101,
        name: "Jamie Lee",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content:
        "Hi there! I've looked at your assignment and I can definitely help with integration techniques. I'm particularly strong with integration by parts and partial fractions.",
      timestamp: "May 16, 2025 • 2:34 PM",
    },
    {
      id: 2,
      sender: {
        id: "me",
        name: "You",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content:
        "That's great! I'm really struggling with problem #5 which involves partial fractions. Could you help me understand the approach?",
      timestamp: "May 16, 2025 • 3:15 PM",
    },
    {
      id: 3,
      sender: {
        id: 101,
        name: "Jamie Lee",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content:
        "For partial fractions, the key is to first factor the denominator completely. Then set up the partial fraction decomposition. Let me show you with problem #5...",
      timestamp: "May 16, 2025 • 3:42 PM",
    },
  ],
}

export default function RequestDetailPage() {
  const params = useParams()
  const [activeTab, setActiveTab] = useState("details")
  const [message, setMessage] = useState("")

  const handleSendMessage = (e) => {
    e.preventDefault()
    // In a real app, this would send the message
    setMessage("")
  }

  return (
    <DashboardLayout userRole="requester">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">{assignmentDetails.title}</h1>
          <div className="flex items-center gap-2 mt-1">
            <Badge variant="outline">{assignmentDetails.subject}</Badge>
            <Badge variant={assignmentDetails.status === "active" ? "outline" : "secondary"}>
              {assignmentDetails.status === "active" ? "Active" : "Completed"}
            </Badge>
          </div>
        </div>
        <Link href="/dashboard/requester">
          <Button variant="outline">Back to Dashboard</Button>
        </Link>
      </div>

      <Tabs defaultValue="details" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="details">Assignment Details</TabsTrigger>
          <TabsTrigger value="helpers">Helpers ({assignmentDetails.helpers.length})</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
        </TabsList>

        <TabsContent value="details" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Assignment Information</CardTitle>
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
            <CardFooter>
              <div className="flex space-x-2 w-full">
                <Button variant="outline" className="flex-1">
                  Edit Request
                </Button>
                <Button variant="outline" className="flex-1 text-red-500 hover:text-red-600 hover:bg-red-50">
                  Cancel Request
                </Button>
              </div>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Request Status</CardTitle>
              <CardDescription>Track the progress of your assignment request</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="rounded-full bg-green-100 p-2 mr-4">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Request Created</p>
                      <p className="text-sm text-gray-500">May 15, 2025</p>
                    </div>
                  </div>
                </div>
                <div className="ml-4 h-12 border-l-2 border-gray-200"></div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="rounded-full bg-green-100 p-2 mr-4">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Helpers Interested</p>
                      <p className="text-sm text-gray-500">2 helpers have offered assistance</p>
                    </div>
                  </div>
                </div>
                <div className="ml-4 h-12 border-l-2 border-gray-200"></div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="rounded-full bg-green-100 p-2 mr-4">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Helper Accepted</p>
                      <p className="text-sm text-gray-500">You're working with Jamie Lee</p>
                    </div>
                  </div>
                </div>
                <div className="ml-4 h-12 border-l-2 border-gray-200"></div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="rounded-full bg-gray-100 p-2 mr-4">
                      <Clock className="h-5 w-5 text-gray-400" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-500">Assignment Completed</p>
                      <p className="text-sm text-gray-500">Waiting for completion</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="helpers" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Helpers for Your Assignment</CardTitle>
              <CardDescription>
                These students have offered to help with your assignment. You can review their profiles and accept their
                offers.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {assignmentDetails.helpers.map((helper) => (
                <div key={helper.id} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <Avatar>
                        <AvatarImage src={helper.avatar || "/placeholder.svg"} alt={helper.name} />
                        <AvatarFallback>
                          {helper.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">{helper.name}</h3>
                        <div className="flex items-center text-sm text-gray-500">
                          <div className="flex text-amber-500 mr-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className="h-4 w-4"
                                fill={i < Math.floor(helper.rating) ? "currentColor" : "none"}
                              />
                            ))}
                          </div>
                          <span>{helper.rating} rating</span>
                        </div>
                        <p className="text-sm text-gray-500">Helped {helper.completedHelps} students</p>
                      </div>
                    </div>
                    <div>
                      {helper.status === "accepted" ? (
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Accepted</Badge>
                      ) : (
                        <div className="space-y-2">
                          <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700">
                            Accept
                          </Button>
                          <Button size="sm" variant="outline" className="w-full">
                            Decline
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                  {helper.status === "accepted" && (
                    <div className="mt-4 pt-4 border-t">
                      <Link href={`/dashboard/requester/request/${params.id}/messages/${helper.id}`}>
                        <Button variant="outline" className="w-full">
                          <MessageSquare className="mr-2 h-4 w-4" />
                          View Conversation
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="messages" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Messages</CardTitle>
              <CardDescription>Communicate with your helper about the assignment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-4">
                {assignmentDetails.messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender.id === "me" ? "justify-end" : "justify-start"}`}
                  >
                    <div className={`flex max-w-[80%] ${message.sender.id === "me" ? "flex-row-reverse" : "flex-row"}`}>
                      <Avatar className={`${message.sender.id === "me" ? "ml-4" : "mr-4"}`}>
                        <AvatarImage src={message.sender.avatar || "/placeholder.svg"} alt={message.sender.name} />
                        <AvatarFallback>
                          {message.sender.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div
                          className={`rounded-lg p-4 ${
                            message.sender.id === "me" ? "bg-purple-100 text-purple-900" : "bg-gray-100 text-gray-900"
                          }`}
                        >
                          <p>{message.content}</p>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{message.timestamp}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <form onSubmit={handleSendMessage} className="flex space-x-2">
                <Textarea
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="min-h-[80px]"
                />
                <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Send</span>
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  )
}

function CheckCircle({ className = "", ...props }) {
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
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}
