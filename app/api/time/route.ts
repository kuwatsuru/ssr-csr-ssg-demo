export async function GET() {
    const now = new Date();
    const formatted = now.toLocaleString('ja-JP') ;
    return Response.json({ time: formatted });
  }