-- ==============================================================================
-- E CELL PST (SPARK) · SUPABASE DATABASE SCHEMA
-- Execute this script in your Supabase SQL Editor:
-- Dashboard -> SQL Editor -> New query -> Paste & Run
-- Project: https://supabase.com/dashboard/project/saidjblbjceptjdmovnn/sql
-- ==============================================================================

-- 1. Enable UUID Extension
create extension if not exists "uuid-ossp";

-- ------------------------------------------------------------------------------
-- Table 1: Idea Lab Submissions
-- ------------------------------------------------------------------------------
create table if not exists public.idea_submissions (
    id uuid default uuid_generate_v4() primary key,
    ticket_id text not null,
    problem text not null,
    who_hurts text not null,
    frequency text not null,
    wedge text not null,
    ship_timeline text not null,
    crew_status text not null,
    contact_name text not null,
    contact_email text not null,
    contact_handle text,
    github_url text,
    demo_url text,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.idea_submissions enable row level security;

-- Policies: Allow anyone (anon) to submit hypotheses; only authenticated admins to view/edit
create policy "Allow anonymous idea submissions" 
    on public.idea_submissions for insert 
    to anon, authenticated 
    with check (true);

create policy "Allow service role full access to ideas" 
    on public.idea_submissions for all 
    to service_role 
    using (true);

-- ------------------------------------------------------------------------------
-- Table 2: Co-Founder Matching Board Posts
-- ------------------------------------------------------------------------------
create table if not exists public.cofounder_posts (
    id uuid default uuid_generate_v4() primary key,
    project_title text not null,
    one_liner text not null,
    looking_for text not null,
    poster_handle text not null,
    poster_name text not null,
    poster_year text not null,
    poster_dept text not null,
    stage text not null default 'Problem Framed',
    tags text[] default '{}',
    contact_email text not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.cofounder_posts enable row level security;

-- Policies: Anyone can view cofounder board posts; anyone can post a new request
create policy "Allow public read access on cofounder posts" 
    on public.cofounder_posts for select 
    to anon, authenticated 
    using (true);

create policy "Allow anyone to publish cofounder post" 
    on public.cofounder_posts for insert 
    to anon, authenticated 
    with check (true);

-- ------------------------------------------------------------------------------
-- Table 3: Core Team Applications (Join the Engine)
-- ------------------------------------------------------------------------------
create table if not exists public.core_applications (
    id uuid default uuid_generate_v4() primary key,
    queue_number integer not null,
    name text not null,
    email text not null,
    year text not null,
    dept text not null,
    role text not null,
    portfolio_url text,
    past_project text not null,
    why_join text not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.core_applications enable row level security;

create policy "Allow anonymous applications" 
    on public.core_applications for insert 
    to anon, authenticated 
    with check (true);

create policy "Allow service role full access to applications" 
    on public.core_applications for all 
    to service_role 
    using (true);

-- ------------------------------------------------------------------------------
-- Table 4: Campus Event & Sprint RSVPs
-- ------------------------------------------------------------------------------
create table if not exists public.event_rsvps (
    id uuid default uuid_generate_v4() primary key,
    event_slug text not null,
    event_title text not null,
    name text not null,
    email text not null,
    year text not null,
    dept text not null,
    why text not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.event_rsvps enable row level security;

create policy "Allow anyone to RSVP" 
    on public.event_rsvps for insert 
    to anon, authenticated 
    with check (true);

create policy "Allow service role full access to event rsvps" 
    on public.event_rsvps for all 
    to service_role 
    using (true);

-- ------------------------------------------------------------------------------
-- Table 5: E Summit 26 Delegate Pass Requests
-- ------------------------------------------------------------------------------
create table if not exists public.summit_pass_requests (
    id uuid default uuid_generate_v4() primary key,
    pass_id text not null,
    pass_name text not null,
    name text not null,
    email text not null,
    college text not null,
    track text not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.summit_pass_requests enable row level security;

create policy "Allow anyone to request summit pass" 
    on public.summit_pass_requests for insert 
    to anon, authenticated 
    with check (true);

create policy "Allow service role full access to summit pass requests" 
    on public.summit_pass_requests for all 
    to service_role 
    using (true);

-- ------------------------------------------------------------------------------
-- Table 6: Contact & Office Hours Inquiries
-- ------------------------------------------------------------------------------
create table if not exists public.contact_inquiries (
    id uuid default uuid_generate_v4() primary key,
    name text not null,
    email text not null,
    category text not null,
    subject text not null,
    message text not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.contact_inquiries enable row level security;

create policy "Allow anyone to send contact inquiry" 
    on public.contact_inquiries for insert 
    to anon, authenticated 
    with check (true);

create policy "Allow service role full access to contact inquiries" 
    on public.contact_inquiries for all 
    to service_role 
    using (true);
