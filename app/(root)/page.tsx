import { SearchParams } from "next/dist/server/request/search-params";
import SearchForm from "../components/SearchForm";




export default async function Home({ searchParams }) {
  const query=(await searchParams).query
  
  

  return (
       <>
        <section className="pink_container">
        <h1 className="heading">Pitch your startup,<br></br>Connect With Entrepreneuers</h1>
      <p className="sub-heading !max-w-3xl">Submit Ideas,Vote On Pitches,and Get Noticed in Virtual competition</p>
      <SearchForm query={query}></SearchForm>
      </section>

      <section className="section_container">
        <p className="text-nunito text-30-semibold">
      {query?`Search Result for "${query}"`:'All startups'}
        </p>
        <ul className="mt-7 card_grid">

        </ul>
      </section>
       </>
  );
}
