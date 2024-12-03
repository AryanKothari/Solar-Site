"use client";

import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";

const teamMembers = [
  {
    name: "Minha Kim",
    role: "Mechanical Engineer",
    bio: "Engineer dedicated to solving intricate problems with efficiency and creativity, using technical expertise to design.",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQFdIk_PCHNJSQ/profile-displayphoto-shrink_800_800/B4DZOE.aLCHMAc-/0/1733102773569?e=1738800000&v=beta&t=i4vP1jhkpy89OiovECeed37PYNvsR9xWnvqOHZl6mdU",
    link: "https://www.linkedin.com/in/minha-kim-121ab41aa/"
  },
  {
    name: "Sarah Kate Ashton",
    role: "Mechanical Engineer",
    bio: "Creative designer focused on crafting beautiful and intuitive user experiences.",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQFv_VYJtDNjWQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719348520061?e=1738800000&v=beta&t=VcOG3UiB3serTCWTulpBRkcPU5YMQ5O5eBzZ9qIi97o",
    link: "https://www.linkedin.com/in/sarah-kate-ashton-66541827a/"
  },
  {
    name: "Aryan Kothari",
    role: "UI/UX Designer",
    bio: "Creative designer focused on crafting beautiful and intuitive user experiences.",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQHaxEsgGMHZ9A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727707160195?e=1738800000&v=beta&t=WMSTGmQ9r_ww_RapvHM7Blskb_eRFXT1fGJHtkvl89E",
    link: "https://www.linkedin.com/in/akothari12/"
  },
  {
    name: "João Carvalho",
    role: "Electrical Engineer",
    bio: "Solving problems by asking questions and building things.",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQG0idakwSiaPQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724339416510?e=1738800000&v=beta&t=6HjlXpwMeR_tMm4i3y32dWZOgcxhDSY51rqS0QK9iNA",
    link: "https://joaomcarvalho.com"
  },
  // Add more team members as needed
];

function ExpandableText({ text }: { text: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <p className={`text-muted-foreground ${!isExpanded ? "line-clamp-2" : ""}`}>
        {text}
      </p>
      {text.length > 70 && (
        <button
          onClick={(e) => {
            e.preventDefault(); // Prevent the card's link from triggering
            setIsExpanded(!isExpanded);
          }}
          className="text-sm text-blue-500 hover:text-blue-700 mt-2"
        >
          {isExpanded ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
}

export default function TeamPage() {
  return (
    <div className="container mx-auto py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Our Team</h1>
        <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
          Meet the passionate individuals behind our mission to transform the beach experience.
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
              <CardContent>
                <ExpandableText text={member.bio} />
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
}