import { Head } from './Header.styles';

const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

function Header() {
    return (
        <Head justify="center" align="center" onClick={goToTop}>
            Todo App
        </Head>
    );
}

export default Header;
