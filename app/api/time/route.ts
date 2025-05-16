export async function GET() {
    const now = new Date();
    const formatted = now.toLocaleString('ja-JP', { hour12: false }) ;
    return Response.json({ time: formatted });
  }