import MediaTextSection from '@/components/media-text-section';

export default function AboutPage() {
    return (
        <div id="about" className="container max-w-7xl mx-auto py-12">
            <h2 className="text-5xl font-bold text-center mt-12 mb-12">About the Process</h2>

            <div className="container mx-auto">
                <MediaTextSection
                    mediaType="image"
                    mediaSrc="/photos/sprint.jpeg"
                    title="Individual and Team Goals"
                    description="Before working together on this project, our team outlined some goals for our product and ourselves."
                    imageAlt="team"
                    expandedContent="We knew we wanted to have a finished product that we could be proud of, moving beyond the prototype phase to something an end user could actually use."
                />
                <MediaTextSection
                    mediaType="image"
                    mediaSrc="/photos/sketch.jpeg"
                    title="Ideation"
                    description="After pivoting from two different original ideas, our team came together to SPRINT on a new idea that we could all get excited about and collaborate on."
                    imageAlt="team"
                    reverse={true}
                    expandedContent="Initial products we considered included a wearable emergency alert system for surfers and a rescue buoy serving as both an alert system and a flotation device. We decided against these ideas due to underwater-to-surface communication challenges and the complexity of developing a multifunctional buoy system that combined housing, charging, and rescue functionalities."
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
                    expandedContent="The prototype was encased in a PVC tube acting as a shell. We used a 12V battery to power a DC motor via an LM298 H-bridge controller, which received signals from an Arduino Nano. The Nano also took inputs from an on/off toggle push button and an up/down toggle push button. Additionally, a photoresistor turned off the motor once it had buried 1.5' into the sand."
                />
                <MediaTextSection
                    mediaType="image"
                    mediaSrc="/photos/PCB.jpeg"
                    title="Building the Final Product - Electronics"
                    description="Taking the lessons we learned from our first prototype, we started building the final product with new materials."
                    imageAlt="team"
                    reverse={true}
                    expandedContent="Our initial prototype's wiring was done on a protoboard. For the final product, we designed a custom PCB to house our electronics, providing a more robust and organized design."
                />
                <MediaTextSection
                    mediaType="video"
                    mediaSrc="/videos/force.mov"
                    title="Building the Final Product - Motor"
                    description="We learned that the torque of our motor wasn't up to the task of burying itself in sand. We calculated the required torque and made adjustments."
                    imageAlt="team"
                    reverse={false}
                    videoHeight="size-3/5"
                    autoPlay={true}
                    muted={true}
                    playsInline={true}
                    controls={false}
                    loop={true}
                    expandedContent="Using a drill to drive our spike, we identified the optimal torque setting. We then measured the force required to make the drill skip at that torque setting with a force sensor to guide our motor selection."
                />
                <MediaTextSection
                    mediaType="image"
                    mediaSrc="/photos/root_app.png"
                    title="Building the Final Product - SMART LEDs"
                    description="We incorporated LED matrices as part of the SMART component, enabling dynamic interaction with users."
                    imageAlt="SMART LEDs"
                    reverse={true}
                    expandedContent="Using an ESP32 microcontroller, we programmed the LED matrices to display various modes, such as UV Index, Party, and Relax. These modes were controlled via a Bluetooth-enabled mobile app that allowed users to switch modes seamlessly."
                />
                <MediaTextSection
                    mediaType="image"
                    mediaSrc="/photos/post-showcase.jpeg"
                    title="Post-Showcase Work"
                    description="After the showcase, we focused on refining the design and addressing feedback."
                    imageAlt="post-showcase work"
                    reverse={false}
                    expandedContent="We worked on improving the durability of the spike's housing and optimizing the software for better responsiveness. Additionally, we explored integrating a solar charging feature to make the product more sustainable and self-sufficient."
                />
            </div>
        </div>
    );
}
