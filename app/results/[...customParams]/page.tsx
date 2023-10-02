import Gallery from "@/components/gallery";

export interface ResultsProps {
   params: {
      customParams: Array<string | undefined>;
   };
}

export function generateMetadata({ params: { customParams } }: ResultsProps) {
   const term = customParams?.[0] ?? "curated";
   const page = customParams?.[1] ?? "1";

   return { title: `Results for ${term} - Page ${page}` };
}

export default function Results({ params: { customParams } }: ResultsProps) {
   const term = customParams?.[0] ?? "curated";
   const page = customParams?.[1] ?? "1";

   return <Gallery term={term} page={page} />;
}
