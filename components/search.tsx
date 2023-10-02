"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
   const [search, setSearch] = useState("");
   const router = useRouter();

   function handleSearch(e: FormEvent) {
      e.preventDefault();
      if (search) router.push(`/results/${search}`);
   }

   return (
      <form onSubmit={handleSearch} className="flex justify-center md:justify-between">
         <input
            type="text"
            name="search"
            id="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search ...."
            className="bg-white p-2 w-[16.25rem] sm:w-80 text-xl rounded-xl text-black"
         />
      </form>
   );
}
