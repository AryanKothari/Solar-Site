// pages/api/storeEnergy.ts
import { supabase } from '@/lib/supabase';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { value_wh } = req.body;

  const { error } = await supabase.from('energy_data').insert([{ value_wh }]);

  if (error) {
    console.error('Error inserting energy data:', error);
    return res.status(500).json({ error: 'Failed to store energy data' });
  }

  return res.status(200).json({ success: true });
}
