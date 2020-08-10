import * as React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { withRouter } from 'react-router';

/**
 * Plain navigation bar.
 */
const PlainNavBar = (): JSX.Element => {
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="https://jeffreyca.github.io/spleeter-web/">Spleeter Web (Demo)</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default withRouter(PlainNavBar);
