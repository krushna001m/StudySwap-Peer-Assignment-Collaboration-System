"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Pencil, Star, Award, Clock, CheckCircle, FileText } from "lucide-react"
import DashboardLayout from "@/components/dashboard-layout"

// Mock user data
const userData = {
  name: "KRUSHNA MENGAL",
  email: "KRUSHNAMENGAL46@GMAIL.COM",
  avatar: "/placeholder.svg?height=128&width=128",
  role: "requester", // or "helper"
  university: "State University",
  major: "Computer Science",
  joinDate: "January 2025",
  bio: "Senior Computer Science student specializing in AI and machine learning. I enjoy solving complex problems and helping others understand difficult concepts.",
  skills: ["Mathematics", "Computer Science", "Data Structures", "Algorithms", "Machine Learning"],
  stats: {
    requestsCreated: 15,
    requestsCompleted: 12,
    helpProvided: 0,
    averageRating: 0,
    reputationScore: 85,
  },
}

// Mock activity data
const recentActivity = [
  {
    id: 1,
    type: "request",
    title: "Calculus II: Integration Techniques",
    date: "May 15, 2025",
    status: "active",
  },
  {
    id: 2,
    type: "request",
    title: "Data Structures: Binary Tree Implementation",
    date: "May 10, 2025",
    status: "completed",
    rating: 4.5,
  },
  {
    id: 3,
    type: "request",
    title: "Algorithms: Dynamic Programming",
    date: "May 5, 2025",
    status: "completed",
    rating: 5,
  },
]

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <DashboardLayout userRole={userData.role}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold">My Profile</h1>
        <Link href="/profile/edit">
          <Button variant="outline">
            <Pencil className="mr-2 h-4 w-4" />
            Edit Profile
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src={userData.avatar || "/placeholder.svg"} alt={userData.name} />
                <AvatarFallback>
                  {userData.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <h2 className="text-xl font-bold">{userData.name}</h2>
              <p className="text-sm text-gray-500 mb-2">{userData.email}</p>
              <Badge variant="outline" className="mb-4">
                {userData.role === "requester" ? "Requester" : "Helper"}
              </Badge>
              <div className="w-full space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span>Reputation</span>
                  <span>{userData.stats.reputationScore}/100</span>
                </div>
                <Progress value={userData.stats.reputationScore} className="h-2" />
              </div>
              <div className="text-sm text-gray-500 mb-4">
                <p>Member since {userData.joinDate}</p>
                <p>
                  {userData.university} • {userData.major}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {userData.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="lg:col-span-2 space-y-6">
          <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="stats">Statistics</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>About Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{userData.bio}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                      <FileText className="h-6 w-6 text-purple-600 mb-2" />
                      <span className="text-2xl font-bold">{userData.stats.requestsCreated}</span>
                      <span className="text-sm text-gray-500">Requests</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                      <CheckCircle className="h-6 w-6 text-green-600 mb-2" />
                      <span className="text-2xl font-bold">{userData.stats.requestsCompleted}</span>
                      <span className="text-sm text-gray-500">Completed</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                      <Award className="h-6 w-6 text-amber-500 mb-2" />
                      <span className="text-2xl font-bold">{userData.stats.helpProvided}</span>
                      <span className="text-sm text-gray-500">Helped</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                      <Star className="h-6 w-6 text-amber-500 mb-2" />
                      <span className="text-2xl font-bold">{userData.stats.averageRating || "N/A"}</span>
                      <span className="text-sm text-gray-500">Avg. Rating</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="activity" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-4 p-4 border rounded-lg">
                      <div
                        className={`rounded-full p-2 ${activity.status === "active" ? "bg-blue-100" : "bg-green-100"}`}
                      >
                        {activity.status === "active" ? (
                          <Clock className="h-5 w-5 text-blue-600" />
                        ) : (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h4 className="font-medium">{activity.title}</h4>
                          <Badge variant={activity.status === "active" ? "outline" : "secondary"}>
                            {activity.status === "active" ? "Active" : "Completed"}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-500">{activity.date}</p>
                        {activity.rating && (
                          <div className="flex items-center mt-2">
                            <div className="flex text-amber-500">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="h-4 w-4"
                                  fill={i < Math.floor(activity.rating) ? "currentColor" : "none"}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-500 ml-2">{activity.rating}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Activity
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="stats" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Completion Rate</span>
                        <span className="text-sm text-gray-500">
                          {userData.stats.requestsCreated
                            ? Math.round((userData.stats.requestsCompleted / userData.stats.requestsCreated) * 100)
                            : 0}
                          %
                        </span>
                      </div>
                      <Progress
                        value={
                          userData.stats.requestsCreated
                            ? (userData.stats.requestsCompleted / userData.stats.requestsCreated) * 100
                            : 0
                        }
                        className="h-2"
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Response Time</span>
                        <span className="text-sm text-gray-500">Fast</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Reputation Score</span>
                        <span className="text-sm text-gray-500">{userData.stats.reputationScore}/100</span>
                      </div>
                      <Progress value={userData.stats.reputationScore} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Subject Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Computer Science</span>
                        <span className="text-sm text-gray-500">60%</span>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Mathematics</span>
                        <span className="text-sm text-gray-500">30%</span>
                      </div>
                      <Progress value={30} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Physics</span>
                        <span className="text-sm text-gray-500">10%</span>
                      </div>
                      <Progress value={10} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </DashboardLayout>
  )
}
