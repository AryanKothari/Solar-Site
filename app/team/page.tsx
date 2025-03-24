"use client";

import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const teamMembers = [
  {
    name: "Eddie Scot",
    role: "Mechanical Engineer",
    bio: "",
    image: "https://media.licdn.com/dms/image/v2/C5603AQE4K9kLP_Kg5A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1650336509803?e=1745452800&v=beta&t=F2FBlDp8_DwT9c3wAXTbRPJwqiwEG6zPYIcWBsIkn0U",
    link: "https://www.linkedin.com/in/eddie-scott51/",
  },
  {
    name: "Charlie Simmons",
    role: "Mechanical Engineer",
    bio: "",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQHhxGK3imswGA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1713844232535?e=1745452800&v=beta&t=ML_e7wKvo4AOXlEFXq8rBHeH9uLkkvMSAnb8PSjeXdw",
    link: "https://www.linkedin.com/in/simmons6/",
  },
  {
    name: "Aryan Kothari",
    role: "Computer Scientist",
    bio: "",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQHaxEsgGMHZ9A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727707160181?e=1745452800&v=beta&t=eCfjsOZfJgL9KUTqZ1dso3sJyDGgHbjgr783yLBc0-A",
    link: "https://www.linkedin.com/in/akothari12/",
  },
  {
    name: "Serafina Carlucci",
    role: "History Student",
    bio: "",
    image: "https://media.licdn.com/dms/image/v2/D5603AQGDoqiNJyfFGA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1666533292722?e=1745452800&v=beta&t=Ro5TtEU3fCeLbl7b44RJOcWMGkTbrOFnhaZlZe6b7zc",
    link: "https://www.linkedin.com/in/serafina-carlucci-896528212/",
  },
  {
    name: "Ian Hoogenboom",
    role: "Electrical Engineer",
    bio: "",
    image: "https://media.licdn.com/dms/image/v2/D5603AQGDoqiNJyfFGA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1666533292722?e=1745452800&v=beta&t=Ro5TtEU3fCeLbl7b44RJOcWMGkTbrOFnhaZlZe6b7zc",
    link: "https://joaomcarvalho.com",
  },
  {
    name: "Jack Balint-Kurti",
    role: "Mechanical Engineer",
    bio: "",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQEruBB_oTjB9w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726499314006?e=1745452800&v=beta&t=m9YDnf0TbjJhUlMUQlscslxaxJeXJ-tI98NtBgcKEsA",
    link: "https://www.linkedin.com/in/jack-balint-kurti-26b26524a/",
  },
  {
    name: "Rachel Weissman",
    role: "Public Policy",
    bio: "",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQFPTAmlX0IIcw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1696882337352?e=1745452800&v=beta&t=Famw4TKqkIDFn2Mx9jHscEsaAfetlvfWs2Qo1MG01xI",
    link: "https://www.linkedin.com/in/rachel-weissman-94b82217b/",
  },
];

export default function TeamPage() {
  return (
    <div className="container mx-auto py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Our Team</h1>
        <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
          Meet the passionate individuals behind our mission to transform solar energy on campus.
        </p>
      </div>
      
      <Separator className="my-8" />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <a 
            href={member.link} 
            key={index}
            target="_blank" 
            rel="noopener noreferrer"
            className="block cursor-pointer"
          >
            <Card className="overflow-hidden transition-transform duration-200 hover:scale-105 flex flex-col">
              <div className="aspect-square relative w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
}
