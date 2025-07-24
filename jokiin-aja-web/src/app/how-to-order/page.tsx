"use client";

import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useState } from "react";

const HowToOrderPage = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    if (form.checkValidity() === true) {
        event.preventDefault();
        alert("Pesanan berhasil dikirim! Tim kami akan segera menghubungi Anda.");
        // Here you would typically send the form data to a server
    }
  };

  return (
    <Container className="py-5 my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="custom-card">
            <Card.Body className="p-5">
              <h1 className="text-center mb-4 section-title">Formulir Pemesanan</h1>
              <p className="text-center mb-4 text-white-50">
                Lengkapi formulir di bawah ini untuk melakukan pemesanan. Tim kami akan segera menghubungi Anda melalui Email atau WhatsApp.
              </p>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Nama Lengkap</Form.Label>
                  <Form.Control required type="text" placeholder="Masukkan nama Anda" />
                  <Form.Control.Feedback type="invalid">
                    Nama tidak boleh kosong.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formContact">
                  <Form.Label>Email atau No. WhatsApp</Form.Label>
                  <Form.Control required type="text" placeholder="Masukkan email atau nomor WhatsApp" />
                   <Form.Control.Feedback type="invalid">
                    Kontak tidak boleh kosong.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formService">
                  <Form.Label>Jenis Jasa</Form.Label>
                  <Form.Select required>
                    <option value="">Pilih jenis jasa...</option>
                    <option value="Tugas Kuliah">Joki Tugas Kuliah</option>
                    <option value="Coding">Joki Coding</option>
                    <option value="Desain">Joki Desain</option>
                    <option value="Analisis Data">Joki Analisis Data</option>
                    <option value="Website">Joki Pembuatan Website</option>
                    <option value="Penerjemahan">Joki Penerjemahan</option>
                    <option value="Lainnya">Lainnya</option>
                  </Form.Select>
                   <Form.Control.Feedback type="invalid">
                    Silakan pilih jenis jasa.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formDescription">
                  <Form.Label>Deskripsi Tugas</Form.Label>
                  <Form.Control required as="textarea" rows={4} placeholder="Jelaskan detail tugas Anda di sini..." />
                   <Form.Control.Feedback type="invalid">
                    Deskripsi tidak boleh kosong.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formDeadline">
                  <Form.Label>Deadline</Form.Label>
                  <Form.Control required type="date" />
                   <Form.Control.Feedback type="invalid">
                    Silakan tentukan deadline.
                  </Form.Control.Feedback>
                </Form.Group>

                <div className="d-grid mt-4">
                    <Button type="submit" size="lg" className="btn-custom">
                        Kirim Pesanan
                    </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HowToOrderPage;
