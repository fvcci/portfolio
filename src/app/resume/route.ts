// Served as a static file and refreshed from GitHub at most once an hour, so a
// new resume pushed to fvcci/resumes shows up without a redeploy.
export const dynamic = "force-static";
export const revalidate = 3600;

// Tracks the latest resume on main.
const RESUME_URL =
  "https://raw.githubusercontent.com/fvcci/resumes/main/resumes/resume.pdf";

export async function GET() {
  const res = await fetch(RESUME_URL);
  if (!res.ok) {
    throw new Error(`Failed to fetch resume: ${res.status}`);
  }

  // GitHub serves raw files as application/octet-stream, which makes browsers
  // download them. Label it as a PDF so it opens in the browser's viewer.
  return new Response(await res.arrayBuffer(), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="Felix-Fong-Resume.pdf"',
    },
  });
}
