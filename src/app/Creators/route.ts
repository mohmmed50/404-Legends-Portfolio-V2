const CORS_HEADERS = {
  "Content-Type": "text/plain; charset=utf-8",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
};

export function GET() {
  return new Response("Eng.Mohamed Hosni & Eng.Ebrahim Mehasen", {
    headers: CORS_HEADERS,
  });
}

export function OPTIONS() {
  return new Response(null, { headers: CORS_HEADERS });
}
