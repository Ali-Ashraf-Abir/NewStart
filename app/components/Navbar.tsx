import { auth, signIn, signOut } from '@/auth'
import Link from 'next/link'

async function Navbar() {

    const session = await auth()

    return (
        <div className='px-5 py-3 bg-white shadow-sm font-nunito text-black font-semi-bold'>
            <nav className='flex justify-between items-center'>
                <Link href='/' className='text-[4vh] text-black'>NewStart</Link>
                <div className="flex items-center gap-5">
                    {session && session?.user ? (
                        <>
                            <Link href='/startup/create'>
                                <span>Create</span>
                            </Link>
                            <Link href={`/user/${session?.user?.name}`}>{session.user.name}</Link>
                            <form action={async()=>{
                                "use server";
                                await signOut();
                            }}><button type='submit'>Logout</button></form>
                        </>
                    ) :<div className="relative flex flex-col items-center group">
                    {/* Login Button */}
                    <div className="login cursor-pointer px-3 py-4 bg-gray-100 rounded">Login</div>
                  
                    {/* Dropdown */}
                    <div className="drop hidden group-hover:flex flex-col absolute top-full mt-0 bg-white rounded-lg shadow-lg px-3 py-3 text-center">
                      {/* Google Form */}
                      <form
                        className="hover:bg-gray-200 px-3 py-2 rounded transition-colors"
                        action={async () => {
                          "use server";
                          await signIn("google");
                        }}
                      >
                        <button type="submit" className="w-full text-black">
                          Google
                        </button>
                      </form>
                  
                      {/* GitHub Form */}
                      <form
                        className="hover:bg-gray-200 px-3 py-2 mt-2 rounded transition-colors"
                        action={async () => {
                          "use server";
                          await signIn("github");
                        }}
                      >
                        <button type="submit" className="w-full text-black">
                          GitHub
                        </button>
                      </form>
                    </div>
                  </div>
                  
                   }
                </div>
            </nav>
        </div>
    )
}

export default Navbar