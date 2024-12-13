// import Image from 'next/image'
// import { Navbar } from '../components/Navbar'
// import { Button } from "@/components/ui/button"

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 rounded-lg">
      {/* <Navbar /> */}
      
      {/* Hero Section */}
      <section className="pt-20 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
            The Root
          </h1>
          <div className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] mb-12">
            <video
              src="/videos/product_on_table.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
          <p className="text-xl sm:text-2xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Secure your beach accessories and elevate your experience with the Root.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Automated Drilling', 'App Controlled LEDs', 'Connector for accessories'].map((feature, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">{feature}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
            Technical Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: 'Dimensions', value: '10 x 5 x 2 inches' },
              { name: 'Weight', value: '10.5 lbs' },
              { name: 'Connectivity', value: 'Bluetooth 5.0' },
              { name: 'Battery Life', value: 'Over 15 drill deployments' },
            ].map((spec, index) => (
              <div key={index} className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 py-4">
                <span className="font-medium text-gray-900 dark:text-gray-100">{spec.name}</span>
                <span className="text-gray-600 dark:text-gray-300">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    {/* How to Operate Section */}
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
          How to Operate
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Step 1: Power On', description: 'Turn on the Root by pressing the power button located on the top.' },
            { title: 'Step 2: App Connection', description: 'Connect your smartphone to the Root via Bluetooth using the app.' },
            { title: 'Step 3: Deployment', description: 'Use the toggle up/down buttons at the top of the Root to deploy the anchor.' },
            { title: 'Step 4: Accessories', description: 'Attach your beach accessories to the connector at the top of the Root in a twist lock fashion.' },
            { title: 'Step 5: Control LEDs', description: 'Change your LED mode in the app. Use the UV mode to get visual warnings about the UV level, or pair the Party mode with a speaker attachment!' },
            { title: 'Step 6: Retrieval', description: 'Use the toggle up/down buttons at the top of the Root to retrieve the anchor and pack up the Root after a fun day at the beach!' },
          ].map((step, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>


    </div>
  )
}

