import { getWeddingAssetUrl, weddingAssetNames } from "@/lib/weddingAssets";

export default async function HomePage() {
  const coupleSrc = await getWeddingAssetUrl(weddingAssetNames.couple);
  const namesAndVerseSrc = await getWeddingAssetUrl(weddingAssetNames.namesAndVerse);
  const venueSrc = await getWeddingAssetUrl(weddingAssetNames.venue);
  const mapsApiKey =
    process.env.GOOGLE_MAPS_EMBED_API_KEY ?? process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY ?? "";
  const mapLocation = "12540 Skyline Blvd, Oakland, CA 94619, United States";
  const mapZoom = "10";
  const mapSrc = `https://www.google.com/maps/embed/v1/place?${new URLSearchParams({
    key: mapsApiKey,
    q: mapLocation,
    zoom: mapZoom
  }).toString()}`;

  return (
    <section className="mx-auto w-full max-w-5xl px-2 sm:px-4">
      <div className="mx-auto max-w-5xl text-center">
        <div className="grid items-center gap-2 py-2 sm:-mt-2 sm:grid-cols-[1fr,1fr] sm:gap-2 sm:py-4">
          <div className="mx-auto w-full max-w-[435px] sm:ml-auto sm:mr-1">
            <img src={coupleSrc} alt="Couple picture" className="h-auto w-full object-cover" />
          </div>
          <div className="mx-auto w-full max-w-[780px] sm:ml-1 sm:mr-auto">
            <img src={namesAndVerseSrc} alt="Couple names and verse" className="h-auto w-full" />
          </div>
        </div>
        <div className="mx-auto mt-6 flex min-h-[120px] w-full max-w-3xl items-center justify-center px-6 py-6">
          <p className="max-w-2xl text-center text-[17px] font-semibold leading-relaxed text-black">
            We are very blessed to share our memorable day with you. As we prepare to begin our
            life together, your presence is the greatest gift of all! We can&apos;t wait to
            celebrate this new chapter with our dearest family and friends.
          </p>
        </div>

        <div className="mt-4 text-center">
          <h2 className="text-[35px] font-semibold leading-tight text-[#541a28] sm:text-[43px]">
            Sunday, May 17, 2026
            <br />
            Skyline Church
          </h2>
          <p className="mt-2 text-[17px] font-medium text-black">
            12450 Skyline Blvd, Oakland, CA 94619
          </p>
        </div>

        <div className="mx-auto mt-8 w-full max-w-[896px]">
          <img src={venueSrc} alt="Skyline Church interior" className="h-auto w-full object-cover" />
        </div>
        <div className="mx-auto mt-8 w-full max-w-[896px]">
          {mapsApiKey ? (
            <iframe
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src={mapSrc}
              title="Skyline Church location map"
            />
          ) : (
            <p className="text-[16px] font-medium text-[#541a28]">
              Add <code>GOOGLE_MAPS_EMBED_API_KEY</code> in <code>.env.local</code> to display the map.
            </p>
          )}
        </div>
        <p className="mt-8 text-[17px] font-semibold text-black">
          The Wedding Ceremony begins at 4:00 PM
          <br />
          Reception to Follow
        </p>
      </div>
    </section>
  );
}
