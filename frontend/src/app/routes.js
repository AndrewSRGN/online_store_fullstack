import {ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import Admin from "../pages/Admin";
import Basket from "../pages/Basket";
import Shop from "../pages/Shop";
import DevicePage from "../pages/DevicePage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";


export const privateRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    }
];

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: LoginPage
    },
    {
        path: REGISTRATION_ROUTE,
        Component: RegistrationPage
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage
    },
]