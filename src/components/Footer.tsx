import AltUserActions from "./AltUserActions";
import BottomAbout from "./BottomAbout";
import BottomContact from "./BottomContact";

export default function Footer() {
  return (
    <footer className="
      flex
      flex-row
      bg-gradi
      text-lightprim
      items-center
      pr-10
      mt-12
    ">
      <BottomAbout />
      <AltUserActions />
      <BottomContact />
    </footer>
  )
}
