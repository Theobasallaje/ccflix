import "./App.css";
import data from "./movies";
// import image from "./assets/3_10_To_Yuma.jpg";

function App() {
  console.log(data);
  return (
    <>
      <div className="movieContainer">
        {/* <img src={Movies.Three_Ten_To_Yuma} alt='3:10 To Yuma' /> */}
        {/* <img src={image} alt='3:10 To Yuma' /> */}
        {/* <img src={require('./assets/13_Hours.jpg')} alt='3:10 To Yuma' /> */}
        {/* <img src={'./assets/13_Hours.jpg'} alt='3:10 To Yuma' /> */}
        {/* <img src={`${process.env.PUBLIC_URL}/assets/images/uc-white.png`} alt='3:10 To Yuma' /> */}
        {/* {data.Movies.map(
          ({ movie, i }) => console.log(movie)
          // <img key={movie.id} src={movie.src} title={movie.title} alt={movie.description} />
        )} */}
        {data.Movies.map((movie, i) => {
          return (
            <div key={i}>
              <img src={`${process.env.PUBLIC_URL}/assets/images/${movie.src}`} alt={movie.description} />
            </div>
          );
        })}
      </div>
      {/* <div>
        {data.Experiences.map((experience, i) => {
          return (
            <div key={i}>
              <div>
                <a href={experience.url}>
                  <img src={experience.logo} alt={experience.companyName} />
                </a>
                <div>
                  <div>
                    <a href={experience.url}>{experience.companyName}</a>
                  </div>
                  {experience.roles.map(function (role, i) {
                    return (
                      <div key={i}>
                        <h5>{role.title}</h5>
                        <span>{role.startDate}</span>
                        <span>{role.location}</span>
                        <p>{role.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div> */}
    </>
  );
}

export default App;
