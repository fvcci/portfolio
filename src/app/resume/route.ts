// Fetched once at build time and served as a static file.
export const dynamic = "force-static";

// Pinned to a commit in fvcci/resumes. Bump the hash to publish a new resume.
const RESUME_URL =
  "https://raw.githubusercontent.com/fvcci/resumes/371ad2031df85dc214471ab1e5c30d6a86d03043/resumes/resume.pdf";

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
