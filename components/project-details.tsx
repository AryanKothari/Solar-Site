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
    content: `Minha: Throughout this project, I gained valuable insights into both the approach and execution of a complex design and build process. One of the primary challenges we faced early on was generating an idea that we were all genuinely excited about. After many hours of brainstorming, we did not finalize a concept until several weeks into the semester. Once we settled on "The Root," we then spent additional time refining the mechanical functions of the project. In retrospect, we would have benefitted greatly from beginning the prototyping phase earlier in order to quickly identify and discard unsuccessful ideas. Additionally, conducting more frequent check-ins and seeking guidance from professors and industry experts would have helped us save considerable time and avoid unnecessary obstacles. \n During the construction phase, I learned the importance of precision, especially when working with electronics and external panels. The design of the internal components required not only fitting the electronics but also ensuring tolerances were compatible with the external panels we were building. Achieving these tolerances took considerable trial and error, but it provided valuable experience in CAD design and 3D printing. Furthermore, the exterior panels were laser cut, and precise alignment of the screw holes was critical. In the first iteration, we did not create a final CAD assembly, which made the assembly process significantly more challenging, as we had to manually calculate and align all components. In contrast, the second iteration included a comprehensive CAD assembly, which greatly facilitated the build process and ensured more accurate alignment. \nThis experience highlighted the importance of early prototyping, attention to detail, and iterative design. Moving forward, I would prioritize starting the prototyping process sooner, ensuring a more structured approach to design, and seeking expert feedback at earlier stages to avoid unnecessary delays. \n Aryan: As a Trinity student, I was genuinely excited when I came across this class—it felt like a rare opportunity to explore electrical and hardware components, areas I hadn't had the chance to dive into during my time at Duke. This course has been incredibly rewarding in many ways. Some standout aspects for me include gaining hands-on experience with circuits, navigating the challenges and triumphs of working in a team setting with responsibilities and deadlines, and creating something with the potential for meaningful impact. Although I faced moments of uncertainty and confusion, the overall experience was an invaluable learning journey \n Joao: \n SK:`
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

