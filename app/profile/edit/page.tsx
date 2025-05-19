"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { X, Upload } from "lucide-react"
import DashboardLayout from "@/components/dashboard-layout"

// Mock user data
const userData = {
  name: "Alex Johnson",
  email: "alex.johnson@university.edu",
  avatar: "/placeholder.svg?height=128&width=128",
  role: "requester", // or "helper"
  university: "State University",
  major: "Computer Science",
  bio: "Senior Computer Science student specializing in AI and machine learning. I enjoy solving complex problems and helping others understand difficult concepts.",
  skills: ["Mathematics", "Computer Science", "Data Structures", "Algorithms", "Machine Learning"],
}

export default function EditProfilePage() {
  const [name, setName] = useState(userData.name)
  const [university, setUniversity] = useState(userData.university)
  const [major, setMajor] = useState(userData.major)
  const [bio, setBio] = useState(userData.bio)
  const [skills, setSkills] = useState(userData.skills)
  const [newSkill, setNewSkill] = useState("")

  const handleAddSkill = (e: React.FormEvent) => {
    e.preventDefault()
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill])
      setNewSkill("")
    }
  }

  const handleRemoveSkill = (skillToRemove: string) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would update the user's profile
    window.location.href = "/profile"
  }

  return (
    <DashboardLayout userRole={userData.role}>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Edit Profile</h1>
        <p className="text-gray-500">Update your personal information and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Profile Picture</CardTitle>
            <CardDescription>Update your profile photo</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <Avatar className="h-24 w-24 mb-4">
              <AvatarImage src={userData.avatar || "/placeholder.svg"} alt={userData.name} />
              <AvatarFallback>
                {userData.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-center gap-2">
              <Button variant="outline" className="w-full">
                <Upload className="mr-2 h-4 w-4" />
                Upload New Picture
              </Button>
              <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                Remove Picture
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Update your personal details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={userData.email} disabled />
                <p className="text-xs text-gray-500">Email cannot be changed. Contact support for assistance.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="university">University/College</Label>
                  <Input id="university" value={university} onChange={(e) => setUniversity(e.target.value)} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="major">Field of Study/Major</Label>
                  <Input id="major" value={major} onChange={(e) => setMajor(e.target.value)} required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="min-h-[120px]"
                  placeholder="Tell others about yourself, your academic interests, and expertise"
                />
              </div>

              <div className="space-y-2">
                <Label>Skills & Expertise</Label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="flex items-center gap-1">
                      {skill}
                      <button
                        type="button"
                        onClick={() => handleRemoveSkill(skill)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <X className="h-3 w-3" />
                        <span className="sr-only">Remove {skill}</span>
                      </button>
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    placeholder="Add a skill (e.g., Calculus, Programming)"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                  />
                  <Button type="button" variant="outline" onClick={handleAddSkill}>
                    Add
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" type="button" asChild>
                <Link href="/profile">Cancel</Link>
              </Button>
              <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
                Save Changes
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </DashboardLayout>
  )
}
