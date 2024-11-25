/*
import React from "react";

const data = [
  {
    src: "https://images.unsplash.com/photo-1502657877623-f66bf489d236",
    title: "Night view",
    description: "4.21M views",
  },
  {
    src: "https://images.unsplash.com/photo-1527549993586-dff825b37782",
    title: "Lake view",
    description: "4.74M views",
  },
  {
    src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
    title: "Mountain view",
    description: "3.98M views",
  },
];

export default function CarouselTest() {
  return (
    <div className="carousel">
      {data.map((item, index) => (
        <div className="carousel-item" key={index}>
          <img src={item.src} alt={item.title} className="carousel-image" />
          <div className="carousel-content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
*/
import React, { useEffect, useRef, useState } from "react";

import social_media_img from "../src/assets/social-media-principal-image.png";
import medical_plataform from "../src/assets/medesk.png";
import viti_plataform from "../src/assets/viti-principal-image.png";
import { BsPuzzle } from "react-icons/bs";
import { MdOutlineViewInAr } from "react-icons/md";
import { GrMysql } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHandHoldingMedical, FaReact } from "react-icons/fa";
import { AiOutlinePython } from "react-icons/ai";
import { SiFastapi } from "react-icons/si";
import { FiGithub } from "react-icons/fi";

const data = [
  {
    src: medical_plataform,
    title: "Night view",
    description: "4.21M views",
  },
  {
    src: social_media_img,
    title: "Lake view",
    description: "4.74M views",
  },
  {
    src: viti_plataform,
    title: "Mountain view",
    description: "3.98M views",
  },
];

export default function Carousel() {
  const [visibleTitle, setVisibleTitle] = useState(""); // Estado para el título visible
  const carouselRef = useRef(null);

  // Asegurarse de que el primer elemento esté visible al cargar
  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.scrollTo({ left: 0, behavior: "smooth" }); // Desplaza al inicio
      setVisibleTitle(data[0].title); // Define el primer título visible
      //console.log("Currently visible:", data[0].title);
    }
  }, []);

  const [itemSelected, setItemSelected] = useState(data[0]);

  // Función para manejar el scroll
  const handleScroll = () => {
    const carousel = carouselRef.current;
    const children = Array.from(carousel.children); // Obtén los hijos del carrusel
    const carouselWidth = carousel.offsetWidth;
    const scrollLeft = carousel.scrollLeft;

    // Encuentra el elemento visible (centrado)
    const visibleIndex = Math.round(scrollLeft / carouselWidth);
    const visibleItem = data[visibleIndex];

    if (visibleItem?.title !== visibleTitle) {
      setVisibleTitle(visibleItem?.title || "");
      setItemSelected(visibleItem);
      //console.log("Currently visible:", visibleItem?.title);
    }
  };

  // Listener para el evento de scroll
  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener("scroll", handleScroll);
      }
    };
  }, [visibleTitle]);

  return (
    <>
      <div
        className="carousel"
        ref={carouselRef}
        style={{ display: window.innerWidth > 780 ? "none" : "flex" }} // Oculta en pantallas >780px
      >
        {data.map((item, index) => (
          <div className="carousel-item" key={index}>
            <img src={item.src} alt={item.title} className="carousel-image" />
            <div className="carousel-content">
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
                    Una ERP que le permite al profesional de la salud gestionar
                    pacientes
                  </span>
                  <p className="paragraph" style={{ width: "90%" }}>
                    Este proyecto es una red social que incluye su version
                    mobile y su version web. Incluye un chat en tiempo real con
                    amigos y solicitudes de mensajes, post y feed personalizado
                    con recomendaciones
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
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
