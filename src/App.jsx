import "./App.css";
import Card from "./components/Card/component.jsx";
import girl_photo from "./assets/images/girl_photo.jpg";
import man_photo from "./assets/images/man_photo.jpg";

function App() {
  return (
    <>
      <div className="container">
        <Card
          title={"Jane Doe"}
          photo={girl_photo}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."
          }
        />
        <Card
          title={"John Doe"}
          photo={man_photo}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."
          }
        />
      </div>
    </>
  );
}

export default App;
