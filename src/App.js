import { loader, LoaderContainer } from "react-global-loader";
import { Circles } from "react-loader-spinner";
import "./App.css";

function App() {
  const showDefaultLoader = () => {
    loader.show();
    setTimeout(() => {
      loader.hide();
    }, 3000);
  };

  const showAutoLoader = () => {
    loader.show({ id: "rgl-auto-loader" });
  };

  const showCustomLoader = () => {
    loader.show({ id: "custom-loader" });
  };

  const showLoaderSpinner = () => {
    loader.show({ id: "react-loader-spinner" });
  };

  return (
    <div className="App">
      <h2>react-global-loader</h2>
      {/* Default Loader */}
      <LoaderContainer />

      {/* Auto Hiding Loader */}
      <LoaderContainer
        id="rgl-auto-loader"
        autoHide={true}
        hideDuration={3000}
        defaultText="Auto Loader Customer Text"
        backgroundColor="green"
      />

      {/* Auto Hiding Loader */}
      <LoaderContainer
        id="custom-loader"
        backgroundColor="rgb(39, 39, 39)"
        opacity={1}
      >
        <div className="custom-loader">
          <p>Custom Loader Text</p>
          <button onClick={() => loader.hide({ id: "custom-loader" })}>
            Click here to close
          </button>
        </div>
      </LoaderContainer>

      {/* Auto Hiding Loader */}
      <LoaderContainer
        id="react-loader-spinner"
        backgroundColor="white"
        opacity={1}
      >
        <div className="loader-spinner">
          <Circles
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
          <div onClick={() => loader.hide({ id: "react-loader-spinner" })}>
            Click to close
          </div>
        </div>
      </LoaderContainer>

      <div className="buttons">
        <button onClick={() => showDefaultLoader()}>Show Default Loader</button>
        <button onClick={() => showAutoLoader()}>Show Auto Loader</button>
        <button onClick={() => showCustomLoader()}>Show Custom Loader</button>
        <button onClick={() => showLoaderSpinner()}>Show Loader Spinner</button>
      </div>
    </div>
  );
}

export default App;
