import Nav from "../components/Nav";
import CallToAction from "../components/CallToAction";
import Specials from "../components/Specials";
import CustomersSay from "../components/CustomersSay";
import Chicago from "../components/Chicago";

function Homepage() {
  return (
    <main className="homepage">
      <Nav />
      <CallToAction />
      <Specials />
      <CustomersSay />
      <Chicago />
    </main>
  );
}

export default Homepage;