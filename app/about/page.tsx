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
                    imageAlt="te
                    awam"
                    expandedContent="We knew we wanted to create a finished product that we could be proud of—something that moved beyond the prototype phase to a high-quality, functional design that an end user could envision purchasing. Our Product Design Project Plan was built around key individual and team goals that drove every phase of development, primarily focused on ensuring the product was not only functional but also aesthetically pleasing and polished—something that could theoretically be sold in stores and leave a lasting impression."
                />
                <MediaTextSection
                    mediaType="image"
                    mediaSrc="/photos/sketch.jpeg"
                    title="Ideation"
                    description="After pivoting from two different original ideas, our team came together to SPRINT on a new idea that we could all get excited about and collaborate on."
                    imageAlt="team"
                    reverse={true}
                    expandedContent="Initial products we considered included a wearable emergency alert system for surfers and a rescue buoy serving as both an alert system and a flotation device. We decided against these ideas due to underwater-to-surface communication challenges and the complexity of developing a multifunctional buoy system that combined housing, charging, and rescue functionalities. We finally decided on ROOT, a smart beach spike designed to enhance the beach experience by providing both functionality and interactivity. ROOT can securely hold items like umbrellas and tables while featuring an LED matrix controlled via a mobile app, offering various modes such as UV Index, Party, and Relax. This idea struck the perfect balance between feasibility and innovation, allowing us to combine technical skills, user-centric design, and real-world applicability."
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
                    expandedContent="Based on the feedback we received from Tyler and Becky following the showcase, we decided to dedicate an additional week to refining the ROOT. The primary areas of improvement focused on enhancing both functionality and overall build quality. First, we added off-board charging to make the device more convenient and user-friendly. We also focused on improving the build quality by ensuring that all components were securely enclosed, giving the ROOT a cleaner and more polished appearance. To enhance usability, we redesigned the controls by consolidating them into a single on/off button and a separate up/down button for simplified operation. Additionally, we improved the accessories and locking mechanism to ensure better stability and ease of use. As an optional enhancement, we considered sharpening the spike to make it less dull for more efficient use in sandy or tough conditions. These changes addressed the feedback directly and significantly elevated the ROOT's overall design and user experience."
                />
            </div>
        </div>
    );
}
