import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import DashHeader from "./Components/DashHeader";
import "./Components/css/UserProfileDetails.css";
import ActionCard from "./Components/ActionCard";

export default function UserProfileDetails() {
  return (
    <div>
      {/*Dashboard Header */}
      <DashHeader />

      {/*Profile Details Section */}
      <Container>
        <Row>
          <Col sm={12} className="mt-4 mb-3">
            <h5 className="UserProfiletitle mb-4">Profile Details</h5>
            <form method="post" enctype="multipart/form-data">
              <label for="fileToUpload">
                <div className="profile-pic">
                  <span className="glyphicon glyphicon-camera"></span>
                  <span>
                    <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                  </span>
                </div>
              </label>
              <input type="File" name="fileToUpload" id="fileToUpload" />
            </form>
          </Col>
        </Row>

        <Form>
          <Row className="Row1">
            <Col sm={4} className="">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="Text" value="user" />
            </Col>
            <Col sm={4} className="">
              <Form.Label>Middle Name</Form.Label>
              <Form.Control type="text" value="middle" />
            </Col>
            <Col sm={4} className="">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" value="Last" />
            </Col>
          </Row>

          <Row className="Row2">
            <Col sm={4} className="">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value="user@hotmail.com" />
            </Col>
            <Col sm={4} className="">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="number" value="123456789" />
            </Col>
            <Col sm={4} className="">
              <Form.Label>Street Address</Form.Label>
              <Form.Control type="text" value="201 Main lane east" />
            </Col>
          </Row>

          <Row className="Row3">
            <Col sm={4} className="">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" value="Mumbai" />
            </Col>
            <Col sm={4} className="">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" value="Maharashtra" />
            </Col>
            <Col sm={4} className="">
              <Form.Label>Postal code</Form.Label>
              <Form.Control type="text" value="420 300" />
            </Col>
          </Row>
        </Form>
        <Button className="buttonSave mt-2">Save Changes</Button>
      </Container>

      {/*Action Section */}
      <Container className="mt-4">
        <Row className="ActionCards">
          <h5>Actions</h5>

          <ActionCard
            className="ActionIcon fa fa-exclamation-triangle"
            ActionTitle="Verify your profile"
            Dec="Lorem ipsum is a placeholder text commonly used to demonstrate"
            btnclass="ActionButton"
            Button="Verify Now"
          />

          <ActionCard
            className="ActionIcon fa fa-circle-o-notch"
            ActionTitle="No Actions"
            Dec="No pending action items available at this moment."
            btnclass="ActionButton disabled"
            Button="No Action"
          />
        </Row>
      </Container>
    </div>
  );
}
