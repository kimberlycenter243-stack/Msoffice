import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types pour la table formation_msoffice
export interface FormationMSOfficeInsert {
  nom: string
  email: string
  telephone: string
  profession?: string
  modalite_paiement: string
  acceptation: boolean
  notes?: string
}

export interface FormationMSOfficeRow extends FormationMSOfficeInsert {
  id: string
  statut_inscription: string
  date_inscription: string
  created_at: string
  updated_at: string
}