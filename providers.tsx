'use client';

import {Children} from "react";
import {ThemeProvider} from "@/theme-provider";
import theme from "tailwindcss/defaultTheme";

function Providers({children}: { children: React.ReactNode }) {
    return <>
        <ThemeProvider attribute='class' defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
        </ThemeProvider>

    </>;
}

export default Providers;