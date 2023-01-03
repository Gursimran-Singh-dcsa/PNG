/* eslint-disable react-hooks/rules-of-hooks */
import Head from "next/head";
import Image from "next/image";
import { Carousel } from "react-bootstrap";
import styles from "../styles/Home.module.scss";
import icon from "../public/icons/avatar.png";
import icon2 from "../public/icons/avatar2.png";
import { Divider, Avatar, Card } from "antd";
import { useState, useEffect } from "react";
const { Meta } = Card;
const ImageCrousel = () => {
  // const [win, setWin] = useState<any>({});
  // useEffect(() => {
  //   setWin(window);
  //   console.log(win);
  // }, []);
  // if (win.innerWidth < 769) {
  //   return <>mobile</>;
  // } else {

  // }
  return (
    <>
      <Carousel
        variant="dark"
        style={{
          backgroundColor: "rgb(235, 216, 208)",
          borderRadius: "5px",
          marginTop: "5px",
        }}
      >
        <Carousel.Item
          className="carousel"
          style={{ height: "300px", padding: "50px 65px" }}
        >
          <div
            className="item1"
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "0 20px",
              margin: "35px",
            }}
          >
            <div>
              <i className="bi bi-quote"></i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-quote"
                viewBox="0 0 16 16"
              >
                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
              </svg>
              Slide 1- Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aliquid at beatae dolorum possimus aspernatur est temporibus quos
              magnam illo, debitis incidunt commodi voluptatibus eos qui unde
              natus earum tempora cumque! Fugit modi excepturi veniam
              ratione!&#8221;
            </div>
            <div>
              <Image
                src={icon}
                alt="image"
                height={150}
                width={150}
                style={{ borderRadius: "20px" }}
              />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item style={{ height: "300px", padding: "50px 65px" }}>
          <div
            className="item2"
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "0 20px",
              margin: "35px",
            }}
          >
            <div>
              <i className="bi bi-quote"></i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-quote"
                viewBox="0 0 16 16"
              >
                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
              </svg>
              Slide 2- Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aliquid at beatae dolorum possimus aspernatur est temporibus quos
              magnam illo, debitis incidunt commodi voluptatibus eos qui unde
              natus earum tempora cumque! Fugit modi excepturi veniam ratione!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
              rem!
            </div>
            <div>
              <Image
                src={icon2}
                alt="image"
                height={150}
                width={150}
                style={{ borderRadius: "20px" }}
              />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      <div>
        <Divider orientation="right">About Us</Divider>
        <p
          style={{
            backgroundColor: "rgb(234, 201, 193)",
            padding: "15px 20px",
            borderRadius: "5px",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          veniam. Eaque vero dss dsadsa grgr hyrth grfewrf erfewr fwer werw erwe
          r dfd sfdf v dgergreg g iure fuga ut, atque reprehenderit odit totam
          in qui rerum. Voluptates, voluptatem scfdscs repellat sequi quasi
          ullam ut aspernatur est autem accusamus dolorum cum officia eveniet ea
          dignissimos quidem esse et mollitia quibusdam pariatur magni totam.
          Esse, itaque rerum.
        </p>
      </div>
      <Divider orientation="center">
        <em>Our Clients</em>
      </Divider>
      <div className="client-card" style={{ display: "flex" }}>
        <Card
          hoverable
          style={{ margin: "5px", backgroundColor: "rgb(248, 237, 227)" }}
        >
          <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title="Joe"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            veniam. Eaque vero dss dsadsa grgr hyrth grfewrf erfewr fwer werw erwe
            r dfd sfdf v dgergreg g iure fuga ut, atque reprehenderit odit totam
            in qui rerum."
          />
        </Card>
        <Card
          hoverable
          style={{ margin: "5px", backgroundColor: "rgb(248, 237, 227)" }}
        >
          <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title="Sanya"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            veniam. Eaque vero dss dsadsa grgr hyrth grfewrf erfewr fwer werw erwe
            r dfd sfdf v dgergreg g iure fuga ut, atque reprehenderit odit totam
            in qui rerum."
          />
        </Card>
        <Card
          hoverable
          style={{ margin: "5px", backgroundColor: "rgb(248, 237, 227)" }}
        >
          <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title="Harry"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            veniam. Eaque vero dss dsadsa grgr hyrth grfewrf erfewr fwer werw erwe
            r dfd sfdf v dgergreg g iure fuga ut, atque reprehenderit odit totam
            in qui rerum."
          />
        </Card>
        <Card
          hoverable
          style={{ margin: "5px", backgroundColor: "rgb(248, 237, 227)" }}
        >
          <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title="Kirat"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            veniam. Eaque vero dss dsadsa grgr hyrth grfewrf erfewr fwer werw erwe
            r dfd sfdf v dgergreg g iure fuga ut, atque reprehenderit odit totam
            in qui rerum."
          />
        </Card>
      </div>
      <Divider orientation="left" style={{ color: "red" }}>
        Hire Us
      </Divider>
      <div className="div-hire"
        style={{
          
          backgroundColor: "rgb(250, 201, 184)",
          padding: "15px 10px",
          borderRadius: "5px",
          display: "flex",
        }}
      >
        {/* <Row>
          <Col span={12} style={{border:'1px solid black',margin:'5px'}}
          >
            <h4 style={{ textAlign: "center" }}>Web Applications</h4>
          </Col>
          <Col span={12} style={{border:'1px solid black',margin:'5px'}}>
            <h4 style={{ textAlign: "center" }}>Mobile Applications</h4>
          </Col>
        </Row> */}
        <div className="inside-hire">
          <h4>
            <em>Web Applications</em>
          </h4>
          <ul style={{ listStyle: "none" }}>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>ReactJS</li>
            <li>React-Native</li>
            <li>Angular</li>
            <li>Vue</li>
            <li>Jquery</li>
            <li>NodeJS</li>
            <li>ExpressJS</li>
          </ul>
        </div>
        <div className="inside-hire">
          <h4>
            <em>Mobile Applications</em>
          </h4>
          <ul style={{ listStyle: "none" }}>
            <li>Kotlin</li>
            <li>C#/C++</li>
            <li>Python</li>
            <li>Swift</li>
            <li>Objective C</li>
            <li>Ruby</li>
            <li>Rust</li>
            <li>SQL</li>
            <li>Dart</li>
            <li>Lua</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default function Home() {
  return (
    <>
      <div id="home" className={styles.home_crousel}>
        <ImageCrousel />
      </div>
    </>
  );
}
