'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

  return (
    <div
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
  >
    <Menu setActive={setActive}>
        <Link href={"/"}>
        <MenuItem setActive={setActive} active={active} item='Algo Trading'>
        <div className="flex flex-col space-y-4 text-sm">
        <HoveredLink href="/backtest">Backtest</HoveredLink>
        <HoveredLink href="/AlgoTrade">Algo Trade</HoveredLink>
        <HoveredLink href="/ForwardTest">FOrward Test</HoveredLink>

        </div>
         </MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item='Discretionary'>
        <div className="flex flex-col space-y-4 text-sm">
        <HoveredLink href="/web-dev">Strategy Builder</HoveredLink>
        <HoveredLink href="/web-dev">Simulator</HoveredLink>

        </div>

         </MenuItem>
         <MenuItem setActive={setActive} active={active} item='Indicator Algo'>
        <div className="flex flex-col space-y-4 text-sm">
        <HoveredLink href="/web-dev">TradingView Signals</HoveredLink>
        <HoveredLink href="/web-dev">Chartink Signals</HoveredLink>
        <HoveredLink href="/web-dev">Custom Scripts</HoveredLink>

        


        </div>

         </MenuItem>
         <Link href={"/docs"}>
        <MenuItem setActive={setActive} active={active} item='Tools'>
        <div className="flex flex-col space-y-4 text-sm">
        <HoveredLink href="/web-dev">Margin Calculator</HoveredLink>
        <HoveredLink href="/web-dev">Daily Trades Analysis</HoveredLink>
        <HoveredLink href="/web-dev">Option Charts</HoveredLink>
        <HoveredLink href="/web-dev">Heatmap</HoveredLink>

        </div>
         </MenuItem>
        </Link>
        <Link href={"/Carrer"}>
        <MenuItem setActive={setActive} active={active} item='Pricing'>
         </MenuItem>
        </Link>
       
        </Menu>        
        </div>
  )
}

export default Navbar