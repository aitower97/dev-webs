import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();
  if (cookieStore.get("dialsa_admin")?.value !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const placeId = process.env.GOOGLE_PLACE_ID;
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!placeId || !apiKey) {
    return NextResponse.json(
      { error: "Faltan GOOGLE_PLACE_ID o GOOGLE_PLACES_API_KEY en .env.local" },
      { status: 500 }
    );
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&language=es&reviews_sort=newest&key=${apiKey}`;

  const res = await fetch(url, { next: { revalidate: 300 } }); // cache 5 min
  const data = await res.json();

  if (data.status !== "OK") {
    return NextResponse.json(
      { error: `Google Places API: ${data.status} — ${data.error_message ?? ""}` },
      { status: 500 }
    );
  }

  return NextResponse.json({
    reviews: data.result.reviews ?? [],
    rating: data.result.rating,
    total: data.result.user_ratings_total,
  });
}
