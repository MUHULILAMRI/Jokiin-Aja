"use client";

import { Container, Row, Col, Button } from "react-bootstrap";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
      <Row>
        <Col className="text-center">
          <h1 className="display-1 fw-bold">404</h1>
          <p className="fs-3">
            <span className="text-danger">Opps!</span> Halaman tidak ditemukan.
          </p>
          <p className="lead">
            Halaman yang Anda cari sepertinya tidak ada.
          </p>
          <Link href="/" passHref>
            <Button className="btn-custom">Kembali ke Beranda</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
