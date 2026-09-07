export interface CoFounderPost {
  id: string;
  projectTitle: string;
  oneLiner: string;
  lookingFor: "Technical Co Founder (Backend / AI)" | "Lead Product Designer" | "Growth & Campus Ops" | "Hardware / IoT Engineer";
  postedBy: {
    handle: string;
    name: string;
    year: string;
    dept: string;
  };
  timePosted: string;
  stage: "Problem Framed" | "MVP in Progress" | "First 50 Users";
  tags: string[];
  contactEmail: string;
}

export const CO_FOUNDER_POSTS: CoFounderPost[] = [];
