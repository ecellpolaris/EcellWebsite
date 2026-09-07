export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      idea_submissions: {
        Row: {
          id: string;
          ticket_id: string;
          problem: string;
          who_hurts: string;
          frequency: string;
          wedge: string;
          ship_timeline: string;
          crew_status: string;
          contact_name: string;
          contact_email: string;
          contact_handle: string | null;
          github_url: string | null;
          demo_url: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          ticket_id: string;
          problem: string;
          who_hurts: string;
          frequency: string;
          wedge: string;
          ship_timeline: string;
          crew_status: string;
          contact_name: string;
          contact_email: string;
          contact_handle?: string | null;
          github_url?: string | null;
          demo_url?: string | null;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["idea_submissions"]["Insert"]>;
      };
      cofounder_posts: {
        Row: {
          id: string;
          project_title: string;
          one_liner: string;
          looking_for: string;
          poster_handle: string;
          poster_name: string;
          poster_year: string;
          poster_dept: string;
          stage: string;
          tags: string[];
          contact_email: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          project_title: string;
          one_liner: string;
          looking_for: string;
          poster_handle: string;
          poster_name: string;
          poster_year: string;
          poster_dept: string;
          stage: string;
          tags?: string[];
          contact_email: string;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["cofounder_posts"]["Insert"]>;
      };
      core_applications: {
        Row: {
          id: string;
          queue_number: number;
          name: string;
          email: string;
          year: string;
          dept: string;
          role: string;
          portfolio_url: string | null;
          past_project: string;
          why_join: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          queue_number: number;
          name: string;
          email: string;
          year: string;
          dept: string;
          role: string;
          portfolio_url?: string | null;
          past_project: string;
          why_join: string;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["core_applications"]["Insert"]>;
      };
      event_rsvps: {
        Row: {
          id: string;
          event_slug: string;
          event_title: string;
          name: string;
          email: string;
          year: string;
          dept: string;
          why: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          event_slug: string;
          event_title: string;
          name: string;
          email: string;
          year: string;
          dept: string;
          why: string;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["event_rsvps"]["Insert"]>;
      };
      summit_pass_requests: {
        Row: {
          id: string;
          pass_id: string;
          pass_name: string;
          name: string;
          email: string;
          college: string;
          track: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          pass_id: string;
          pass_name: string;
          name: string;
          email: string;
          college: string;
          track: string;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["summit_pass_requests"]["Insert"]>;
      };
      contact_inquiries: {
        Row: {
          id: string;
          name: string;
          email: string;
          category: string;
          subject: string;
          message: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          category: string;
          subject: string;
          message: string;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["contact_inquiries"]["Insert"]>;
      };
    };
  };
}
