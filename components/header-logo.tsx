import Link from "next/link"
import Image from "next/image"

const HeaderLogo = () => {
  return (
    <Link href="/">
        <div className='items-center hidden lg:flex'>
            <Image src="/logo.svg" height={28} width={28} alt="Logo" />
            <p className='font-semibold text-white text-2xl ml-2.5'>Finance App</p>
        </div>
    </Link>
  )
}

export default HeaderLogo