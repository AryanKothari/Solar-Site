import MediaTextSection from '@/components/media-text-section';

export default function AboutSection() {
    return (
        <div className="container mx-auto py-24">
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
                description="After pivoting from two different original ideas, our team came together to SPRINT on a new idea that we could all get excited about and collaborate on."
                imageAlt="team"
                reverse={false}
                videoHeight="size-3/5"
                autoPlay={true}
                muted={true}
                playsInline={true}
                controls={false}
                
                expandedContent="Initial products that we considered included a wearable emergency alert system for surfers as well as a rescue buoy that would both serve as an alert system and a flotation device. We chose against these ideas because of the issue with wireless communication underwater to above water due to the large difference in index of refraction between water and air. As for the buoy, we realized that really it would have been three products in one, we would have needed to develop a buoy that could house and charge a robot that could seek and rescue people in distress in the water."
            />
        </div>
    );
} 