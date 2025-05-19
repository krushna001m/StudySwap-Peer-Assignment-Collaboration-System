"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Clock, CheckCircle, Star, FileText } from "lucide-react"
import DashboardLayout from "@/components/dashboard-layout"

// Mock data for available assignments
const availableAssignments = [
  {
    id: 1,
    title: "Calculus II: Integration Techniques",
    subject: "Mathematics",
    deadline: "May 25, 2025",
    requester: "Alex J.",
    requestDate: "May 15, 2025",
  },
  {
    id: 2,
    title: "Data Structures: Binary Tree Implementation",
    subject: "Computer Science",
    deadline: "May 30, 2025",
    requester: "Jamie L.",
    requestDate: "May 16, 2025",
  },
  {
    id: 3,
    title: "Organic Chemistry: Reaction Mechanisms",
    subject: "Chemistry",
    deadline: "May 22, 2025",
    requester: "Sam T.",
    requestDate: "May 14, 2025",
  },
  {
    id: 4,
    title: "Microeconomics: Supply and Demand Analysis",
    subject: "Economics",
    deadline: "June 2, 2025",
    requester: "Morgan P.",
    requestDate: "May 17, 2025",
  },
]

// Mock data for my contributions
const myContributions = [
  {
    id: 101,
    title: "Physics: Kinematics Problem Set",
    subject: "Physics",
    requester: "Taylor R.",
    status: "in-progress",
    deadline: "May 24, 2025",
  },
  {
    id: 102,
    title: "Java Programming: Inheritance Exercise",
    subject: "Computer Science",
    requester: "Jordan K.",
    status: "completed",
    rating: 5,
    completedDate: "May 12, 2025",
  },
]

export default function HelperDashboard() {
  const [activeTab, setActiveTab] = useState("browse")
  const [searchTerm, setSearchTerm] = useState("")
  const [subjectFilter, setSubjectFilter] = useState("all")

  const filteredAssignments = availableAssignments.filter((assignment) => {
    const matchesSearch =
      assignment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      assignment.subject.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSubject = subjectFilter === "all" || assignment.subject === subjectFilter
    return matchesSearch && matchesSubject
  })

  const filteredContributions = myContributions.filter(
    (contribution) =>
      (activeTab === "in-progress" && contribution.status === "in-progress") ||
      (activeTab === "completed" && contribution.status === "completed"),
  )

  return (
    <DashboardLayout userRole="helper">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Helper Dashboard</h1>
        <p className="text-gray-500">Browse assignment requests and manage your contributions</p>
      </div>

      <Tabs defaultValue="browse" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="browse">Browse Requests</TabsTrigger>
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="browse">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search by title or subject..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={subjectFilter} onValueChange={setSubjectFilter}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Filter by subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Subjects</SelectItem>
                <SelectItem value="Mathematics">Mathematics</SelectItem>
                <SelectItem value="Computer Science">Computer Science</SelectItem>
                <SelectItem value="Physics">Physics</SelectItem>
                <SelectItem value="Chemistry">Chemistry</SelectItem>
                <SelectItem value="Economics">Economics</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredAssignments.length > 0 ? (
              filteredAssignments.map((assignment) => <AssignmentCard key={assignment.id} assignment={assignment} />)
            ) : (
              <div className="col-span-2">
                <EmptyState
                  title="No matching assignments"
                  description="Try adjusting your search or filters to find more assignment requests."
                />
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="in-progress">
          <div className="space-y-4">
            {filteredContributions.length > 0 ? (
              filteredContributions.map((contribution) => (
                <ContributionCard key={contribution.id} contribution={contribution} />
              ))
            ) : (
              <EmptyState
                title="No in-progress contributions"
                description="You don't have any assignments you're currently helping with."
              />
            )}
          </div>
        </TabsContent>

        <TabsContent value="completed">
          <div className="space-y-4">
            {filteredContributions.length > 0 ? (
              filteredContributions.map((contribution) => (
                <ContributionCard key={contribution.id} contribution={contribution} />
              ))
            ) : (
              <EmptyState title="No completed contributions" description="You haven't completed any assignments yet." />
            )}
          </div>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  )
}

function AssignmentCard({ assignment }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div>
          <Badge className="mb-2" variant="outline">
            {assignment.subject}
          </Badge>
          <CardTitle className="text-lg">{assignment.title}</CardTitle>
          <CardDescription>
            Posted by {assignment.requester} on {assignment.requestDate}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center text-sm text-gray-500">
          <Clock className="mr-2 h-4 w-4" />
          <span>Deadline: {assignment.deadline}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/dashboard/helper/request/${assignment.id}`} className="w-full">
          <Button variant="outline" className="w-full">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

function ContributionCard({ contribution }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <Badge className="mb-2" variant="outline">
              {contribution.subject}
            </Badge>
            <CardTitle className="text-lg">{contribution.title}</CardTitle>
            <CardDescription>Requested by {contribution.requester}</CardDescription>
          </div>
          <Badge variant={contribution.status === "in-progress" ? "outline" : "secondary"}>
            {contribution.status === "in-progress" ? "In Progress" : "Completed"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        {contribution.status === "in-progress" ? (
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="mr-2 h-4 w-4" />
            <span>Deadline: {contribution.deadline}</span>
          </div>
        ) : (
          <div className="flex items-center text-sm">
            <div className="flex items-center mr-4">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              <span>Completed on {contribution.completedDate}</span>
            </div>
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4" fill={i < contribution.rating ? "currentColor" : "none"} />
              ))}
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Link href={`/dashboard/helper/contribution/${contribution.id}`} className="w-full">
          <Button variant="outline" className="w-full">
            {contribution.status === "in-progress" ? "Continue Helping" : "View Details"}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

function EmptyState({ title, description }) {
  return (
    <Card className="w-full">
      <CardContent className="flex flex-col items-center justify-center py-12">
        <div className="rounded-full bg-purple-100 p-3 mb-4">
          <FileText className="h-6 w-6 text-purple-600" />
        </div>
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-sm text-gray-500 text-center max-w-md">{description}</p>
      </CardContent>
    </Card>
  )
}
