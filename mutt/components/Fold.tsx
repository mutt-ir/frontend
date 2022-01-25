import Header from './Header'
import Main from './Main'
import Footer from './Footer'
const Fold = (props: any) => {
    return(
        <div>
            <Header />
            <Main />
            {props.children}
            <Footer />
        </div>
    )
}

export default Fold;