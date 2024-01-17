import FavoritesProvider from "Contexts/Favorites";
import Base from "components/Base";
import Footer from "components/Footer";
import Header from "components/Header";
import { Outlet } from "react-router-dom";

const BasicPage = () => {
    return(
        <main>
            <Header />
                <FavoritesProvider>
                    <Outlet/>
                </FavoritesProvider>
            
        </main>

    )
}

export default BasicPage;