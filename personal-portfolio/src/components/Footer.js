// src/components/Footer.js
import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";

// React-Icons
import {
  FaTiktok,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />

          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>

          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.tiktok.com/@iftecent?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <FaTiktok size={24} color="#fff" />
              </a>
              <a
                href="https://www.youtube.com/@iftecent.visuals"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <FaYoutube size={24} color="#fff" />
              </a>
              <a
                href="https://www.instagram.com/iftecent.visuals/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram size={24} color="#fff" />
              </a>
              <a
                href="https://ca.linkedin.com/in/ifte-amanullah-4b6549235"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} color="#fff" />
              </a>
              <a
                href="https://ca.pinterest.com/iftecentvisuals/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
              >
                <FaPinterest size={24} color="#fff" />
              </a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
