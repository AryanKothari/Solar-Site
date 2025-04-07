// lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lgiptvayuihfjetqqwgf.supabase.co'; // Replace with your URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxnaXB0dmF5dWloZmpldHFxd2dmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwNTc0NjcsImV4cCI6MjA1OTYzMzQ2N30.0jfhuYC9aOLlCz_AesDwtO7m9qkcQu7CoJCOxbN8jB8'; // Replace with your anon key
export const supabase = createClient(supabaseUrl, supabaseKey);
