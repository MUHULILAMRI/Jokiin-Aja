"use client";

import { Container, Row, Col, Card } from "react-bootstrap";

const allServices = [
  {
    title: "Joki Tugas Kuliah",
    description: "Mengerjakan berbagai macam tugas kuliah, mulai dari makalah, esai, hingga presentasi. Kami menjamin hasil yang orisinal dan berkualitas tinggi.",
    price: "Mulai dari Rp 50.000",
  },
  {
    title: "Joki Coding",
    description: "Membantu menyelesaikan tugas coding, bug fixing, hingga pembuatan aplikasi sederhana. Kami menguasai berbagai bahasa pemrograman.",
    price: "Mulai dari Rp 100.000",
  },
  {
    title: "Joki Desain",
    description: "Menyediakan jasa desain grafis untuk kebutuhan tugas, seperti poster, infografis, dan lainnya. Desain modern dan sesuai brief.",
    price: "Mulai dari Rp 75.000",
  },
  {
    title: "Joki Analisis Data",
    description: "Membantu analisis data statistik dengan SPSS, Excel, atau R. Termasuk interpretasi dan laporan.",
    price: "Mulai dari Rp 150.000",
  },
  {
    title: "Joki Pembuatan Website",
    description: "Membuat website sederhana untuk tugas atau proyek pribadi. Menggunakan teknologi modern.",
    price: "Mulai dari Rp 300.000",
  },
  {
    title: "Joki Penerjemahan",
    description: "Menerjemahkan dokumen dari Bahasa Inggris ke Indonesia dan sebaliknya. Cepat dan akurat.",
    price: "Mulai dari Rp 25.000 / halaman",
  },
];

const ServicesPage = () => {
  return (
    <Container className="py-5">
      <h1 className="text-center mb-5">Layanan Kami</h1>
      <Row>
        {allServices.map((service, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
                <Card.Footer className="text-muted">{service.price}</Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServicesPage;
