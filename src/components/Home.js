import Homepage from "../Views/Homepage";
import Contattaci from "../Views/Contattaci";
import Servizi from "../Views/Servizi";
import Azienda from "../Views/Azienda";
import Brand from "../Views/Brand";

function Home() {
    return (
        <>
        <Homepage />
        <Contattaci />
        <Azienda />
        <Servizi />
        <Brand />
        </>
    );
}

export default Home;