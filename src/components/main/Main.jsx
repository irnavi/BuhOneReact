import SecOurClients from "../secClients/SecOurClients";
import SecReviews from "../secReviews/SecReviews";
import SectionAbout from "../secAbout/SectionAbout";
import SectionHome from "../secHome/SectionHome";
import SectionService from "../secService/SectionService";

function Main() {
  return (
    <main>
      <SectionHome />
      <SectionService />
      <SectionAbout />
      <SecOurClients />
      <SecReviews />
    </main>
  );
}

export default Main;
