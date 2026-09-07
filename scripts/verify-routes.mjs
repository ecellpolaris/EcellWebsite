const routes = [
  '/',
  '/about',
  '/ambassadors',
  '/arena',
  '/arena/quiz',
  '/contact',
  '/events',
  '/events/vibeathon-replit-teardown',
  '/gallery',
  '/idea',
  '/join',
  '/mentors',
  '/programs',
  '/programs/forge',
  '/resources',
  '/startups',
  '/summit',
  '/team',
  '/this-page-does-not-exist-test-404'
];

async function checkRoutes() {
  console.log('--- Probing all 18 routes + 404 handler ---');
  let passed = 0;
  for (const r of routes) {
    try {
      const res = await fetch('http://localhost:3000' + r);
      console.log(`${r.padEnd(36)} => Status: ${res.status} (${res.statusText})`);
      if (r.includes('does-not-exist') && res.status === 404) {
        passed++;
      } else if (!r.includes('does-not-exist') && res.status === 200) {
        passed++;
      }
    } catch (err) {
      console.error(`${r.padEnd(36)} => Error: ${err.message}`);
    }
  }
  console.log(`\nVerified: ${passed} / ${routes.length} routes operating as expected.`);
}

checkRoutes();
