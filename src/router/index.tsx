import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MainLayout from "layouts";

import HomePage from "pages/home.page";
import UnderConstructionPage from "pages/construction.page";
import NotFoundPage from "pages/404.page";

const Router = () => {
    return (
        <BrowserRouter>
            <Suspense fallback="Page Loading">
                <Switch>
                    <Route exact={true} path="/">
                        <MainLayout>
                            <HomePage />
                        </MainLayout>
                    </Route>
                    <Route
                        exact={true}
                        path="/:id/learn"
                        component={UnderConstructionPage}
                    />
                    <Route
                        exact={true}
                        path="/:id/shop"
                        component={UnderConstructionPage}
                    />
                    <Route path="*" component={NotFoundPage} />
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
};

export default Router;
