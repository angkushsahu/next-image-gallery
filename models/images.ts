import { z } from "zod";

const BasicImageModel = z.object({
   page: z.number(),
   per_page: z.number(),
   prev_page: z.string().optional(),
   next_page: z.string().optional(),
   total_results: z.number(),
});

const PhotoModel = z.object({
   id: z.number(),
   width: z.number(),
   height: z.number(),
   url: z.string(),
   src: z.object({
      large: z.string(),
   }),
   alt: z.string(),
   blurredDataUrl: z.string().optional(),
});

export const ImagesModelWithPhotos = BasicImageModel.extend({
   photos: z.array(PhotoModel),
});

export type Photo = z.infer<typeof PhotoModel>;
export type ImageResults = z.infer<typeof ImagesModelWithPhotos>;
