"use client"

import { Badge } from "@/components/ui/badge"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bell, Lock, User, Shield, AlertTriangle } from "lucide-react"
import DashboardLayout from "@/components/dashboard-layout"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("account")

  return (
    <DashboardLayout userRole="requester">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-gray-500">Manage your account settings and preferences</p>
      </div>

      <Tabs defaultValue="account" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4 mb-6">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="account" className="space-y-6">
          <AccountSettings />
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <NotificationSettings />
        </TabsContent>

        <TabsContent value="privacy" className="space-y-6">
          <PrivacySettings />
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <SecuritySettings />
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  )
}

function AccountSettings() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Account Information</CardTitle>
          <CardDescription>Update your account details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" defaultValue="KRUSHNA001M" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="krushnamengal46@gmail.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="language">Language</Label>
            <Select defaultValue="en">
              <SelectTrigger id="language">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Spanish</SelectItem>
                <SelectItem value="fr">French</SelectItem>
                <SelectItem value="de">German</SelectItem>
                <SelectItem value="zh">Chinese</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="timezone">Timezone</Label>
            <Select defaultValue="utc-8">
              <SelectTrigger id="timezone">
                <SelectValue placeholder="Select timezone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="utc-12">UTC-12:00</SelectItem>
                <SelectItem value="utc-8">UTC-08:00 (Pacific Time)</SelectItem>
                <SelectItem value="utc-5">UTC-05:00 (Eastern Time)</SelectItem>
                <SelectItem value="utc-0">UTC+00:00 (GMT)</SelectItem>
                <SelectItem value="utc+1">UTC+01:00 (Central European Time)</SelectItem>
                <SelectItem value="utc+8">UTC+08:00 (China Standard Time)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="bg-purple-600 hover:bg-purple-700">Save Changes</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Account Type</CardTitle>
          <CardDescription>Change your account type</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Current Account Type</Label>
            <div className="flex items-center space-x-2">
              <User className="h-5 w-5 text-purple-600" />
              <span className="font-medium">Requester</span>
            </div>
          </div>
          <div className="space-y-2">
            <Label>Switch Account Type</Label>
            <p className="text-sm text-gray-500">
              You can switch between being a requester (seeking help) and a helper (providing assistance).
            </p>
            <Button variant="outline">Switch to Helper Account</Button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-red-200">
        <CardHeader>
          <CardTitle className="text-red-600">Danger Zone</CardTitle>
          <CardDescription>Irreversible actions for your account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-md border border-red-200 p-4">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
              <div>
                <h4 className="font-medium">Delete Account</h4>
                <p className="text-sm text-gray-500">
                  Once you delete your account, there is no going back. All your data will be permanently removed.
                </p>
                <Button variant="destructive" className="mt-2">
                  Delete Account
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

function NotificationSettings() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Bell className="h-5 w-5 text-purple-600" />
          <CardTitle>Notification Preferences</CardTitle>
        </div>
        <CardDescription>Control how and when you receive notifications</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Email Notifications</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-new-requests">New Assignment Requests</Label>
                <p className="text-sm text-gray-500">Receive emails when new assignments match your skills</p>
              </div>
              <Switch id="email-new-requests" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-responses">Responses to Your Requests</Label>
                <p className="text-sm text-gray-500">Receive emails when someone responds to your assignment request</p>
              </div>
              <Switch id="email-responses" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-messages">New Messages</Label>
                <p className="text-sm text-gray-500">Receive emails when you get a new message</p>
              </div>
              <Switch id="email-messages" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-updates">Platform Updates</Label>
                <p className="text-sm text-gray-500">Receive emails about new features and updates</p>
              </div>
              <Switch id="email-updates" />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">In-App Notifications</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="app-new-requests">New Assignment Requests</Label>
                <p className="text-sm text-gray-500">Receive notifications when new assignments match your skills</p>
              </div>
              <Switch id="app-new-requests" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="app-responses">Responses to Your Requests</Label>
                <p className="text-sm text-gray-500">
                  Receive notifications when someone responds to your assignment request
                </p>
              </div>
              <Switch id="app-responses" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="app-messages">New Messages</Label>
                <p className="text-sm text-gray-500">Receive notifications when you get a new message</p>
              </div>
              <Switch id="app-messages" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="app-deadlines">Deadline Reminders</Label>
                <p className="text-sm text-gray-500">Receive notifications about upcoming assignment deadlines</p>
              </div>
              <Switch id="app-deadlines" defaultChecked />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="notification-frequency">Notification Frequency</Label>
          <Select defaultValue="realtime">
            <SelectTrigger id="notification-frequency">
              <SelectValue placeholder="Select frequency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="realtime">Real-time</SelectItem>
              <SelectItem value="hourly">Hourly Digest</SelectItem>
              <SelectItem value="daily">Daily Digest</SelectItem>
              <SelectItem value="weekly">Weekly Digest</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="bg-purple-600 hover:bg-purple-700">Save Preferences</Button>
      </CardFooter>
    </Card>
  )
}

function PrivacySettings() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Shield className="h-5 w-5 text-purple-600" />
          <CardTitle>Privacy Settings</CardTitle>
        </div>
        <CardDescription>Control your privacy and visibility on StudySwap</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Profile Visibility</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="show-email">Show Email Address</Label>
                <p className="text-sm text-gray-500">Allow other users to see your email address</p>
              </div>
              <Switch id="show-email" />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="show-university">Show University/College</Label>
                <p className="text-sm text-gray-500">Display your educational institution on your profile</p>
              </div>
              <Switch id="show-university" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="show-activity">Show Activity Status</Label>
                <p className="text-sm text-gray-500">Let others see when you were last active</p>
              </div>
              <Switch id="show-activity" defaultChecked />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Search & Discovery</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="searchable">Searchable Profile</Label>
                <p className="text-sm text-gray-500">Allow your profile to appear in search results</p>
              </div>
              <Switch id="searchable" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="skill-matching">Skill-Based Matching</Label>
                <p className="text-sm text-gray-500">Allow the platform to suggest assignments based on your skills</p>
              </div>
              <Switch id="skill-matching" defaultChecked />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="profile-visibility">Profile Visibility</Label>
          <Select defaultValue="all">
            <SelectTrigger id="profile-visibility">
              <SelectValue placeholder="Select visibility" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Everyone</SelectItem>
              <SelectItem value="university">University Members Only</SelectItem>
              <SelectItem value="connections">Connections Only</SelectItem>
              <SelectItem value="private">Private (Only You)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="data-usage">Data Usage & Analytics</Label>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <p className="text-sm text-gray-500">
                Allow StudySwap to use your data to improve the platform and your experience
              </p>
            </div>
            <Switch id="data-usage" defaultChecked />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="bg-purple-600 hover:bg-purple-700">Save Privacy Settings</Button>
      </CardFooter>
    </Card>
  )
}

function SecuritySettings() {
  return (
    <>
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Lock className="h-5 w-5 text-purple-600" />
            <CardTitle>Password & Security</CardTitle>
          </div>
          <CardDescription>Manage your password and security settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Change Password</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" />
              </div>
              <Button className="bg-purple-600 hover:bg-purple-700">Update Password</Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="two-factor">Enable Two-Factor Authentication</Label>
                  <p className="text-sm text-gray-500">
                    Add an extra layer of security to your account by requiring a verification code
                  </p>
                </div>
                <Switch id="two-factor" />
              </div>
            </div>
            <Button variant="outline" disabled>
              Set Up Two-Factor Authentication
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Login Sessions</CardTitle>
          <CardDescription>Manage your active sessions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="rounded-md border p-4">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <p className="font-medium">Current Session</p>
                  <p className="text-sm text-gray-500">Chrome on Windows • IP: 192.168.1.1</p>
                  <p className="text-xs text-gray-500">Started: May 19, 2025 at 9:08 PM</p>
                </div>
                <Badge variant="outline" className="bg-green-50 text-green-600 hover:bg-green-50">
                  Active
                </Badge>
              </div>
            </div>
            <div className="rounded-md border p-4">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <p className="font-medium">Mobile App</p>
                  <p className="text-sm text-gray-500">iPhone 15 • IP: 192.168.1.2</p>
                  <p className="text-xs text-gray-500">Started: May 18, 2025 at 3:45 PM</p>
                </div>
                <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                  Logout
                </Button>
              </div>
            </div>
          </div>
          <Button variant="outline" className="w-full">
            Logout of All Other Sessions
          </Button>
        </CardContent>
      </Card>
    </>
  )
}
