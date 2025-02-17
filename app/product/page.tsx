"use client";
// import Image from 'next/image'
// import { Navbar } from '../components/Navbar'
// import { Button } from "@/components/ui/button"
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function ProductPage() {
  const powerConsumptionData = {
    labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
    datasets: [
      {
        label: 'Energy Consumption (kWh)',
        data: [1.2, 2.3, 3.1, 4.0, 3.5, 2.8, 1.5],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Power Consumption Over Time',
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 rounded-lg">
      {/* <Navbar /> */}

            {/* Power Consumption Graph Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
            Power Consumption
          </h2>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <Line data={powerConsumptionData} options={options} />
          </div>
        </div>
      </section>


      {/* How to Operate Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
            Data Dashboard
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Grid Energy Offset (kWh/year)', description: '' },
              { title: 'CO₂ Emissions Avoided (kg/year)', description: '' },
              { title: 'Number of Devices Charged per Day', description: '' },
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

      {/* Specifications Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
            Technical Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: 'Charging Capacity', value: '300 W' },
              { name: 'Storage Capacity', value: '1000 Wh' },
              { name: 'Solar Power', value: '500 W' },
              { name: 'Charge Controller', value: '40 A' },
              { name: 'Current Inverter', value: '750 W' },
              { name: '[ONE MORE]', value: 'XXX' },
            ].map((spec, index) => (
              <div key={index} className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 py-4">
                <span className="font-medium text-gray-900 dark:text-gray-100">{spec.name}</span>
                <span className="text-gray-600 dark:text-gray-300">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
