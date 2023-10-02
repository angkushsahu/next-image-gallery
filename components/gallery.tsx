import fetchImages from "@/lib/fetchImages";
import ImageContainer from "./imageContainer";
import type { ImageResults } from "@/models/images";

export default async function Gallery() {
   const url = "https://api.pexels.com/v1/curated";
   const images: ImageResults | undefined = await fetchImages(url);
   if (!images) return <h2 className="m-4 text-2xl font-bold">No Images Found!!</h2>;

   return (
      <section className="px-2 my-3 grid gap-2 grid-cols-gallery">
         {images.photos.map((photo) => (
            <ImageContainer key={photo.id} photo={photo} />
         ))}
      </section>
   );
}
