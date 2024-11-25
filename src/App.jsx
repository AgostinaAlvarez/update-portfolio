import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import react_icon from "../src/assets/React-icon.png";
import css_icon from "../src/assets/css-icon.png";
import js_icon from "../src/assets/jsc-icon.webp";
import python_icon from "../src/assets/python-icon.png";
import html_icon from "../src/assets/html-icon.png";
import node_icon from "../src/assets/node.png";
import mongo_icon from "../src/assets/mongo.svg";
import mysql_icon from "../src/assets/mysql-logo.png";
import type_logo from "../src/assets/type-logo.png";
import { IoCodeWorking } from "react-icons/io5";
import { PiTerminalWindowBold } from "react-icons/pi";
import { IoMdCode } from "react-icons/io";
import { MdWorkOutline } from "react-icons/md";

import social_media_img from "../src/assets/social-media-principal-image.png";
import medical_plataform from "../src/assets/medesk.png";
import viti_plataform from "../src/assets/viti-principal-image.png";

///iconos
import { FaReact } from "react-icons/fa";
import { AiOutlinePython } from "react-icons/ai";
import { BiLogoMongodb } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { SiSocketdotio } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiFastapi } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { MdOutlineViewInAr } from "react-icons/md";
import { FaUsersViewfinder } from "react-icons/fa6";
import { FaHandHoldingMedical } from "react-icons/fa";
import { PiWineBold } from "react-icons/pi";
import { TbUserHexagon } from "react-icons/tb";
import developer_logo from "../src/assets/developer.png";
import { LiaCertificateSolid } from "react-icons/lia";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { MdOutlineTranslate } from "react-icons/md";
import { BsPuzzle } from "react-icons/bs";

function App() {
  return (
    <>
      <div className="principal-structure">
        <header className="header">
          <span className={"header-navlink"}>Inicio</span>
          <nav>
            <ul className="header-ul">
              <li>
                <MdOutlineTranslate style={{ color: "#fff" }} />
              </li>
              <li>
                <span className={"header-navlink"}>Sobre mi</span>
              </li>
              <li>
                <span className={"header-navlink"}>Proyectos</span>
              </li>
              <li>
                <span className={"header-navlink"}>Contactame</span>
              </li>
            </ul>
          </nav>
        </header>
        <main className="main">
          <div className="hero">Header</div>
          {/*Skills section*/}
          <section className="first_section">
            <div className="first_section_grid">
              <div className="first_section_grid_col">
                <div className="first_section_grid_col_left_content">
                  <span style={{ fontSize: "14px" }}>My Skills</span>
                  <span style={{ fontSize: "40px" }}>
                    Let's Explore Popular{" "}
                    <span style={{ color: "#f0df70" }}>Skills</span> &
                    Experience
                  </span>
                  <p className="paragraph">
                    Here you will find a summary of my main technical skills and
                    the tools I have worked with in both frontend and backend
                    projects. My experience includes developing dynamic web
                    applications, integrating databases, and implementing
                    efficient solutions that meet each client's needs. These
                    technologies form the foundation of my ability to create
                    robust and scalable digital products.
                  </p>
                </div>
              </div>
              <div className="first_section_grid_col">
                <div className="first_section_grid_col_right_content">
                  <div className="first_section_grid_col_right_box">
                    <img src={react_icon} style={{ height: "40px" }} />
                    <span>React JS</span>
                  </div>
                  <div className="first_section_grid_col_right_box">
                    <img src={css_icon} style={{ height: "40px" }} />
                    <span>CSS</span>
                  </div>
                  <div className="first_section_grid_col_right_box">
                    <img src={js_icon} style={{ height: "45px" }} />
                    <span>Javascript</span>
                  </div>
                  <div className="first_section_grid_col_right_box">
                    <img src={mysql_icon} style={{ height: "45px" }} />
                    <span>MySQL</span>
                  </div>
                  <div className="first_section_grid_col_right_box">
                    <img src={node_icon} style={{ height: "45px" }} />
                    <span>Node JS</span>
                  </div>
                  <div className="first_section_grid_col_right_box">
                    <img src={python_icon} style={{ height: "45px" }} />
                    <span>Python</span>
                  </div>
                  <div className="first_section_grid_col_right_box">
                    <img src={html_icon} style={{ height: "45px" }} />
                    <span>HTML</span>
                  </div>
                  <div className="first_section_grid_col_right_box">
                    <img src={type_logo} style={{ height: "45px" }} />
                    <span>Typescript</span>
                  </div>
                  <div className="first_section_grid_col_right_box">
                    <img src={mongo_icon} style={{ height: "45px" }} />
                    <span>MongoDB</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*My experience section*/}
          <section className="second_section">
            <div className="second_section_container">
              <div className="row second_section_ttl">
                <MdWorkOutline style={{ color: "#fff" }} />
                <span>Experiencia</span>
              </div>
              <div className="second_section_content_container">
                {/*card*/}
                <div
                  className="second_section_content_card"
                  style={{ gridTemplateColumns: "1fr auto", gap: "20px" }}
                >
                  <div className="second_section_content_info_content">
                    <div className="icon_container">
                      <div className="icon">
                        <IoCodeWorking />
                      </div>
                    </div>
                    <div className="second_section_content_info">
                      <span>Fullstack Developer</span>
                      <div className="sub-ttl row" style={{ gap: "5px" }}>
                        <div
                          style={{
                            height: "23px",
                            width: "23px",
                            borderRadius: "50%",
                            backgroundColor: "orange",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <TbUserHexagon style={{ color: "#fff" }} />
                        </div>
                        <span>Freelance</span>
                      </div>
                      <p className="paragraph">
                        Freelance Fullstack Developer creating web solutions for
                        small businesses, local shops, and entrepreneurs,
                        ranging from dynamic websites to tailored web
                        applications.
                        {/*
                          Fullstack Developer freelance creando soluciones web
                          para pymes, negocios locales y emprendedores, desde
                          sitios dinámicos hasta plataformas de comercio
                          electrónico, adaptadas a sus necesidades.
                          */}
                      </p>
                    </div>
                  </div>
                  <div className="second_section_content_card_right_col">
                    <span className="second_section_content_card_date_span">
                      2021-2023
                    </span>
                  </div>
                </div>
                {/*card 2*/}
                <div className="second_section_content_card">
                  <div className="second_section_content_info_content">
                    <div className="icon_container">
                      <div className="icon">
                        <PiTerminalWindowBold />
                      </div>
                    </div>
                    <div className="second_section_content_info">
                      <span>Fullstack Developer</span>
                      <div className="sub-ttl row" style={{ gap: "5px" }}>
                        <img src={developer_logo} style={{ height: "25px" }} />
                        <span>Developer Latam</span>
                      </div>
                      <p className="paragraph">
                        Fullstack Developer at a software development company,
                        working on frontend and backend projects, contributing
                        to the development, implementation, and optimization of
                        applications.
                        {/*
                          Fullstack Developer en una empresa de desarrollo de
                          software, trabajando en proyectos frontend y backend,
                          contribuyendo al desarrollo, implementación y
                          optimización de aplicaciones.
                          
                          */}
                      </p>
                    </div>
                  </div>
                  <div className="second_section_content_card_right_col">
                    <span className="second_section_content_card_date_span">
                      2024
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/*My Project section*/}
          <section className="second_section">
            <div className="second_section_container">
              <div className="row second_section_ttl">
                <IoMdCode style={{ color: "#fff" }} />
                <span>Proyectos</span>
              </div>

              <div className="second_section_content_container">
                {/*card 1*/}

                <div className="section_proyect_content_card">
                  <div className="second_section_content_info_content">
                    <div className="icon_container">
                      <div className="icon">
                        <FaHandHoldingMedical />
                      </div>
                    </div>
                    <div className="second_section_content_info">
                      <span className="card-ttl">
                        Gestor de Hisotriales Clinicos
                      </span>
                      <span className="sub-ttl" style={{ width: "80%" }}>
                        Una ERP que le permite al profesional de la salud
                        gestionar pacientes
                      </span>
                      <p className="paragraph" style={{ width: "90%" }}>
                        Este proyecto es una red social que incluye su version
                        mobile y su version web. Incluye un chat en tiempo real
                        con amigos y solicitudes de mensajes, post y feed
                        personalizado con recomendaciones
                      </p>
                      <div
                        className="row"
                        style={{
                          gap: "7px",
                          width: "80%",

                          flexWrap: "wrap",
                        }}
                      >
                        <div className="row third_section_span_container">
                          <SiFastapi />
                          <span>FastApi</span>
                        </div>
                        <div className="row third_section_span_container">
                          <AiOutlinePython />
                          <span>Python</span>
                        </div>
                        <div className="row third_section_span_container">
                          <FaReact />
                          <span>React</span>
                        </div>
                        <div className="row third_section_span_container">
                          <IoLogoJavascript />
                          <span>Javascript</span>
                        </div>
                        <div className="row third_section_span_container">
                          <GrMysql />
                          <span>MySQL</span>
                        </div>
                      </div>
                      <div
                        className="row"
                        style={{ marginTop: 10, flexWrap: "wrap" }}
                      >
                        <div
                          className="row third_section_btn"
                          onClick={() => {
                            window.open(
                              "https://medicaldesk.netlify.app/",
                              "_blank"
                            );
                          }}
                        >
                          <BsPuzzle />
                          <span>Ver Demo</span>
                        </div>
                        <div className="row third_section_btn">
                          <MdOutlineViewInAr />
                          <span>Ver proyecto</span>
                        </div>
                        <div
                          className="row third_section_btn"
                          onClick={() => {
                            window.open(
                              "https://github.com/AgostinaAlvarez/Medical-Plataform",
                              "_blank"
                            );
                          }}
                        >
                          <FiGithub />
                          <span>Ver repositorio</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img
                      src={medical_plataform}
                      style={{ width: "100%", borderRadius: "15px" }}
                    />
                  </div>
                </div>
                {/*card 2*/}
                <div className="section_proyect_content_card">
                  <div className="second_section_content_info_content">
                    <div className="icon_container">
                      <div className="icon">
                        <FaUsersViewfinder />
                      </div>
                    </div>
                    <div className="second_section_content_info">
                      <span className="card-ttl">MyApp Red Social</span>
                      <span className="sub-ttl">
                        Una red social para interactuar con usuarios
                      </span>
                      <p className="paragraph" style={{ width: "90%" }}>
                        Este proyecto es una red social que incluye su version
                        mobile y su version web. Incluye un chat en tiempo real
                        con amigos y solicitudes de mensajes, post y feed
                        personalizado con recomendaciones
                      </p>
                      <div
                        className="row"
                        style={{
                          gap: "7px",
                          width: "80%",

                          flexWrap: "wrap",
                        }}
                      >
                        <div className="row third_section_span_container">
                          <FaReact />
                          <span>React</span>
                        </div>
                        <div className="row third_section_span_container">
                          <IoLogoJavascript />
                          <span>Javascript</span>
                        </div>
                        <div className="row third_section_span_container">
                          <FaNodeJs />
                          <span>Node Js</span>
                        </div>
                        <div className="row third_section_span_container">
                          <BiLogoMongodb />
                          <span>MongoDB</span>
                        </div>
                        <div className="row third_section_span_container">
                          <SiSocketdotio />
                          <span>Socket.IO</span>
                        </div>
                      </div>
                      <div className="row" style={{ marginTop: 10 }}>
                        <div className="row third_section_btn">
                          <MdOutlineViewInAr />
                          <span>Ver proyecto</span>
                        </div>
                        <div className="row third_section_btn">
                          <FiGithub />
                          <span>Ver repositorio</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img
                      src={social_media_img}
                      style={{ width: "100%", borderRadius: "15px" }}
                    />
                  </div>
                </div>

                {/*card 3*/}
                <div className="section_proyect_content_card">
                  <div className="second_section_content_info_content">
                    <div className="icon_container">
                      <div className="icon">
                        <PiWineBold />
                      </div>
                    </div>
                    <div className="second_section_content_info">
                      <span>Software Development Freelance</span>
                      <span>Place</span>
                      <p className="paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor ua.
                      </p>
                      <div
                        className="row"
                        style={{
                          gap: "7px",
                          width: "80%",

                          flexWrap: "wrap",
                        }}
                      >
                        <div className="row third_section_span_container">
                          <FaReact />
                          <span>React</span>
                        </div>
                        <div className="row third_section_span_container">
                          <IoLogoJavascript />
                          <span>Javascript</span>
                        </div>
                        <div className="row third_section_span_container">
                          <FaNodeJs />
                          <span>Node Js</span>
                        </div>
                        <div className="row third_section_span_container">
                          <BiLogoMongodb />
                          <span>MongoDB</span>
                        </div>
                        <div className="row third_section_span_container">
                          <SiSocketdotio />
                          <span>Socket.IO</span>
                        </div>
                      </div>
                      <div className="row" style={{ marginTop: 10 }}>
                        <div className="row third_section_btn">
                          <MdOutlineViewInAr />
                          <span>Ver proyecto</span>
                        </div>
                        <div className="row third_section_btn">
                          <FiGithub />
                          <span>Ver repositorio</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img
                      src={viti_plataform}
                      style={{ width: "100%", borderRadius: "15px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
