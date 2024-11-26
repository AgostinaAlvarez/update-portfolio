import { BsPuzzle } from "react-icons/bs";
import { MdOutlineViewInAr } from "react-icons/md";
import { GrMysql } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHandHoldingMedical, FaNodeJs, FaReact } from "react-icons/fa";
import { AiOutlinePython } from "react-icons/ai";
import { SiFastapi, SiSocketdotio } from "react-icons/si";
import { FiGithub } from "react-icons/fi";

//import medical_plataform from "../src/assets/medesk.png";

import medical_plataform from "../../src/assets/medesk.png";
import social_media_img from "../../src/assets/social-media-principal-image.png";
import viti_plataform from "../../src/assets/viti-principal-image.png";
import rifa_plataform from "../../src/assets/rifaclub.png";
import appify from "../../src/assets/appify1.png";

import { BiLogoMongodb } from "react-icons/bi";
import { FaUsersViewfinder } from "react-icons/fa6";
import { PiWineBold } from "react-icons/pi";
import { IoMdPricetags } from "react-icons/io";

export const MedicalPlataformDescription = () => {
  return (
    <>
      <img src={medical_plataform} alt={"medical"} className="carousel-image" />

      <div className="second_section_content_info_content">
        <div className="icon_container">
          <div className="icon">
            <FaHandHoldingMedical />
          </div>
        </div>
        <div className="second_section_content_info">
          <span className="card-ttl">Gestor de Hisotriales Clinicos</span>
          <span className="sub-ttl" style={{ width: "80%" }}>
            Una ERP que le permite al profesional de la salud gestionar
            pacientes
          </span>
          <p className="paragraph" style={{ width: "90%" }}>
            Este proyecto es una red social que incluye su version mobile y su
            version web. Incluye un chat en tiempo real con amigos y solicitudes
            de mensajes, post y feed personalizado con recomendaciones
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
          <div className="row" style={{ marginTop: 10, flexWrap: "wrap" }}>
            <div
              className="row third_section_btn"
              onClick={() => {
                window.open("https://medicaldesk.netlify.app/", "_blank");
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
    </>
  );
};

export const SocialMediaDescription = () => {
  return (
    <>
      <img
        src={social_media_img}
        alt={"social_media"}
        className="carousel-image"
      />
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
            Este proyecto es una red social que incluye su version mobile y su
            version web. Incluye un chat en tiempo real con amigos y solicitudes
            de mensajes, post y feed personalizado con recomendaciones
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
          <div className="row" style={{ marginTop: 10, flexWrap: "wrap" }}>
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
    </>
  );
};

export const VitiDescription = () => {
  return (
    <>
      <img src={viti_plataform} alt={"medical"} className="carousel-image" />
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor ua.
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
          <div className="row" style={{ marginTop: 10, flexWrap: "wrap" }}>
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
    </>
  );
};

export const RifaClubDescription = () => {
  return (
    <>
      <img src={rifa_plataform} alt={"medical"} className="carousel-image" />
      <div className="second_section_content_info_content">
        <div className="icon_container">
          <div className="icon">
            <IoMdPricetags />
          </div>
        </div>
        <div className="second_section_content_info">
          <span className="card-ttl">ERP para facturacion</span>
          <span className="sub-ttl" style={{ width: "80%" }}>
            Una ERP que le permite al profesional de la salud gestionar
            pacientes
          </span>
          <p className="paragraph" style={{ width: "90%" }}>
            Este proyecto es una red social que incluye su version mobile y su
            version web. Incluye un chat en tiempo real con amigos y solicitudes
            de mensajes, post y feed personalizado con recomendaciones
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
          <div className="row" style={{ marginTop: 10, flexWrap: "wrap" }}>
            <div
              className="row third_section_btn"
              onClick={() => {
                window.open("https://medicaldesk.netlify.app/", "_blank");
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
    </>
  );
};

export const ApifyDescription = () => {
  return (
    <>
      <img src={appify} alt={"medical"} className="carousel-image" />
      <div className="second_section_content_info_content">
        <div className="icon_container">
          <div className="icon">
            <IoMdPricetags />
          </div>
        </div>
        <div className="second_section_content_info">
          <span className="card-ttl">
            Plataforma de suscripcion a sorteos mensuales
          </span>
          <span className="sub-ttl" style={{ width: "80%" }}>
            Una ERP que le permite al profesional de la salud gestionar
            pacientes
          </span>
          <p className="paragraph" style={{ width: "90%" }}>
            Este proyecto es una red social que incluye su version mobile y su
            version web. Incluye un chat en tiempo real con amigos y solicitudes
            de mensajes, post y feed personalizado con recomendaciones
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
          <div className="row" style={{ marginTop: 10, flexWrap: "wrap" }}>
            <div
              className="row third_section_btn"
              onClick={() => {
                window.open("https://medicaldesk.netlify.app/", "_blank");
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
    </>
  );
};
