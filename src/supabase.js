import { createClient } from '@supabase/supabase-js';

// Hardcoding public keys for Vercel deployment without the need for Dashboard configuration
const supabaseUrl = "https://ebudnfpecnjqtpbxstqx.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVidWRuZnBlY25qcXRwYnhzdHF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM0Njc1MjQsImV4cCI6MjA4OTA0MzUyNH0.Rtv3rvULx5cDpiAHw1Iq7lf-GIXyJ4Hvyls97AgxK0E";

export const supabase = createClient(supabaseUrl, supabaseKey);
