import { auth, signIn, signOut } from '@/auth'
import Link from 'next/link'
import React from 'react'

async function Navbar() {

    const session = await auth()


    return (
        <div className='px-5 py-3 bg-white shadow-sm font-work-sans text-black'>
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
                    ) : <form action={async () => {
                        "use server";
                        await signIn('github')
                    }}><button type='submit'>Login</button></form>}
                </div>
            </nav>
        </div>
    )
}

export default Navbar