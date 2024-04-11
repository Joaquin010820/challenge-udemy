import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";

export default function App() {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,300;0,400;0,500;1,300&display=swap');
          body {
            font-family: 'Roboto Mono', monospace;
          }
        `}
      </style>
      <div className="container">
        <Header />
        <Menu />
        <Footer />
      </div>
    </>
  );
}
