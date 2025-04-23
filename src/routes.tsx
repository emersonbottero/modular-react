import { createRootRoute, createRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Page from "./components/page";
// import Map from "./map"
import { Module } from "./types";

const routes = import.meta.glob('./modules/**/module.tsx', { eager: true }) as Record<string, {default : Module<any>}>;


export const rootRoute = createRootRoute({
    component: () => (<>
    <Page routes={Object.values(routes).map(r => r.default)}/>

    <TanStackRouterDevtools />
    </>)
});

const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: () => <div>Index</div>
})

export const routeTree = rootRoute.addChildren([indexRoute, ...Object.values(routes).map(r => r.default.route)]);