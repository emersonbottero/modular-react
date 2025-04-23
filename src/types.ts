import { Route } from "@tanstack/react-router";
import React from "react";

export interface Module<T extends Route<any>> {
    name: string,
    icon: React.ReactNode,
    route: T ,
}