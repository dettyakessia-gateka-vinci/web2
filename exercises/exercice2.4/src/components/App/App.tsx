import Movie from "../type";
import Cinema from "../Cinema";
import PageTitle from "../PageTitle";
import Header from "../Header";
import Footer from "../Footer";

const App = () => {
  const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC DeBrouckère";

  const moviesCinema1: Movie[] = [
    {
      title: "HAIKYU-THE DUMPSTER BATTLE",
      director: "Susumu Mitsunaka",
    },
    {
      title: "GOODBYE JULIA",
      director: "Mohamed Kordofani",
    },
    {
      title: "INCEPTION",
      director: "Christopher Nolan",
    },
    {
      title: "PARASITE",
      director: "Bong Joon-ho",
    },
  ];

  const cinema2Name = "UGC Toison d'Or";

  const moviesCinema2: Movie[] = [
    {
      title: "THE WATCHERS",
      director: "Ishana Night Shyamalan",
    },
    {
      title: "BAD BOYS: RIDE OR DIE",
      director: "Adil El Arbi, Bilall Fallah",
    },
    {
      title: "TENET",
      director: "Christopher Nolan",
    },
    {
      title: "THE IRISHMAN",
      director: "Martin Scorsese",
    },
  ];


  return (
    <div>
      <Header image={"https://images.unsplash.com/photo-1728985630341-075aa9277eda?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} >
        <p>Bienvenue sur notre site de cinéma</p>
      </Header>
      <PageTitle title={pageTitle} />
      

      <Cinema title={cinema1Name} movies={moviesCinema1} />

      <Cinema title={cinema2Name} movies={moviesCinema2} />
      <Footer image={"https://images.unsplash.com/photo-1728985630341-075aa9277eda?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}>
        <p> Merci de votre visite </p>
      </Footer>
    </div>
  );
};
export default App;