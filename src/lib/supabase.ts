import { createClient } from '@supabase/supabase-js';

// Supabase configuration from environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create Supabase client (or null if credentials not provided)
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Helper to check if Supabase is configured
export const isSupabaseConfigured = () => !!supabase;

// Database types
export interface MeetingBooking {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  organization: string;
  meeting_type: string;
  preferred_date: string;
  preferred_time: string;
  message?: string;
  status?: 'pending' | 'confirmed' | 'cancelled';
  created_at?: string;
}

export interface ChatMessage {
  id?: string;
  user_id?: string;
  message: string;
  sender: 'user' | 'bot';
  timestamp: string;
  session_id?: string;
}

export interface NewsletterSubscriber {
  id?: string;
  email: string;
  subscribed_at?: string;
  status?: 'active' | 'unsubscribed';
}

export interface ContactSubmission {
  id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at?: string;
  status?: 'new' | 'responded' | 'resolved';
}
