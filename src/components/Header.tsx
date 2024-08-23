import Logo from "./Logo";
import Logotype from "./Logotype";
import TopNav from "./TopNav";
import TopSearch from "./TopSearch";
import UserActions from "./UserActions";

export default function Header() {
  return (
    <>
      <header className="
        flex
        flex-row
      ">
        <div className="
          flex
          flex-row
          items-center
          justify-center
          gap-16
          basis-4/5
          mb-16
        ">
          <Logotype />
          <TopSearch />
          <UserActions />
        </div>
        <div className="
          basis-1/5
        ">
          <Logo />
        </div>
      </header>
      <TopNav />
    </>
  )
}
