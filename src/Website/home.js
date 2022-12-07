import React from "react";
import { useNavigate } from "react-router-dom";
import HeroSection from "./Components/HeroSection";
import Nav from "./Components/navigation_menu";
import "./css/home.css";
import { Row, Col } from "react-bootstrap";
import VectorCircle from "../Website/Images/EllipseCircle.png";
import AppDownloadCTA from "./Components/AppDownloadCTA";
import WebLaptop from "./Images/Dell_Web_Platform.png";
import WebLaptoppng from "./Images/WebPlatformlaptop.png";
import portfoliodesign from "./Images/portfoliodesign.png";
import SUBfeatureicon1 from "./Images/nofeeicon.png";
import SUBfeatureicon2 from "./Images/Allinone.png";
import SUBfeatureicon3 from "./Images/Easytouse.png";
import SUBfeatureicon4 from "./Images/24-7.png";
import { motion } from "framer-motion";
import Footer from "./Components/Footer";
import { Link } from "react-router-dom";
import MoneyIcon from "./Images/money.png";
import taxIcon from "./Images/pig.png";
import StockIcon from "./Images/stock.png";
import UsStocks from "./Images/UsStocks.png";
import CryptoMarket from "./Images/CryptoMarket.png";
import GooglePlaybtn from "./Images/GooglePlayBtn.png";
import AppleStorebtn from "./Images/AppStoreBtn.png";
import StockGIF from "./Images/StockGIF.gif";
import srcgif from "./Images/AnimatedPhone.gif";

const SubfeatureCard = (props) => {
  return (
    <div className="SubfeatureCard" style={{ display: "flex" }}>
      <div>
        <img src={props.src} alt={props.alt} />
      </div>
      <div>
        <h5>{props.title}</h5>
      </div>
    </div>
  );
};

const CardItem = (props) => {
  return (
    <div className="CardItem text-center">
      <img src={props.src} alt={props.alt} />
      <h5>{props.title}</h5>
      <p>{props.text}</p>
    </div>
  );
};

const ExploreCTACard = (props) => {
  const navigate = useNavigate();

  const handleClickStock = () => {
    navigate(props.link);
    window.scrollTo(0, 0);
  };

  return (
    <div
      className="ExploreCTACard"
      style={{ display: "flex" }}
      onClick={handleClickStock}
    >
      <div>
        <img src={props.src} alt={props.alt} />
      </div>
      <div>
        <h5>{props.title}</h5>
      </div>
    </div>
  );
};

const Home = () => {
  const ScrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      {/* Navigation menu */}
      <Nav />

      {/* Hero Section */}
      <HeroSection
        src={srcgif}
        h2Heading="All In One Investz"
        h1Heading="Investing for Everyone"
        p1="Commission-free investing, plus the tools you need to put your money in motion. 
    Sign up and get your first stock for free. Certain limitations and fees apply.
    Lorem Ipsum is simply dummy text of the printing "
        p2="Commission-free investing, plus the tools you need to put your money in motion. Sign up and get your first stock for free."
        b1Title="Get Started"
        b2Title="Download App"
      />

      {/* Main Features Section */}
      <section className="Main_features">
        <h2 className="features-heading">A Platform, Designed For You</h2>

        <Row className="Main_features_row pt-5">
          <Col sm={4}>
            <h3>Global</h3>
            <hr className="hr-fe" size="2" />
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.{" "}
            </p>
          </Col>
          <Col sm={4}>
            <h3>Low-Cost</h3>
            <hr className="hr-fe" size="2" />
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.{" "}
            </p>
          </Col>
          <Col sm={4}>
            <h3>Easy to use</h3>
            <hr className="hr-fe" size="2" />
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.{" "}
            </p>
          </Col>
        </Row>

        <img
          className="EllipseCircle1"
          src={VectorCircle}
          alt="EllipseCircle"
        />
      </section>

      {/* Download App CTA */}
      <AppDownloadCTA />

      {/* Sub features section */}
      <motion.section
        className="SubFeatures"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="container">
          <Row>
            <Col sm={6}>
              <h4>Invest in US Stocks</h4>
              <h2>
                A Platform,<span> Designed For You</span>
              </h2>
              <p>
                Commission-free investing, plus the tools you need to put your
                money in motion. Sign up and get your first stock for free.
                Certain limitations and fees apply.
              </p>

              <Row>
                <Col sm={6}>
                  <SubfeatureCard
                    src={SUBfeatureicon1}
                    title="No Annual Fee"
                    alt="No Annual Fee"
                  />
                </Col>

                <Col sm={6}>
                  <SubfeatureCard
                    src={SUBfeatureicon2}
                    title="24/7 Support"
                    alt="24/7 Support"
                  />
                </Col>

                <Col sm={6}>
                  <SubfeatureCard
                    src={SUBfeatureicon3}
                    title="Easy To Use"
                    alt="Easy To Use"
                  />
                </Col>

                <Col sm={6}>
                  <SubfeatureCard
                    src={SUBfeatureicon4}
                    title="All in One"
                    alt="All in One"
                  />
                </Col>
              </Row>
            </Col>
            <Col sm={6}>
              <div className="WebMokupimg">
                <img src={WebLaptop} alt="Web Platform Investz" />
              </div>
            </Col>
          </Row>
        </div>
      </motion.section>

      {/* Expanded feature 1 */}
      <section>
        <div className="container Expandedfeature1">
          <Row>
            <Col sm={6}>
              <img
                className="Feature1IMG"
                src={WebLaptoppng}
                alt="Web Platform Investz"
              />
            </Col>

            <Col sm={6} className="Feature_content">
              <h4 className="">Global Market Access</h4>
              <p>
                Commission-free investing, plus the tools you need to put your
                money in motion. Sign up and get your first stock for free.
                Certain limitations and fees apply. Lorem Ipsum is simply dummy
                text of the printing and typesetting industry.{" "}
              </p>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </p>
              <Link to="/Features" onClick={ScrollTop}>
                Learn More
              </Link>
            </Col>
          </Row>
        </div>
      </section>

      {/* Expanded feature 2 */}
      <section>
        <div className="container Expandedfeature2">
          <Row>
            <Col sm={6} className="Feature_content">
              <h4 className="">Track and invest at Low Cost </h4>
              <p>
                Commission-free investing, plus the tools you need to put your
                money in motion. Sign up and get your first stock for free.
                Certain limitations and fees apply. Lorem Ipsum is simply dummy
                text of the printing and typesetting industry.{" "}
              </p>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </p>
              <Link to="/SignUp">Get Started</Link>
            </Col>

            <Col sm={6}>
              <img
                className="Feature1IMG"
                src={portfoliodesign}
                alt="Web Platform Investz"
              />
            </Col>
          </Row>
        </div>
      </section>

      {/* Card Section*/}
      <section className="container CardSection">
        <Row>
          <div className="text-center">
            <h3>All in one app for all your investment</h3>
          </div>

          <Col sm={4}>
            <CardItem
              src={MoneyIcon}
              title="Grow Your Money"
              text="It is a long established fact that a reader will be distracted..."
            />
          </Col>

          <Col sm={4}>
            <CardItem
              src={taxIcon}
              title="Save Your Tax"
              text="It is a long established fact that a reader will be distracted..."
            />
          </Col>

          <Col sm={4}>
            <CardItem
              src={StockIcon}
              title="Invest in US stocks"
              text="It is a long established fact that a reader will be distracted..."
            />
          </Col>
        </Row>
      </section>

      {/* Explore CTA*/}
      <section className="ExploreCTA">
        <Row>
          <div className="ExploreCTA_Title">
            <h4>Start Exploring More</h4>
          </div>
          <Col sm={4}>
            <ExploreCTACard
              src={UsStocks}
              alt="Us stocks"
              title="Us Stocks"
              link="/Stocklist"
            />
          </Col>
          <Col sm={4}>
            <ExploreCTACard
              src={CryptoMarket}
              alt="Crypto Market"
              title="Crypto Market"
              link="/Crypto"
            />
          </Col>
          <Col sm={4}>
            <ExploreCTACard
              src={UsStocks}
              alt="Investments"
              title="Investments"
              link="#"
            />
          </Col>
        </Row>
      </section>

      {/* App Download Section */}
      <section className="AppDownloadSection">
        <Row>
          <Col sm={6}>
            <h6>Download Our App</h6>
            <h3>Track and and start investing! </h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </p>
            <p>
              {" "}
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, versions of Lorem Ipsum.
            </p>
            <div className="BtnGroup">
              <div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://play.google.com/store/apps"
                >
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    src={GooglePlaybtn}
                    alt="Google play download"
                  />
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.apple.com/in/app-store/"
                >
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    src={AppleStorebtn}
                    alt="Google play download"
                  />
                </a>
              </div>
            </div>
          </Col>

          <Col sm={6} className="LottieAnimate">
            <img src={StockGIF} alt="Stock App animated" />
          </Col>
        </Row>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};
export default Home;
