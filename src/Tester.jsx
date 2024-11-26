import React from "react";

const Tester = () => {
  return (
    <>
      {/*My Project section*/}
      <section className="second_section">
        <div className="second_section_container">
          <div className="row second_section_ttl">
            <IoMdCode style={{ color: "#fff" }} />
            <span>Proyectos</span>
          </div>

          <div className="second_section_content_container">
            {/*card 1*/}

            <div className="second_section_content_card">
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
              <div className="second_section_content_card_right_col">
                <img
                  src={medical_plataform}
                  style={{ width: "100%", borderRadius: "15px" }}
                />
              </div>
            </div>
            {/*card 2*/}
            <div className="second_section_content_card">
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
              <div className="second_section_content_card_right_col">
                <img
                  src={social_media_img}
                  style={{ width: "100%", borderRadius: "15px" }}
                />
              </div>
            </div>

            {/*card 3*/}
            <div className="second_section_content_card">
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor ua.
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
              <div className="second_section_content_card_right_col">
                <img
                  src={viti_plataform}
                  style={{ width: "100%", borderRadius: "15px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Certifications*/}
      <section className="second_section">
        <div className="second_section_container" style={{ width: "75%" }}>
          <div className="row second_section_ttl">
            <LiaCertificateSolid style={{ color: "#fff" }} />
            <span>Cerfificados</span>
          </div>

          <div className="cetificate_container">
            <div className="certificate_content_card">
              <div className="certificate_icon">
                <AiOutlineSafetyCertificate />
              </div>
              <div className="certificate_info">
                <span className="certificate_ttl">Data Analytics</span>
                <span className="certificate_subttl">Coder House</span>
                <div className="row certificate_btn third_section_btn">
                  <MdOutlineViewInAr />
                  <span>Ver certificado</span>
                </div>
              </div>
            </div>

            <div className="certificate_content_card">
              <div className="certificate_icon">
                <AiOutlineSafetyCertificate />
              </div>
              <div className="certificate_info">
                <span className="certificate_ttl">
                  Back End Development and APIs
                </span>
                <span className="certificate_subttl">freeCodeCamp</span>
                <div className="row certificate_btn third_section_btn">
                  <MdOutlineViewInAr />
                  <span>Ver certificado</span>
                </div>
              </div>
            </div>

            <div className="certificate_content_card">
              <div className="certificate_icon">
                <AiOutlineSafetyCertificate />
              </div>
              <div className="certificate_info">
                <span className="certificate_ttl">
                  JavaScript Algorithms and Data Structures
                </span>
                <span className="certificate_subttl">freeCodeCamp</span>
                <div className="row certificate_btn third_section_btn">
                  <MdOutlineViewInAr />
                  <span>Ver certificado</span>
                </div>
              </div>
            </div>

            <div className="certificate_content_card">
              <div className="certificate_icon">
                <AiOutlineSafetyCertificate />
              </div>
              <div className="certificate_info">
                <span className="certificate_ttl">Responsive Web Design</span>
                <span className="certificate_subttl">freeCodeCamp</span>
                <div className="row certificate_btn third_section_btn">
                  <MdOutlineViewInAr />
                  <span>Ver certificado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tester;

/*



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
        </main>
        </div>
    </>
    );
}

export default App;



*/
