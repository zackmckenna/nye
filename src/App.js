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
  const processData = (data) => {
    const cleanedData = [];
    data.map((answers) => {
      const user = {};
      for (const [key, value] of Object.entries(answers)) {
        switch (key) {
          case "Before we start, what is your real life name?":
            user.username = value;
            break;
          case "What is your character's name?":
            user.characterName = value;
            break;
          case "What is your race?":
            user.race = value;
            break;
          case "What is your role?":
            user.role = value.toLowerCase();
          case "What is your descriptor?":
            user.descriptor = value.toLowerCase();
            break;
          case "What is your strength?":
            user.strength = value.toLowerCase();
            break;
          case "What is your flaw?":
            user.flaw = value.toLowerCase();
            break;
          case "What is your drive?":
            user.drive = value.toLowerCase();
            break;
          case "Throughout your life, you have gained a title, nickname or honorific. What is it, and how did you gain it?":
            user.nickname = value;
            break;
          case "While everyone is excited to be invited to the great Yule Festival, there is another motivation that drives you to attend. What is it?":
            user.motivation = value;
            break;
          case "Of all the places you’ve seen on your travels, one stands out and you long to return. Where is it and why?":
            user.memory = value;
          case "How are you known within the Realms? Are you famous, infamous, a normal citizen or a mystery?":
            user.infamy = value;
            break;
          case "What is your home Realm like? What is something you love about it? What about it do you wish would change?":
            user.home = value;
        }
      }
      cleanedData.push(user);
    });
    return cleanedData;
  };

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
    setCharacters(processData(data));
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
                          A {character.descriptor} {character.role} who has{" "}
                          <span style={style.green}>{character.strength}</span>,
                          but also{" "}
                          <span style={style.red}>{character.flaw}</span>. Thier
                          drive is to {character.drive}.
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
                                How did you gain your title?
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
                                What is your motivation for attending?
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
                                What is a memorable location from your travels?
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
                                What is your status in the Realm?
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
                                What is your home like?
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
