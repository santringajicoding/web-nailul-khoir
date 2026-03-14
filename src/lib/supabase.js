import { createClient } from '@supabase/supabase-js'

// Dalam environment production sesungguhnya, gunakan .env
// Untuk template ini kita menempatkan placeholder fallback jika .env tidak tersedia
const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL || 'https://amhpaxrexwnvkwhlgqhq.supabase.co'
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFtaHBheHJleHdudmt3aGxncWhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMzMDcyNjMsImV4cCI6MjA4ODg4MzI2M30.B73TaVw4BpIdPJSU4vr7emDynucHWdIZTOk6veo-j-o'

// Inisialisasi koneksi klien Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
