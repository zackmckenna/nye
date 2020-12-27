import logo from "./logo.svg";
import "./App.css";
import data from "./data";
import { useEffect, useState } from "react";
import {
  Accordion,
  Jumbotron,
  Container,
  Col,
  Row,
  Card,
  Button,
} from "react-bootstrap";

const App = () => {
  const [characters, setCharacters] = useState();

  const style = {
    pink: {
      color: "magenta",
    },
    green: {
      color: "#5cb85c",
    },
    red: {
      color: "#d9534f",
    },
    blue: {
      color: "#5bc0de",
    },
    orange: {
      color: "#f0ad4e",
    },
  };

  useEffect(() => {
    setCharacters(data);
  }, []);

  return (
    <>
      <Jumbotron fluid>
        <Container>
          <h1>The Great Yule Ball</h1>
          <p>The attendees of the great Yule Ball of 1202</p>
        </Container>
      </Jumbotron>
      <Container>
        {characters &&
          characters.map((character) => {
            return (
              <Row className="mb-3">
                <Col>
                  <Card>
                    <Card.Body>
                      <Card.Title style={{ fontFamily: "Langar" }}>
                        {character.characterName
                          ? character.characterName
                          : "name unknown"}
                      </Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {character.race ? character.race : ""}
                      </Card.Subtitle>

                      <Card.Text>
                        <p>
                          A {character.descriptor.toLowerCase()}{" "}
                          {character.role.toLowerCase()} who has{" "}
                          <span style={style.green}>
                            {character.strength.toLowerCase()}
                          </span>
                          , but also{" "}
                          <span style={style.red}>
                            {character.flaw.toLowerCase()}
                          </span>
                          . Their drive is to {character.drive.toLowerCase()}.
                        </p>
                      </Card.Text>
                      <Accordion>
                        {character.nickname && (
                          <Card>
                            <Card.Header>
                              <Accordion.Toggle
                                as={Button}
                                variant="link"
                                eventKey="0"
                              >
                                Nickname
                              </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                              <Card.Body>{character.nickname}</Card.Body>
                            </Accordion.Collapse>
                          </Card>
                        )}
                        {character.motivation && (
                          <Card>
                            <Card.Header>
                              <Accordion.Toggle
                                as={Button}
                                variant="link"
                                eventKey="1"
                              >
                                Motivation
                              </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                              <Card.Body>{character.motivation}</Card.Body>
                            </Accordion.Collapse>
                          </Card>
                        )}
                        {character.memory && (
                          <Card>
                            <Card.Header>
                              <Accordion.Toggle
                                as={Button}
                                variant="link"
                                eventKey="2"
                              >
                                Memorable Location
                              </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                              <Card.Body>{character.memory}</Card.Body>
                            </Accordion.Collapse>
                          </Card>
                        )}
                        {character.infamy && (
                          <Card>
                            <Card.Header>
                              <Accordion.Toggle
                                as={Button}
                                variant="link"
                                eventKey="3"
                              >
                                Realm Status
                              </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="3">
                              <Card.Body>{character.infamy}</Card.Body>
                            </Accordion.Collapse>
                          </Card>
                        )}
                        {character.home && (
                          <Card>
                            <Card.Header>
                              <Accordion.Toggle
                                as={Button}
                                variant="link"
                                eventKey="4"
                              >
                                Home
                              </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="4">
                              <Card.Body>{character.home}</Card.Body>
                            </Accordion.Collapse>
                          </Card>
                        )}
                      </Accordion>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            );
          })}
      </Container>
    </>
  );
};

export default App;
