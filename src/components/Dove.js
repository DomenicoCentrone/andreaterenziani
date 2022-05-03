import Contattaci from "../Views/Contattaci";
import Servizi from "../Views/Servizi";
import Dovesiamo from "../Views/Dovesiamo";
import Brand from "../Views/Brand";

function Home() {
    return (
        <>
        <Dovesiamo />
        <Contattaci />
        <Servizi />
        <Brand />
        </>
    );
}

export default Home;