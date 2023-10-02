import Gallery from "@/components/gallery";

export interface ResultsProps {
   params: {
      term: string;
   };
}

export function generateMetadata({ params: { term } }: ResultsProps) {
   return { title: `Results for ${term}` };
}

export default function Results({ params: { term } }: ResultsProps) {
   return <Gallery term={term} />;
}
