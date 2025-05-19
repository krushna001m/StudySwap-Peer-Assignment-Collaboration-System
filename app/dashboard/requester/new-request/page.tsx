"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, Upload, AlertCircle, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import DashboardLayout from "@/components/dashboard-layout"

export default function NewRequestPage() {
  const [date, setDate] = useState<Date>()
  const [fileUploaded, setFileUploaded] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would handle the form submission
    window.location.href = "/dashboard/requester"
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileUploaded(true)
    }
  }

  return (
    <DashboardLayout userRole="requester">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Create New Assignment Request</h1>
        <p className="text-gray-500">Fill out the details to get help from peers</p>
      </div>

      <Card>
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>Assignment Details</CardTitle>
            <CardDescription>Provide clear information to help peers understand what you need</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Assignment Title</Label>
              <Input id="title" placeholder="E.g., Calculus II: Integration Techniques" required />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="subject">Subject/Course</Label>
                <Select required>
                  <SelectTrigger id="subject">
                    <SelectValue placeholder="Select subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mathematics">Mathematics</SelectItem>
                    <SelectItem value="computer-science">Computer Science</SelectItem>
                    <SelectItem value="physics">Physics</SelectItem>
                    <SelectItem value="chemistry">Chemistry</SelectItem>
                    <SelectItem value="biology">Biology</SelectItem>
                    <SelectItem value="engineering">Engineering</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="humanities">Humanities</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="deadline">Deadline</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Select a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Assignment Description</Label>
              <Textarea
                id="description"
                placeholder="Describe what you need help with in detail. Include specific questions or areas where you're stuck."
                className="min-h-[120px]"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="help-type">Type of Help Needed</Label>
              <Select required>
                <SelectTrigger id="help-type">
                  <SelectValue placeholder="Select type of help" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="guidance">Guidance/Hints</SelectItem>
                  <SelectItem value="review">Review My Work</SelectItem>
                  <SelectItem value="explanation">Concept Explanation</SelectItem>
                  <SelectItem value="solution">Solution Walkthrough</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="file-upload">Upload Assignment Files (Optional)</Label>
              <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center">
                <Upload className="h-8 w-8 text-gray-400 mb-2" />
                <p className="text-sm text-gray-500 mb-2">Drag and drop files here or click to browse</p>
                <Input id="file-upload" type="file" className="hidden" onChange={handleFileChange} />
                <Button type="button" variant="outline" onClick={() => document.getElementById("file-upload")?.click()}>
                  Browse Files
                </Button>
                {fileUploaded && (
                  <div className="mt-4 text-sm text-green-600 flex items-center">
                    <CheckCircle className="h-4 w-4 mr-1" /> File uploaded successfully
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-start space-x-2 text-sm">
              <AlertCircle className="h-4 w-4 text-amber-500 mt-0.5" />
              <p className="text-gray-500">
                Remember to follow your institution&apos;s academic integrity policies. StudySwap is designed for
                collaborative learning, not cheating.
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" type="button" asChild>
              <Link href="/dashboard/requester">Cancel</Link>
            </Button>
            <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
              Submit Request
            </Button>
          </CardFooter>
        </form>
      </Card>
    </DashboardLayout>
  )
}
