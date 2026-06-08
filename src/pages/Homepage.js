import Nav from "../components/Nav";
import CallToAction from "../components/CallToAction";
import Specials from "../components/Specials";
import CustomersSay from "../components/CustomersSay";
import Chicago from "../components/Chicago";
import BookingForm from "../components/BookingForm";

function Homepage() {
  return (
    <main className="homepage">
      <Nav />
      <CallToAction />
      <Specials />
      <CustomersSay />
      <Chicago />
      <BookingForm/>
    </main>
  );
}

export default Homepage;