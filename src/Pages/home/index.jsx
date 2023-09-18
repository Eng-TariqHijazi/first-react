import Header from "../../components/header";
import Footer from "../../components/footer";
import "./style.css";
import Card from "../../components/card";
import img1 from "../../assets/4.png";
import img2 from "../../assets/5.png";
import img3 from "../../assets/6.png";
const Home = () => {
  return (
    <div className="home">
      <Header active={"home"} />
      <div className="container">
        <div className="list">
          <Card
            img={img1}
            title={"israa"}
            text={"Lorem ipsum dolor sit amet. "}
            titleBtn={"card 1"}
            active={true}
          />
          <Card
            img={img2}
            title={"Shahed"}
            text={"Lorem ipsum dolor sit amet. dolor sit"}
            titleBtn={"card 2"}
          />
          <Card
            img={img3}
            title={"Tasneem"}
            text={"Lorem ipsum dolor sit ametdolor sitdolor sitdolor sit. "}
            titleBtn={"card 3"}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
