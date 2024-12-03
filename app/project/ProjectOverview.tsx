import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProjectOverview = () => {
  return (
    <section className="mb-16 mx-12">
      <h2 className="text-3xl font-bold mb-8">Project Overview</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Problem</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              With existing technology, your choice in beach accessories is limited to what you can carry and secure on the beach.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Solution</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              An automated anchoring system that securely plants into sand which you can attach your beach accessories to.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              An enhanced beach experience with more beach accessory choices and easier setup.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProjectOverview; 