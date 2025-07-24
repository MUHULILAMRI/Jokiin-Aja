"use client";

import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { FaEnvelope, FaWhatsapp, FaClock } from "react-icons/fa";

const ContactPage = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Pesan Anda telah terkirim!");
    // Here you would typically handle form submission
  };

  return (
    <Container className="py-5 my-5">
      <h1 className="text-center section-title">Hubungi Kami</h1>
      <Row>
        <Col md={6} className="mb-4">
          <Card className="custom-card h-100">
            <Card.Body className="p-5">
              <Card.Title className="fw-bold fs-4 mb-4">Informasi Kontak</Card.Title>
              <Card.Text className="text-white-50">
                Jika Anda memiliki pertanyaan, jangan ragu untuk menghubungi kami melalui detail di bawah ini.
              </Card.Text>
              <ul className="list-unstyled">
                <li className="mb-3 d-flex align-items-center"><FaEnvelope className="me-3" size={20} /> support@jokiin-aja.com</li>
                <li className="mb-3 d-flex align-items-center"><FaWhatsapp className="me-3" size={20} /> +62 812 3456 7890</li>
                <li className="d-flex align-items-center"><FaClock className="me-3" size={20} /> Senin - Jumat, 09:00 - 17:00 WIB</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="custom-card h-100">
            <Card.Body className="p-5">
              <Card.Title className="fw-bold fs-4 mb-4">Kirim Pesan</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="contactName">
                  <Form.Label>Nama</Form.Label>
                  <Form.Control type="text" placeholder="Nama Anda" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="contactEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Email Anda" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="contactMessage">
                  <Form.Label>Pesan</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Pesan Anda" required />
                </Form.Group>
                <Button className="btn-custom" type="submit">
                  Kirim Pesan
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
