-- Criação da tabela de Leads do Site com Segurança Máxima (RLS)
CREATE TABLE public.site_leads (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    nome TEXT NOT NULL,
    whatsapp TEXT NOT NULL,
    criado_em TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Ativar Segurança em Nível de Linha (RLS) para evitar vazamento de dados
ALTER TABLE public.site_leads ENABLE ROW LEVEL SECURITY;

-- Permitir INSERT para qualquer visitante anônimo do site (anon key)
CREATE POLICY "Permitir submissão publica de leads"
ON public.site_leads
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Sem a política de SELECT, é impossível que invasores externos leiam quem se cadastrou
-- (Só o administrador via console do Supabase conseguirá enxergar)
