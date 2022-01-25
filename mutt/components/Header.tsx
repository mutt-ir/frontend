import Link from 'next/link';

const Header = () => {
    return(
        <div>
            <Link href="../pages/api.tsx">
                <a className="text-slate-900 no-underline">داکیومنت</a>
            </Link>
            <Link href="https://github.com/mutt-ir">
                <a className="text-slate-900 no-underline">گیتهاب</a>
            </Link>
        </div>
    )
}

export default Header;