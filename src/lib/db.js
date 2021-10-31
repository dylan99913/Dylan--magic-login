import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL="https://bhcnnjmjikydagaajxyk.supabase.co",
  import.meta.env.VITE_SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNTY3MjY5MCwiZXhwIjoxOTUxMjQ4NjkwfQ.7dPmcCmEdwObUXnjz9FYZrl0lueQ-6DuJvOYOgiTfqk"
)

export default supabase