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
  ChartOptions
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { supabase } from '@/lib/supabase';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function ProductPage() {
  const [onlineStatus, setOnlineStatus] = useState<boolean | null>(null);
  const [currentPower, setCurrentPower] = useState<number | null>(null);
  const [gridEnergyOffset, setGridEnergyOffset] = useState<number | null>(null);
  const [co2EmissionsAvoided, setCo2EmissionsAvoided] = useState<number | null>(null);
  const [devicesChargedPerDay, setDevicesChargedPerDay] = useState<number | null>(null);
  const [isCharging, setIsCharging] = useState<boolean | null>(null);
  const [energyData, setEnergyData] = useState<Array<{ time: string; value: number }>>([]);

  // Load historical data for the chart once
  useEffect(() => {
    async function loadInitialEnergyData() {
      const { data, error } = await supabase
        .from('energy_data')
        .select('*')
        .order('timestamp', { ascending: true });

      if (error) {
        console.error('Error loading initial energy data:', error);
        return;
      }

      const formatted = data.map(d => ({
        time: new Date(d.timestamp).toLocaleDateString(undefined, {
          month: "short",
          day: "numeric",
        }),
        value: d.value_wh,
      }));

      setEnergyData(formatted);
    }

    loadInitialEnergyData();
  }, []);

  // Poll live data for dashboard cards every 60s
  useEffect(() => {
    async function fetchEnergyData() {
      try {
        const response = await fetch("/api/shellyCloud");
        const data = await response.json();
        console.log("Fetched Shelly Cloud data:", data);

        setOnlineStatus(data.data.online);
        const power = Number(data.data.device_status["pm1:0"].apower);
        const energy_offset = Number(parseFloat(data.data.device_status["pm1:0"].aenergy.total).toFixed(2));

        setCurrentPower(power);
        setIsCharging(power > 0);
        setGridEnergyOffset(energy_offset);
        setCo2EmissionsAvoided(energy_offset * 0.4 / 1000);
        setDevicesChargedPerDay(energy_offset / 15);
      } catch (error) {
        console.error("Error fetching Shelly energy data:", error);
      }
    }

    fetchEnergyData();
    const interval = setInterval(fetchEnergyData, 60000);
    return () => clearInterval(interval);
  }, []);

  const dashboardData = [
    {
      title: 'Operational Status',
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
      title: 'Grid Energy Offset (Wh)',
      description: gridEnergyOffset !== null ? `${gridEnergyOffset} Wh` : 'Loading...'
    },
    {
      title: 'CO₂ Emissions Avoided (kg)',
      description: co2EmissionsAvoided !== null ? `${co2EmissionsAvoided.toFixed(2)} kg` : 'Loading...'
    },
    {
      title: 'Number of iPhones Charged',
      description: devicesChargedPerDay !== null ? `${devicesChargedPerDay.toFixed(1)}` : 'Loading...'
    },
  ];

  const chartData = {
    labels: energyData.map(d => d.time),
    datasets: [
      {
        label: 'Cumulative Grid Energy Offset (Wh)',
        data: energyData.map(d => d.value),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.2,
      },
    ],
  };

  const chartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 rounded-lg">
      {/* Chart Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
            Energy Offset Over Time
          </h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <Line data={chartData} options={chartOptions} />
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
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
              { name: 'Design Cost', value: '$1,059' },
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