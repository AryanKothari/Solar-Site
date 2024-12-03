import MediaTextSection from './media-text-section';

export default function AboutSection() {
  return (
    <MediaTextSection
      mediaType="image"
      mediaSrc="/path/to/your/about-image.jpg"  // Replace with your actual image path
      title="Individual and Team Goals"
      description="Before working together on this project, our team outlined some goals for our product and ourselves"
      imageAlt="team"
      expandedContent= "Additional content here"
    />
  );
} 