import { Header } from "@/components/header";
import { ReactNode } from "react";

interface StoreLayoutProps {

    children: ReactNode
}

export default function StroreLayout ({ children } : StoreLayoutProps) {

    return (
        <div className="mx-auto grid min-h-screen max-w-[1600px] grid-row-app gap-5 px-8 py-5">
            <Header />
            {children}
        </div>
    )
}