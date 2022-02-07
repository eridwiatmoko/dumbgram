import { Container, Row, Col } from "react-bootstrap";

export default function PageNotFound() {
  return (
    <Container
      fluid
      className="min-vh-100 bg-white d-flex align-items-center justify-content-center"
    >
      <div className="text-center">
        <h1 className="text-black fw-bold">404</h1>
        <h5 className="text-black">Page Not Found</h5>
        <p>Go back</p>
      </div>
    </Container>
  );
}
