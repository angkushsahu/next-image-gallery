import { type ImageResults, ImagesModelWithPhotos } from "@/models/images";

export default async function fetchImages(url: string): Promise<ImageResults | undefined> {
   try {
      const res = await fetch(url, {
         headers: {
            Authorization: process.env.PEXELS_API_KEY,
         },
      });

      if (!res.ok) throw new Error("Fetch images error!!");

      const imagesResults: ImageResults = await res.json();
      const parsedData = ImagesModelWithPhotos.parse(imagesResults);
      return parsedData.total_results ? imagesResults : undefined;
   } catch (error) {
      if (error instanceof Error) console.log(error.stack);
   }
}
