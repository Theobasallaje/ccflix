import "./App.css";
import Movies from "./movies.js";
import image from "./assets/3_10_To_Yuma.jpg";

function App() {
  console.log(Movies);
  return (
    <div className="movieContainer">
      {/* <img src={Movies.Three_Ten_To_Yuma} alt='3:10 To Yuma' /> */}
      {/* <img src={image} alt='3:10 To Yuma' /> */}
      <img src={require('./assets/13_Hours.jpg')} alt='3:10 To Yuma' />
      {Movies.map(({ id, src, title, description }) => (
        <img key={id} src={src} title={title} alt={description} />
      ))}
    </div>
  );
}

export default App;
