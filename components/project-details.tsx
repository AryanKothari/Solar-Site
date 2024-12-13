'use client'

import * as React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import EngineeringProjectShowcase from "@/components/engineering-project-showcase";


const projectDetails = [
  {
    title: "Project Components",
    content: <EngineeringProjectShowcase/>,
  },
  {
    title: "The Build",
    content: "Describe the build process, challenges faced, and solutions implemented. This section can include a timeline, key milestones, and any innovative approaches you took during construction."
  },
  {
    title: "Takeaways",
    content: "Summarize the key learnings, insights, and future improvements for the project. Discuss what worked well, what could be improved, and how this project has influenced your engineering approach."
  }
]

export function ProjectDetails() {
  return (
    <Card className="w-full mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Project Details</CardTitle>
        <CardDescription className="text-center">Explore the different aspects of our engineering project</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="Project Components" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            {projectDetails.map((detail, index) => (
              <TabsTrigger key={index} value={detail.title} className="text-sm sm:text-base">
                {detail.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {projectDetails.map((detail, index) => (
            <TabsContent key={index} value={detail.title}>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                {/* <h3 className="text-lg font-semibold mb-2">{detail.title}</h3> */}
                <div className="text-muted-foreground">{detail.content}</div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}

