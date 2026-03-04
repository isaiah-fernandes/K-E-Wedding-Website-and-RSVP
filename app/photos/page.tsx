import { getWeddingAssetUrl } from "@/lib/weddingAssets";

export default async function PhotosPage() {
  const photoNames = [
    "En pic 1.jpg",
    "En pic 2.jpg",
    "En pic 3.jpg",
    "En pic 4.jpg",
    "En pic 5.jpg",
    "En pic 6.jpg",
    "En pic 7.jpg"
  ] as const;

  const photoSrc = await Promise.all(photoNames.map((photoName) => getWeddingAssetUrl(photoName)));

  return (
    <section className="relative left-1/2 right-1/2 mx-auto w-screen max-w-none -ml-[50vw] -mr-[50vw] bg-[#ece8e6] px-4 py-8 sm:px-8 sm:py-10">
      <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-5 sm:gap-7">
        <div className="grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-3 sm:gap-5">
          {photoSrc.slice(0, 3).map((src, index) => (
            <img
              key={photoNames[index]}
              src={src}
              alt={`Engagement photo ${index + 1}`}
              className="h-[560px] w-[375px] object-cover sm:h-[510px] sm:w-[340px] md:h-[600px] md:w-[400px]"
            />
          ))}
        </div>

        <div className="flex justify-center">
          <img
            src={photoSrc[3]}
            alt="Engagement group photo"
            className="h-[390px] w-[560px] object-cover sm:h-[450px] sm:w-[660px] md:h-[510px] md:w-[770px]"
          />
        </div>

        <div className="grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-3 sm:gap-5">
          {photoSrc.slice(4).map((src, index) => (
            <img
              key={photoNames[index + 4]}
              src={src}
              alt={`Engagement photo ${index + 5}`}
              className="h-[560px] w-[375px] object-cover sm:h-[510px] sm:w-[340px] md:h-[600px] md:w-[400px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
