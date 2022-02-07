import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { Logo } from "../../components/atoms";
import {
  DetailFeedModal,
  SideNavbar,
  UserProfile,
  NavbarComponent,
} from "../../components/molecules";
import { user } from "../../fakeData";

export default function User() {
  // get username value by params
  const { username } = useParams();

  const page = user.profile.fullName;
  document.title = "Home | " + page;

  const [selectedImage, setSelectedImage] = useState(null);
  const [params, setParams] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isAvail = user.profile.username === username;
    if (!isAvail) {
      return navigate("/feed");
    }
    setParams(true);
  }, [username]);

  return (
    <Container fluid>
      <Row className="feed min-vh-100">
        <Col md={3} className="px-0 pb-5">
          <Logo isSmall className="mt-4 mx-5" />
          <UserProfile profile={user.profile} params={params} />
          <SideNavbar />
        </Col>
        <Col md={9} className="container-fluid pt-4">
          <NavbarComponent />
          <h1 className="text-white fw-bold mt-3 ps-4">
            {user.profile.fullName}, Feed
          </h1>
          {/* <Feed isFeed feeds={user.feed} setSelectedImage={setSelectedImage} /> */}
          {selectedImage && (
            <DetailFeedModal
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
}
