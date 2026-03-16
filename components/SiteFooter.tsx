import { getWeddingAssetUrl, weddingAssetNames } from "@/lib/weddingAssets";
import { FooterHomeBar } from "@/components/FooterHomeBar";

export async function SiteFooter() {
  const logoSrc = await getWeddingAssetUrl(weddingAssetNames.logo);

  return (
    <footer className="mx-auto -mt-2 w-full max-w-5xl py-8 sm:-mt-1">
      <div className="border-t-2 border-[#541a28] pt-6">
        <FooterHomeBar />
        <div className="mb-8 text-center font-['Bell_MT','Times_New_Roman',serif] text-xl font-semibold text-[#541a28] sm:mb-10 sm:text-2xl">
          <p>Thank you for celebrating with us</p>
        </div>
        <div className="flex justify-center">
          <img src={logoSrc} alt="K and E monogram logo" className="h-auto w-auto max-h-[340px]" />
        </div>
      </div>
    </footer>
  );
}
          <p>Kelvin &amp; Ella&apos;s wedding weekend</p>
