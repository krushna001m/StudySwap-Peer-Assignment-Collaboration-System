"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Plus, Clock, CheckCircle, FileText, MessageSquare } from "lucide-react"
import DashboardLayout from "@/components/dashboard-layout"

// Mock data for assignments
const myAssignments = [
  {
    id: 1,
    title: "Calculus II: Integration Techniques",
    subject: "Mathematics",
    deadline: "May 25, 2025",
    status: "active",
    helpers: 3,
    responses: 2,
  },
  {
    id: 2,
    title: "Data Structures: Binary Tree Implementation",
    subject: "Computer Science",
    deadline: "May 30, 2025",
    status: "active",
    helpers: 1,
    responses: 1,
  },
  {
    id: 3,
    title: "Organic Chemistry: Reaction Mechanisms",
    subject: "Chemistry",
    deadline: "May 22, 2025",
    status: "completed",
    helpers: 2,
    responses: 2,
    rating: 4.5,
  },
]

export default function RequesterDashboard() {
  const [activeTab, setActiveTab] = useState("active")

  const filteredAssignments = myAssignments.filter(
    (assignment) =>
      (activeTab === "active" && assignment.status === "active") ||
      (activeTab === "completed" && assignment.status === "completed"),
  )

  return (
    <DashboardLayout userRole="requester">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">My Assignment Requests</h1>
        <Link href="/dashboard/requester/new-request">
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Plus className="mr-2 h-4 w-4" /> New Request
          </Button>
        </Link>
      </div>

      <Tabs defaultValue="active" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="active">Active Requests</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          {filteredAssignments.length > 0 ? (
            filteredAssignments.map((assignment) => <AssignmentCard key={assignment.id} assignment={assignment} />)
          ) : (
            <EmptyState
              title="No active requests"
              description="You don't have any active assignment requests. Create a new request to get help from peers."
              action={
                <Link href="/dashboard/requester/new-request">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    <Plus className="mr-2 h-4 w-4" /> New Request
                  </Button>
                </Link>
              }
            />
          )}
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          {filteredAssignments.length > 0 ? (
            filteredAssignments.map((assignment) => <AssignmentCard key={assignment.id} assignment={assignment} />)
          ) : (
            <EmptyState
              title="No completed requests"
              description="You don't have any completed assignment requests yet."
              action={null}
            />
          )}
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  )
}

function AssignmentCard({ assignment }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{assignment.title}</CardTitle>
            <CardDescription>{assignment.subject}</CardDescription>
          </div>
          <Badge variant={assignment.status === "active" ? "outline" : "secondary"}>
            {assignment.status === "active" ? "Active" : "Completed"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Clock className="mr-2 h-4 w-4" />
          <span>Deadline: {assignment.deadline}</span>
        </div>

        {assignment.status === "active" ? (
          <div className="flex space-x-4 text-sm">
            <div className="flex items-center">
              <FileText className="mr-1 h-4 w-4 text-purple-600" />
              <span>{assignment.helpers} helpers interested</span>
            </div>
            <div className="flex items-center">
              <MessageSquare className="mr-1 h-4 w-4 text-purple-600" />
              <span>{assignment.responses} responses</span>
            </div>
          </div>
        ) : (
          <div className="flex items-center text-sm">
            <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
            <span>Completed with {assignment.rating} star rating</span>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Link href={`/dashboard/requester/request/${assignment.id}`} className="w-full">
          <Button variant="outline" className="w-full">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

function EmptyState({ title, description, action }) {
  return (
    <Card className="w-full">
      <CardContent className="flex flex-col items-center justify-center py-12">
        <div className="rounded-full bg-purple-100 p-3 mb-4">
          <FileText className="h-6 w-6 text-purple-600" />
        </div>
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-sm text-gray-500 text-center max-w-md mb-6">{description}</p>
        {action}
      </CardContent>
    </Card>
  )
}
