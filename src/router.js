import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Main } from './pages/Main/Main';
import { Catalog } from './pages/Catalog/Catalog';
import { About } from './pages/About/About';
import { Delivery } from './pages/Delivery/Delivery';
import { Shops } from './pages/Shops/Shops';
import { Contacts } from './pages/Contacts/Contacts';
import { Favorites } from './pages/Favorites/Favorites';
import { Cart } from './pages/Cart/Cart';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                index: true,
                element: <Main/>
            },
            {
                path: 'catalog',
                element: <Catalog/>
            },
            {
                path: 'about',
                element: <About/>
            },
            {
                path: 'delivery',
                element: <Delivery/>
            },
            {
                path: 'shops',
                element: <Shops/>
            },
            {
                path: 'contacts',
                element: <Contacts/>
            },
            {
                path: 'favorites',
                element: <Favorites/>
            },
            {
                path: 'cart',
                element: <Cart/>
            }
        ],
    }
])
