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

export default function Carousel() {
  const [visibleTitle, setVisibleTitle] = useState(""); // Estado para el título visible
  const carouselRef = useRef(null);

  // Asegurarse de que el primer elemento esté visible al cargar
  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.scrollTo({ left: 0, behavior: "smooth" }); // Desplaza al inicio
      setVisibleTitle(data[0].title); // Define el primer título visible
      console.log("Currently visible:", data[0].title);
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
      console.log("Currently visible:", visibleItem?.title);
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
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div style={{ backgroundColor: "pink" }}>{itemSelected?.title}</div>
    </>
  );
}
