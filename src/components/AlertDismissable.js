
import React, { useState } from 'react'
import {Alert} from 'react-bootstrap'

export default function AlertDismissible({ message, variant }) {
  console.log("ALERT:", message, variant)

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
