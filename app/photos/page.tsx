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
  const extraPhotoNames = [
    "EP 1.jpeg",
    "EP 2.jpeg",
    "EP 3.jpeg",
    "EP 4.jpeg",
    "EP 5.jpeg",
    "EP 6.jpeg",
    "EP 7.jpeg",
    "EP 8.jpeg",
    "EP 9.jpeg",
    "EP 10.jpeg",
    "EP 11.jpeg",
    "Ep 12.jpeg"
  ] as const;

  const photoSrc = await Promise.all(photoNames.map((photoName) => getWeddingAssetUrl(photoName)));
  const extraPhotoSrc = await Promise.all(extraPhotoNames.map((photoName) => getWeddingAssetUrl(photoName)));
  const portraitClassName =
    "h-[560px] w-[375px] object-cover sm:h-[510px] sm:w-[340px] md:h-[600px] md:w-[400px]";
  const landscapeClassName =
    "h-[390px] w-[560px] object-cover sm:h-[450px] sm:w-[660px] md:h-[510px] md:w-[770px]";

  return (
    <section className="relative left-1/2 right-1/2 mx-auto w-screen max-w-none -ml-[50vw] -mr-[50vw] bg-[#e6e1df] px-4 py-8 sm:px-8 sm:py-10">
      <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-5 sm:gap-7">
        <div className="grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-3 sm:gap-5">
          {photoSrc.slice(0, 3).map((src, index) => (
            <img
              key={photoNames[index]}
              src={src}
              alt={`Engagement photo ${index + 1}`}
              className={portraitClassName}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <img
            src={photoSrc[3]}
            alt="Engagement group photo"
            className={landscapeClassName}
          />
        </div>

        <div className="grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-3 sm:gap-5">
          {photoSrc.slice(4).map((src, index) => (
            <img
              key={photoNames[index + 4]}
              src={src}
              alt={`Engagement photo ${index + 5}`}
              className={portraitClassName}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-3 sm:gap-5">
          {extraPhotoSrc.slice(0, 3).map((src, index) => (
            <img
              key={extraPhotoNames[index]}
              src={src}
              alt={`Extra engagement photo ${index + 1}`}
              className={portraitClassName}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 items-center justify-items-center gap-4 sm:grid-cols-3 sm:gap-5">
          <img src={extraPhotoSrc[3]} alt="Extra engagement photo 4" className={portraitClassName} />
          <img src={extraPhotoSrc[4]} alt="Extra engagement photo 5" className={landscapeClassName} />
          <img src={extraPhotoSrc[5]} alt="Extra engagement photo 6" className={portraitClassName} />
        </div>

        <div className="grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-3 sm:gap-5">
          {extraPhotoSrc.slice(6, 9).map((src, index) => (
            <img
              key={extraPhotoNames[index + 6]}
              src={src}
              alt={`Extra engagement photo ${index + 7}`}
              className={portraitClassName}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 items-center justify-items-center gap-4 sm:grid-cols-3 sm:gap-5">
          <img src={extraPhotoSrc[9]} alt="Extra engagement photo 10" className={portraitClassName} />
          <img src={extraPhotoSrc[10]} alt="Extra engagement photo 11" className={landscapeClassName} />
          <img src={extraPhotoSrc[11]} alt="Extra engagement photo 12" className={portraitClassName} />
        </div>
      </div>
    </section>
  );
}
