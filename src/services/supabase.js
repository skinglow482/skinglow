import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gtavhocithsnyooxdcyp.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0YXZob2NpdGhzbnlvb3hkY3lwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc4OTE5MjgsImV4cCI6MjA4MzQ2NzkyOH0.2qkVnyQ6MBTB5I8jbZmJbpsQUGTKcFB8FqsRa_rQEPA'

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
)