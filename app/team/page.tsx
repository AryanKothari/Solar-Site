import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const teamMembers = [
  {
    name: "Minha Kim",
    role: "Project Lead",
    bio: "Experienced developer with a passion for creating innovative solutions.",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQFdIk_PCHNJSQ/profile-displayphoto-shrink_800_800/B4DZOE.aLCHMAc-/0/1733102773569?e=1738800000&v=beta&t=i4vP1jhkpy89OiovECeed37PYNvsR9xWnvqOHZl6mdU"
  },
  {
    name: "Sarah Kate Ashton",
    role: "UI/UX Designer",
    bio: "Creative designer focused on crafting beautiful and intuitive user experiences.",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQFv_VYJtDNjWQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719348520061?e=1738800000&v=beta&t=VcOG3UiB3serTCWTulpBRkcPU5YMQ5O5eBzZ9qIi97o"
  },
  {
    name: "Aryan Kothari",
    role: "UI/UX Designer",
    bio: "Creative designer focused on crafting beautiful and intuitive user experiences.",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQHaxEsgGMHZ9A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727707160195?e=1738800000&v=beta&t=WMSTGmQ9r_ww_RapvHM7Blskb_eRFXT1fGJHtkvl89E"
  },
  {
    name: "Joao Carvalho",
    role: "UI/UX Designer",
    bio: "Creative designer focused on crafting beautiful and intuitive user experiences.",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQG0idakwSiaPQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724339416510?e=1738800000&v=beta&t=6HjlXpwMeR_tMm4i3y32dWZOgcxhDSY51rqS0QK9iNA"
  },
  // Add more team members as needed
];

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
          <Card key={index} className="overflow-hidden" >
            <div className="aspect-square relative">
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
              <p className="text-muted-foreground">{member.bio}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}