import Link from 'next/link';
import Image from 'next/image';
import Logo from '../public/logo.png'

const Header = () => {
    return(
        <div className="flex justify-between p-11">
            <Image className="" src={Logo} width={100} height={37}></Image>
            <div className="mt-3">
                <Link href="../pages/api.tsx">
                    <a className="ml-5">داکیومنت</a>
                </Link>&nbsp;
                <Link href="https://github.com/mutt-ir">
                    <a className="ml-5">گیتهاب</a>
                </Link>&nbsp;
                <Link href="">
                    <a className="">دارک مود</a>
                </Link>
            </div>
        </div>
    )
}

export default Header;