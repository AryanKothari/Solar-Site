import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProjectComponents = () => {
  const components = [
    {
      title: "Anchoring Mechanism",
      description: "Automated drilling system that securely plants the umbrella at the optimal depth and angle, featuring precision depth sensors and angle controls."
    },
    {
      title: "Control Unit",
      description: "Smart controller with wind speed sensors and automated safety features to monitor and adjust the umbrella's stability in real-time."
    },
    {
      title: "Safety Lock System",
      description: "Fail-safe locking mechanism that prevents the umbrella from becoming dislodged, with emergency retraction capabilities during extreme weather conditions."
    },
    {
      title: "Power System",
      description: "Rechargeable battery system with solar charging capabilities, providing sustainable power for all electronic components."
    }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Project Components</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {components.map((component, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{component.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {component.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProjectComponents; 