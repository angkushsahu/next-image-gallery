import { addBlurredDataUrls, fetchImages } from "@/lib";
import type { ImageResults } from "@/models/images";
import ImageContainer from "./imageContainer";

export interface GalleryProps {
   term: string | undefined | null;
}

export default async function Gallery({ term }: GalleryProps) {
   const url = `https://api.pexels.com/v1/${term ? `search?query=${term}` : "curated"}`;
   const images: ImageResults | undefined = await fetchImages(url);
   if (!images) return <h2 className="m-4 text-2xl font-bold">No Images Found!!</h2>;

   const photosWithBlur = await addBlurredDataUrls(images);

   return (
      <section className="px-2 my-3 grid gap-2 grid-cols-gallery">
         {photosWithBlur.map((photo) => (
            <ImageContainer key={photo.id} photo={photo} />
         ))}
      </section>
   );
}
