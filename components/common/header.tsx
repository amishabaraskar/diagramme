import { Workflow } from "lucide-react";
// import NavLink from "next/NavLink";
import NavLink from "./navlink";
import { Button } from "../ui/button";

function Header() {
  let isloggedin = true;
  return (
    <nav className="container flex items-center justify-between py-4 lg:py-6 px-2 mx-auto">
      <div className="flex lg:flex-1">
        <NavLink href="/" className="flex items-center gap-1 lg:gap-2 shrink-0">
          <Workflow className="w-5 h-5 lg:w-8 lg:h-8 text-gray-800 hover:rotate-12 transform transition duration-200" />
          <span className="font-extrabold lg:text-xl text-gray-900">
            Diagramme
          </span>
        </NavLink>
      </div>
      <div className="flex lg:justify-center gap-4 lg:gap-12  lg:items-center">
        <NavLink href="/#pricing">Pricing</NavLink>
        {isloggedin && <NavLink href="/dashboard">Your Flowcharts</NavLink>}
      </div>
      <div className="flex lg:justify-end lg:flex-1">
        {isloggedin ? (
          <div className="flex gap-2 items-center">
            <NavLink href="/generate">Generate a flowchart</NavLink>
            <div>Pro</div>
            <Button>User</Button>
          </div>
        ) : (
          <NavLink href="/sign-in">Sign In</NavLink>
        )}
      </div>
    </nav>
  );
}

export default Header;
