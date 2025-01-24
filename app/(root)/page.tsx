import { SearchParams } from "next/dist/server/request/search-params";
import SearchForm from "../components/SearchForm";
import StartupCard from "../components/StartupCard";




export default async function Home({ searchParams }) {
  const query=(await searchParams).query
  
  const posts=[
    {
    _createdAt:new Date(),
    views:55 ,
    author:{_id:1,name:"Rahim"},
    description:"this is a description",
    image:"https://th.bing.com/th/id/OIP.MjdrtVOtV_Fp5yy_CgxXlAHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain",
    category:"Robots",
    title:"we Robots",
    _id:1
  },
]

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
          {posts?.length>0?(
            posts.map((post:StartupCardType,index:number)=>(
              <StartupCard key={post?._id} post={post}></StartupCard>
            ))
          ):<p className="no-results">No startups found</p>}
        </ul>
      </section>
       </>
  );
}
