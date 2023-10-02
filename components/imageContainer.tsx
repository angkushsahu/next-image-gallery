import type { Photo } from "@/models/images";
import Image from "next/image";

export interface ImageContainerProps {
   photo: Photo;
}

export default function ImageContainer({ photo }: ImageContainerProps) {
   return (
      <div className="h-64 bg-gray-200 rounded-xl">
         <Image src={photo.src.large} alt={photo.alt} width="250" height="250" />
      </div>
   );
}
