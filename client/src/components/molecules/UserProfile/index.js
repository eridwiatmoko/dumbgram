import "./style.css";
import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Icons } from "../../../assets";

export default function UserProfile(props) {
  const { params, dataUser } = props;
  const { profile, posts, follower, following } = dataUser;

  return (
    <>
      {
        <Row className="profile mt-3">
          <div className="d-flex flex-column align-items-center mt-5">
            {!params && (
              <Link to="/edit-profile" className="ms-auto me-5 mb-4">
                <Image src={Icons.Edit} />
              </Link>
            )}
            <div
              className="profile-background"
              style={{ width: "150px", height: "150px" }}
            >
              <img className="profile-image" src={profile?.image} alt="" />
            </div>
            <span className="profile-name mb-1">{profile?.fullName}</span>
            <span className="profile-username mb-5">@{profile?.username}</span>
            {params && (
              <Col className="mb-5">
                <Link to="/inbox" className="btn btn-primary ms-3 fs-6">
                  Message
                </Link>
                <Link to="/unfollow" className="btn btn-dark ms-3 fw-bold fs-6">
                  Unfollow
                </Link>
              </Col>
            )}
            <Container fluid>
              <Row className="insight">
                <Col>
                  <p className="text-muted">Posts</p>
                  <p className="text-white">{posts?.sum}</p>
                </Col>
                <Col>
                  <p className="text-muted">Followers</p>
                  <p className="text-white">
                    {follower?.data?.followers.length}
                  </p>
                </Col>
                <Col className="me-4">
                  <p className="text-muted">Following</p>
                  <p className="text-white">{following?.length}</p>
                </Col>
              </Row>
            </Container>
            <div className="w-100 px-5">
              <p className="bio">{profile?.bio}</p>
            </div>
          </div>
        </Row>
      }
    </>
  );
}
