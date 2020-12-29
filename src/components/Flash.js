
import React, {useState} from 'react'
import {Alert, Container} from 'react-bootstrap'

function AlertDismissible({message, variant}) {
  console.log(message, variant) // optional heading param

  const [visible, setVisible] = useState(true)

  if (visible) {
    return (
      <Alert dismissible variant={variant} onClose={() => setVisible(false)}>
        {message}
      </Alert>
    )
  }
  return null
}

export default function AlertMe() {
  return (
    <>
        <AlertDismissible variant="danger" message="OOPS, Error." />
        <AlertDismissible variant="warning" message="Warning, Warning." />
        <AlertDismissible variant="success" message="A great success." />
        <AlertDismissible variant="primary" message="First things first." />
        <AlertDismissible variant="info" message="Knowledge is power." />
        <AlertDismissible variant="light" message="Lighten your day." />
        <AlertDismissible variant="dark" message="Join the dark side." />

        <Container fluid>
            <AlertDismissible variant="danger" message="OOPS, Error." />
            <AlertDismissible variant="warning" message="Warning, Warning." />
            <AlertDismissible variant="success" message="A great success." />
            <AlertDismissible variant="primary" message="First things first." />
            <AlertDismissible variant="info" message="Knowledge is power." />
            <AlertDismissible variant="light" message="Lighten your day." />
            <AlertDismissible variant="dark" message="Join the dark side." />
        </Container>

        <Container>
            <AlertDismissible variant="danger" message="OOPS, Error." />
            <AlertDismissible variant="warning" message="Warning, Warning." />
            <AlertDismissible variant="success" message="A great success." />
            <AlertDismissible variant="primary" message="First things first." />
            <AlertDismissible variant="info" message="Knowledge is power." />
            <AlertDismissible variant="light" message="Lighten your day." />
            <AlertDismissible variant="dark" message="Join the dark side." />
        </Container>
    </>
  )
}
