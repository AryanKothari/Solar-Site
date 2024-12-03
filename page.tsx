import MediaTextSection from './media-text-section'

export default function Home() {
  return (
    <main>
      <MediaTextSection
        mediaType="image"
        mediaSrc="/placeholder.svg?height=400&width=600"
        title="Our Latest Product"
        description="Introducing our groundbreaking new product that revolutionizes the way you work. With cutting-edge technology and sleek design, it's the perfect addition to your workflow."
        imageAlt="Latest product showcase"
      />
      
      <MediaTextSection
        mediaType="video"
        mediaSrc="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        title="How It Works"
        description="Watch this short video to see how easy it is to integrate our product into your daily routine. Experience the simplicity and efficiency firsthand."
        reverse={true}
      />
    </main>
  )
}

