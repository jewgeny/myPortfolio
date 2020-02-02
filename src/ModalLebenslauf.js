import React from "react";
import { Modal, Button } from 'react-bootstrap';
import { FaCaretRight } from "react-icons/fa";
import "./css/cv.css";


const ModalPortfolio = (props) => {
    
    const cvData = [
        {arrowIcon: <FaCaretRight />, date: "07/2019", titelDesc: "Einmonatige Vertretung bei NEXMO solution", desc: "Aktualisierung und Erweiterung eines vorhandenen Dashboards, Hamburg" },
        {arrowIcon: <FaCaretRight />, date: "2017 - 2018", titelDesc: "Atelier für Schrift und Form Schelter", desc: "Grafikdesigner, Münster bei Dieburg"},
        {arrowIcon: <FaCaretRight />, date: "seit 2014", titelDesc: "Freiberufler als Mediendesigner", desc: "Programmierung von Websites (JavaScript, HTML, CSS) und Erstellung diverser Grafiken für den Printbereich, Hamburg"},
        {arrowIcon: <FaCaretRight />, date: "2011 - 2013", titelDesc: "Body Attack", desc: "Kommissionierer, Hamburg"},
    ]

    const educationData = [
        {arrowIcon: <FaCaretRight />, date: "2018 - 2019", titelDesc: "Weiterbildung zum Webentwickler", desc: "DCI - Digital Career Institute, Hamburg"},
        {arrowIcon: <FaCaretRight />, date: "2013 - 2015", titelDesc: "Fernstudium zum Grafikdesigner", desc: "ILS - Institut für Lernsysteme, Hamburg"},
        {arrowIcon: <FaCaretRight />, date: "2006 - 2007", titelDesc: "Fachabitur", desc: "Fachoberschule G6 - Raum und Objektgestaltung, Hamburg"},
        {arrowIcon: <FaCaretRight />, date: "2004 - 2006", titelDesc: "Technischer Zeichner", desc: "Schulische Berufsausbildung zum Technischen Zeichner bei Gewerbeschule Metalltechnik, Hamburg"},
    ]

    const socialData = [
        {arrowIcon: <FaCaretRight />, date: "2007 - 2008", titelDesc: "Wehrdienst", desc: "2. / Panzerbataillon 515, Kellinghusen"},
    ]

    return(
        <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={props.modalShow}
                onHide={props.updateModalShow}
                id="cv"
            >
                <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Lebenslauf
                </Modal.Title>
                </Modal.Header>
                <Modal.Body className="wholeWrapperCv">
                <h4 className="titelCV">Beruflicher Werdegang</h4>
                  {cvData.map((elem, index) => {
                    return(
                    <div key={index}>
                            <div className="blockWrapper">
                                  <div className="dateArrowWrapper">
                                    <span className="arrowCV">{elem.arrowIcon}</span>
                                    <p className="date">{elem.date}</p>
                                  </div>
                                <div className="descWrapper">
                                    <p className="titelDesc">{elem.titelDesc}</p>
                                    <p className="desc">{elem.desc}</p>
                                </div>
                            </div>
                    </div>
                    )
                  })
                  }

            <h4 className="titelCV">AUSBILDUNG</h4>
                            {educationData.map((elem, index) => {
                                return(
                                <div key={index}>
                                        <div className="blockWrapper">
                                            <div className="dateArrowWrapper">
                                                <span className="arrowCV">{elem.arrowIcon}</span>
                                                <p className="date">{elem.date}</p>
                                            </div>
                                            <div className="descWrapper">
                                                <p className="titelDesc">{elem.titelDesc}</p>
                                                <p className="desc">{elem.desc}</p>
                                            </div>
                                        </div>
                                </div>
                                )
                            })
                            }
                <h4 className="titelCV">SOZIALES ENGAGEMENT</h4>
                            {socialData.map((elem, index) => {
                                return(
                                <div key={index}>
                                        <div className="blockWrapper">
                                            <div className="dateArrowWrapper">
                                                <span className="arrowCV">{elem.arrowIcon}</span>
                                                <p className="date">{elem.date}</p>
                                            </div>
                                            <div className="descWrapper">
                                                <p className="titelDesc">{elem.titelDesc}</p>
                                                <p className="desc">{elem.desc}</p>
                                            </div>
                                        </div>
                                </div>
                                )
                            })
                            }


                </Modal.Body>
                <Modal.Footer>
                <Button onClick={props.updateModalShow}>Close</Button>
                </Modal.Footer>
      </Modal>
    )
}

export default ModalPortfolio;