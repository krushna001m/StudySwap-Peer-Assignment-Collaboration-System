"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BookOpen } from "lucide-react"

export default function LoginPage() {
  const [role, setRole] = useState("requester")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would handle authentication
    // For demo purposes, we'll redirect based on the role
    window.location.href = role === "requester" ? "/dashboard/requester" : "/dashboard/helper"
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center py-4">
          <Link href="/" className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-purple-600" />
            <span className="text-xl font-bold">StudySwap</span>
          </Link>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl">Log in to StudySwap</CardTitle>
            <CardDescription>Enter your credentials to access your account</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Enter your password" required />
              </div>
              <div className="flex justify-end">
                <Link href="/forgot-password" className="text-sm text-purple-600 hover:underline">
                  Forgot password?
                </Link>
              </div>
              <div className="space-y-2">
                <Label>Log in as:</Label>
                <div className="flex space-x-4">
                  <Button
                    type="button"
                    variant={role === "requester" ? "default" : "outline"}
                    className={role === "requester" ? "bg-purple-600 hover:bg-purple-700" : ""}
                    onClick={() => setRole("requester")}
                  >
                    Requester
                  </Button>
                  <Button
                    type="button"
                    variant={role === "helper" ? "default" : "outline"}
                    className={role === "helper" ? "bg-purple-600 hover:bg-purple-700" : ""}
                    onClick={() => setRole("helper")}
                  >
                    Helper
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                Log In
              </Button>
              <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link href="/signup" className="text-purple-600 hover:underline">
                  Sign up
                </Link>
              </div>
            </CardFooter>
          </form>
        </Card>
      </main>
    </div>
  )
}
