export async function GET() {
    const now = new Date().toLocaleString();
    return Response.json({ time: now });
  }
  