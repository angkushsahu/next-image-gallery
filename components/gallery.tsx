import { addBlurredDataUrls, fetchImages, getPrevNextPage } from "@/lib";
import type { ImageResults } from "@/models/images";
import ImageContainer from "./imageContainer";
import Footer from "./footer";

export interface GalleryProps {
   term?: string | undefined | null;
   page?: string | undefined | null;
}

export default async function Gallery({ page = "1", term = "curated" }: GalleryProps) {
   let url = "";
   const mainUrl = "https://api.pexels.com/v1";

   if (term === "curated" && page) url = `${mainUrl}/curated?page=${page}`;
   else if (term === "curated") url = `${mainUrl}/curated`;
   else if (!page) url = `${mainUrl}/search?query=${term}`;
   else url = `${mainUrl}/search?query=${term}&page=${page}`;

   const images: ImageResults | undefined = await fetchImages(url);
   if (!images || !images.per_page) return <h2 className="m-4 text-2xl font-bold">No Images Found!!</h2>;

   const photosWithBlur = await addBlurredDataUrls(images);

   const { nextPage, prevPage } = getPrevNextPage(images);
   const footerProps = { term, page, nextPage, prevPage };

   return (
      <>
         <section className="px-1 my-3 grid grid-cols-gallery auto-rows-[0.625rem]">
            {photosWithBlur.map((photo) => (
               <ImageContainer key={photo.id} photo={photo} />
            ))}
         </section>
         <Footer {...footerProps} />
      </>
   );
}
