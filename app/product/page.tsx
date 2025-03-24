"use client";
import { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function ProductPage() {
  const [onlineStatus, setOnlineStatus] = useState<boolean | null>(null);
  const [currentPower, setCurrentPower] = useState<number | null>(null);
  const [gridEnergyOffset, setGridEnergyOffset] = useState<number | null>(null);
  const [co2EmissionsAvoided, setCo2EmissionsAvoided] = useState<number | null>(null);
  const [devicesChargedPerDay, setDevicesChargedPerDay] = useState<number | null>(null);
  const [isCharging, setIsCharging] = useState<boolean | null>(null);

  useEffect(() => {
    async function fetchEnergyData() {
      try {
        const response = await fetch("/api/shellyCloud");
        const data = await response.json();
        console.log("Fetched Shelly Cloud data:", data);

        setOnlineStatus(data.data.online);
        const power = Number(data.data.device_status["pm1:0"].apower);
        setCurrentPower(power);
        setIsCharging(power > 0);
        setGridEnergyOffset(Number(parseFloat(data.data.device_status["pm1:0"].aenergy.total).toFixed(2)));
        setCo2EmissionsAvoided(Number((parseFloat(data.data.device_status["pm1:0"].aenergy.total) * 0.4).toFixed(2)));
        setDevicesChargedPerDay(Math.round(parseFloat(data.data.device_status["pm1:0"].aenergy.total) / 0.015));
      } catch (error) {
        console.error("Error fetching Shelly energy data today:", error);
      }
    }

    fetchEnergyData();
    const interval = setInterval(fetchEnergyData, 600000); // Update every minute
    return () => clearInterval(interval);
  }, []); // ✅ Empty dependency array so it runs once


  const dashboardData = [
    {
      title: 'Online Status',
      description: onlineStatus !== null ? (onlineStatus ? 'Online' : 'Offline') : 'Loading...'
    },
    {
      title: 'Current Power Usage (W)',
      description: currentPower !== null ? `${currentPower} W` : 'Loading...'
    },
    {
      title: 'Charging Status',
      description: isCharging !== null ? (isCharging ? 'Charging' : 'Not Charging') : 'Loading...'
    },
    {
      title: 'Grid Energy Offset (kWh/year)',
      description: gridEnergyOffset !== null ? `${gridEnergyOffset} kWh` : 'Loading...'
    },
    {
      title: 'CO₂ Emissions Avoided (kg/year)',
      description: co2EmissionsAvoided !== null ? `${co2EmissionsAvoided} kg` : 'Loading...'
    },
    {
      title: 'Number of Devices Charged per Day',
      description: devicesChargedPerDay !== null ? `${devicesChargedPerDay}` : 'Loading...'
    },
  ];


  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 rounded-lg">
      {/* Data Dashboard Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
            Data Dashboard
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dashboardData.map((step, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications Section */}
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
