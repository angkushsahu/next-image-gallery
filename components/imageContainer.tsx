import Link from "next/link";
import Image from "next/image";
import type { Photo } from "@/models/images";

export interface ImageContainerProps {
   photo: Photo;
}

export default function ImageContainer({ photo }: ImageContainerProps) {
   const widthHeightRatio = photo.height / photo.width;
   const galleryHeight = Math.ceil(250 * widthHeightRatio);
   const photoSpan = Math.ceil(galleryHeight / 10) + 1;

   return (
      <div className="w-[15.625rem] justify-self-center" style={{ gridRow: `span ${photoSpan}` }}>
         <Link href={photo.url} target="_blank" className="grid place-content-center">
            <div className="rounded-xl overflow-hidden group">
               <Image
                  src={photo.src.large}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="15.625rem"
                  className="group-hover:opacity-75"
                  placeholder="blur"
                  blurDataURL={photo.blurredDataUrl}
               />
            </div>
         </Link>
      </div>
   );
}
