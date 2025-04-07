import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@/lib/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  try {
    const response = await fetch("/api/shellyCloud");
    const data = await response.json();

    const energy_offset = Number(parseFloat(data.data.device_status["pm1:0"].aenergy.total).toFixed(2));

    const { error } = await supabase.from('energy_data').insert([
      { value_wh: energy_offset }
    ]);

    if (error) throw error;

    return res.status(200).json({ success: true, value: energy_offset });
  } catch (err: any) {
    console.error("Energy sync failed:", err);
    return res.status(500).json({ error: err.message });
  }
}
