import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./routes";
import {SHOP_ROUTE} from "../utils/consts";
import {Context} from "../index";

const AppRouter = () => {
    const { user } = React.useContext(Context);
    const isAuth = user.isAuth;
    return (
        <Routes>
            {isAuth && privateRoutes.map(({ path, Component}) =>
                <Route
                    key={path}
                    path={path} exact
                    element={<Component/>}
                />
            )}

            {publicRoutes.map(({ path, Component}) =>
                <Route
                    key={path}
                    path={path} exact
                    element={<Component/>}
                />
            )}

            <Route path={"*"} element={<Navigate to={SHOP_ROUTE} />}/>

        </Routes>
    );
};

export default AppRouter;