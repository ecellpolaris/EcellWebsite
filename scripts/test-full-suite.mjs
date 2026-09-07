import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://saidjblbjceptjdmovnn.supabase.co";
const SUPABASE_KEY = "sb_publishable_Nf7fQwOetOooAzpBQ4rWwA_sBXD-eQn";
const BASE_URL = "http://localhost:3000";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

console.log("===============================================================");
console.log(" E CELL PST (SPARK) · COMPREHENSIVE PRODUCTION SYSTEM TEST");
console.log("===============================================================\n");

let passedTests = 0;
let totalTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    console.log(`  ✅ [PASS] ${message}`);
    passedTests++;
  } else {
    console.error(`  ❌ [FAIL] ${message}`);
  }
}

async function runDatabaseTests() {
  console.log("--- 1. SUPABASE DATABASE & SCHEMA VERIFICATION ---");

  // Test 1: Idea Lab Submission
  const ideaPayload = {
    ticket_id: `IDEA-TEST-${Date.now().toString().slice(-4)}`,
    problem: "Campus founders spend 15 hours finding early technical co-founders.",
    who_hurts: "Undergraduate student builders",
    frequency: "Weekly",
    wedge: "Hostel room co-founder matchmaking board + Arena XP verification",
    ship_timeline: "Within 30 Days",
    crew_status: "Solo builder looking for co founder",
    contact_name: "Saahi Dubey",
    contact_email: "saahi@polariscampus.com",
    contact_handle: "@saahi_d",
    github_url: "https://github.com/ecell-pst",
    demo_url: "https://polariscampus.com",
  };
  const { error: ideaErr } = await supabase.from("idea_submissions").insert(ideaPayload);
  assert(!ideaErr, `Table 'idea_submissions': Insertion succeeded (${ideaErr ? ideaErr.message : "OK"})`);

  // Test 2: Co-Founder Board Post
  const cofounderPayload = {
    project_title: "Campus Energy Optimizer",
    one_liner: "Automated AC and lab power scheduling for Polaris Tech Park.",
    looking_for: "Embedded Systems & IoT Engineer",
    poster_handle: "@iot_builder",
    poster_name: "Arjun Bhatia",
    poster_year: "1st Year",
    poster_dept: "Computer Science & AI",
    stage: "Problem Framed",
    tags: ["IoT", "Hardware", "Energy"],
    contact_email: "arjun@polariscampus.com",
  };
  const { data: cfData, error: cfErr } = await supabase
    .from("cofounder_posts")
    .insert(cofounderPayload)
    .select();
  assert(!cfErr && cfData && cfData.length > 0, `Table 'cofounder_posts': Insert & Select succeeded (ID: ${cfData?.[0]?.id || "none"})`);

  // Test 3: Query Co-Founder Board (Read access test)
  const { data: cfList, error: cfListErr } = await supabase
    .from("cofounder_posts")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(5);
  assert(!cfListErr && cfList && cfList.length > 0, `Table 'cofounder_posts': Public Read query returned ${cfList?.length} post(s)`);

  // Test 4: Core Team Application
  const appPayload = {
    queue_number: 147,
    name: "Tanvi Rao",
    email: "tanvi.rao@polariscampus.com",
    year: "2nd Year",
    dept: "Computer Science & AI",
    role: "WebOps & Full Stack Systems",
    portfolio_url: "https://github.com/tanvi-dev",
    past_project: "Built real-time auction system during hackathon",
    why_join: "Want to engineer high-velocity founder tooling at Polaris",
  };
  const { error: appErr } = await supabase.from("core_applications").insert(appPayload);
  assert(!appErr, `Table 'core_applications': Recruitment application insert succeeded (${appErr ? appErr.message : "OK"})`);

  // Test 5: Event RSVP
  const rsvpPayload = {
    event_slug: "vibeathon-replit-teardown",
    event_title: "Vibeathon: Replit Architecture Teardown",
    name: "Rohit Krishnan",
    email: "rohit@polariscampus.com",
    year: "2nd Year",
    dept: "Computer Science",
    why: "Interested in real-time WebAssembly and container orchestration",
  };
  const { error: rsvpErr } = await supabase.from("event_rsvps").insert(rsvpPayload);
  assert(!rsvpErr, `Table 'event_rsvps': Event RSVP insert succeeded (${rsvpErr ? rsvpErr.message : "OK"})`);

  // Test 6: Summit Pass Request
  const passPayload = {
    pass_id: "pass-delegate",
    pass_name: "Builder Delegate Pass",
    name: "Varun Hegde",
    email: "varun.hegde@polariscampus.com",
    college: "Polaris School of Technology",
    track: "Builders Conclave",
  };
  const { error: passErr } = await supabase.from("summit_pass_requests").insert(passPayload);
  assert(!passErr, `Table 'summit_pass_requests': Summit delegate pass request succeeded (${passErr ? passErr.message : "OK"})`);

  // Test 7: Contact Inquiry
  const contactPayload = {
    name: "Campus Partner Representative",
    email: "partner@techpark.in",
    category: "Corporate Partnership",
    subject: "Mentorship hours for Season 26",
    message: "We would like to sponsor cloud credits and offer 4 senior engineering leads for Founder Hours.",
  };
  const { error: contactErr } = await supabase.from("contact_inquiries").insert(contactPayload);
  assert(!contactErr, `Table 'contact_inquiries': Contact inquiry insert succeeded (${contactErr ? contactErr.message : "OK"})`);
}

async function runRouteTests() {
  console.log("\n--- 2. FRONTEND ROUTES & PAGES INTEGRATION ---");
  const routes = [
    { path: "/", name: "Homepage (Hero & Lightfall)" },
    { path: "/about", name: "About E Cell PST" },
    { path: "/startups", name: "Startups & WebGL SideRays" },
    { path: "/arena", name: "The Arena & Live Notices" },
    { path: "/arena/quiz", name: "Founder IQ Quiz" },
    { path: "/idea", name: "Idea Lab & Supabase Co-Founder Board" },
    { path: "/join", name: "Join Core Team & Supabase Queue" },
    { path: "/events", name: "Events Calendar & WhatsApp Drop Banner" },
    { path: "/events/vibeathon-replit-teardown", name: "Event Detail & Supabase RSVP" },
    { path: "/programs", name: "Programs Directory" },
    { path: "/programs/forge", name: "FORGE Pre-Incubation" },
    { path: "/summit", name: "E Summit 26 & Supabase Delegate Passes" },
    { path: "/mentors", name: "Mentors & Founder Hours" },
    { path: "/ambassadors", name: "SPARK Ambassadors" },
    { path: "/gallery", name: "Campus Gallery" },
    { path: "/team", name: "E Cell Core Team" },
    { path: "/resources", name: "Resource Archive" },
    { path: "/contact", name: "Contact the Bay & Supabase Inquiries" },
    { path: "/favicon.ico", name: "E Cell Logo Favicon" },
  ];

  for (const r of routes) {
    try {
      const res = await fetch(`${BASE_URL}${r.path}`);
      assert(res.status === 200, `${r.name} (${r.path}) returned HTTP ${res.status}`);
    } catch (e) {
      assert(false, `${r.name} (${r.path}) failed to respond: ${e.message}`);
    }
  }

  // Verify 404 error handler
  try {
    const notFoundRes = await fetch(`${BASE_URL}/non-existent-page-test-404`);
    assert(notFoundRes.status === 404, `Global 404 Route Handler returned HTTP ${notFoundRes.status}`);
  } catch (e) {
    assert(false, `404 test failed: ${e.message}`);
  }
}

async function runIntegrityTests() {
  console.log("\n--- 3. ASSETS, METADATA & FAVICON VERIFICATION ---");
  
  // Favicon header check
  const homeRes = await fetch(`${BASE_URL}/`);
  const html = await homeRes.text();
  assert(html.includes("/team/ecell-logo.jpeg") || html.includes("/ecell-logo.jpeg"), "HTML <head> contains E Cell logo favicon link tags");
  assert(html.includes("chat.whatsapp.com"), "HTML contains official WhatsApp group link");
  assert(html.includes("noise-canvas") || html.includes("NoiseOverlay"), "Daylight Foundry NoiseOverlay component active");
}

async function main() {
  await runDatabaseTests();
  await runRouteTests();
  await runIntegrityTests();

  console.log("\n===============================================================");
  console.log(` FINAL RESULT: ${passedTests} / ${totalTests} TESTS PASSED (${((passedTests / totalTests) * 100).toFixed(1)}%)`);
  console.log("===============================================================");

  if (passedTests === totalTests) {
    console.log("🚀 ALL SYSTEMS OPERATIONAL AND ON TRACK!");
    process.exit(0);
  } else {
    console.error("⚠️ SOME CHECKS FAILED.");
    process.exit(1);
  }
}

main();
