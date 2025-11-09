import { buttonVariants } from "@/components/ui/button"
import { LucideCookingPot } from "lucide-react";
import Link from "next/link"

const AppHeader = () => {
  return (
    
    <nav
      className="
        fixed left-0 right-0 top-0 z-10
        border-b w-full flex py-2.5 px-5 justify-between
      "
    >
      <div className="flex align-items gap-x-2">
        <Link
          href="/"
          className={buttonVariants({ variant: "ghost" })}
        >
          <LucideCookingPot />
          <h1 className="text-lg font-semibold">Exodus</h1>
        </Link>
      </div>
      <div className="flex align-items gap-x-2">
      </div>
    </nav>
  )
}

export default AppHeader;
