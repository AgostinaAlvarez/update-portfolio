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
