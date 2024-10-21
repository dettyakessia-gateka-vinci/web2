import { User } from "../../../types";
import Footer from "../Footer";
import Header from "../Header";
import Main from "../Main";


const App = () => {
  const title = "Welcome to My App";
  const Users: User[] = [
    {
      name: "Alice",
      age: 25,
    },
    {
      name: "Bob",
      age: 30,
    },
    {
      name: "Charlie",
      age: 35,
    }

  ]


const footerText = "© 2023 My App";

  return (
    <div>
      <Header title={title} />
      <Main users={Users} />
      <Footer text={footerText} />
    </div>
  );
};

export default App;
