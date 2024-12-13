import MediaTextSection from '@/components/media-text-section';

export default function AboutPage() {
    return (
        <div id="about" className="container max-w-7xl mx-auto py-12">
            <h2 className="text-5xl font-bold text-center mt-12 mb-12">About the Process</h2>

            <div className="container mx-auto ">
                <MediaTextSection
                    mediaType="image"
                    mediaSrc="/photos/sprint.jpeg"
                    title="Individual and Team Goals"
                    description="Before working together on this project, our team outlined some goals for our product and ourselves"
                    imageAlt="team"
                    expandedContent="We knew we wanted to have a finished product that we could be proud of knowing we have moved past the prototype phase and an end user could use. "
                />
                <MediaTextSection
                    mediaType="image"
                    mediaSrc="/photos/sketch.jpeg"
                    title="Ideation"
                    description="After pivoting from two different original ideas, our team came together to SPRINT on a new idea that we could all get excited about and collaborate on."
                    imageAlt="team"
                    reverse={true}
                    expandedContent="Initial products that we considered included a wearable emergency alert system for surfers as well as a rescue buoy that would both serve as an alert system and a flotation device. We chose against these ideas because of the issue with wireless communication underwater to above water due to the large difference in index of refraction between water and air. As for the buoy, we realized that really it would have been three products in one, we would have needed to develop a buoy that could house and charge a robot that could seek and rescue people in distress in the water."
                />
                <MediaTextSection
                    mediaType="video"
                    mediaSrc="/videos/proto.mov"
                    title="First Prototype"
                    description="Our first prototype served as a proof of concept for both the form and the function of our initial design. We used materials that made it easy to build and had a lower torque motor than we ended up needing."
                    imageAlt="team"
                    reverse={false}
                    videoHeight="size-3/5"
                    autoPlay={true}
                    muted={true}
                    playsInline={true}
                    controls={false}
                    loop={true}

                    expandedContent="The prototype was encased in a PVC tube acting as a shell. We had a 12V battery that powered a DC motor using a LM298 H-bridge controller which received signals from an Arduino Nano. The Nano also took inputs from an on/off toggle push button and an up/down toggle push button. We also had a photoresistor that would turn off the motor when it had dug 1.5' into the sand."
                />

                <MediaTextSection
                    mediaType="image"
                    mediaSrc="/photos/PCB.jpeg"
                    title="Building the Final Product - Electronics"
                    description="Taking the lessons we learned from our first prototype, we started building the final product with new materials "
                    imageAlt="team"
                    reverse={true}
                    expandedContent="Our initial prototype's wiring was done on a protoboard, for the final we wanted to take it a step further and so we designed a PCB to house our electronics."
                />



                <MediaTextSection
                    mediaType="video"
                    mediaSrc="/videos/force.mov"
                    title="Building the Final Product - Motor"
                    description="We also learned that the torque of our motor wasn't up to the task of burying itself in sand. We decided to calculate the torque we would need."
                    imageAlt="team"
                    reverse={false}
                    videoHeight="size-3/5"
                    autoPlay={true}
                    muted={true}
                    playsInline={true}
                    controls={false}
                    loop={true}
                    expandedContent="We used a drill to drive our spike and found which torque setting worked. From there, we used a force sensor to measure the force needed to make the drill skip at that torque setting."
                />
            </div>
        </div>


    );
} 