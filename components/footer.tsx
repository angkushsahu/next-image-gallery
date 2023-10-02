import Link from "next/link";

export interface FooterProps {
   term: string | null | undefined;
   page: string | null | undefined;
   nextPage: string | null | undefined;
   prevPage: string | null | undefined;
}

export default function Footer({ nextPage, page, prevPage, term }: FooterProps) {
   if (!nextPage && !prevPage) return null;

   const pageNumbers: Array<number> = [];
   if (nextPage && prevPage) {
      for (let i = parseInt(prevPage) + 1; i < parseInt(nextPage); i++) pageNumbers.push(i);
   }

   const nextPageArea = nextPage ? (
      <Link href={`/results/${term}/${nextPage}`} className={prevPage ? "" : "mx-auto"}>
         {prevPage ? null : "more"} &gt;&gt;
      </Link>
   ) : null;

   const prevPageArea = prevPage ? (
      <>
         <Link href={`/results/${term}/${nextPage}`} className={nextPage ? "" : "mx-auto"}>
            &lt;&lt; {nextPage ? null : "back"}
         </Link>
         {pageNumbers.map((num) =>
            page && num === parseInt(page) ? (
               num
            ) : (
               <Link key={num} href={`/results/${term}/${num}`} className="underline">
                  {num}
               </Link>
            )
         )}
      </>
   ) : null;

   return (
      <footer className="flex flex-row justify-between items-center px-2 py-4 font-bold w-60 mx-auto">
         {prevPageArea}
         {nextPageArea}
      </footer>
   );
}
