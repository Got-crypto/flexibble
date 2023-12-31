import { NavLinks } from "@/constants"
import { getCurrentUser } from "@/lib/session"
import Image from "next/image"
import Link from "next/link"
import AuthProviders from "./AuthProviders"
import Button from "./Button"
import ProfileMenu from "./ProfileMenu"

async function Navbar() {
    const session = await getCurrentUser()
  return (
    <nav className="flexBetween navbar">
        <div className="flex-1 flexStart gap-10">
            <Link href="/">
                <Image
                    src='/logo.svg'
                    height={43}
                    width={115}
                    alt='Flexibble'
                />
            </Link>
            <ul className="xl:flex hidden text-small gap-7">
                {NavLinks.map(link => (
                    <Link href={link.href} key={link.key}>{link.text}</Link>
                ))}
            </ul>
        </div>

        <div className="flexCenter gap-4">
            {session?.user ? (
                <>
                    <ProfileMenu session={session} />

                    <Link href='/create-project'>
                        <Button title='Share Work' />
                    </Link>
                </>
            ) : (
                <AuthProviders />
            )}
        </div>
    </nav>
  )
}

export default Navbar