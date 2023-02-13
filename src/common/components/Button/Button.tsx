import React, { ReactNode } from 'react'
import { Button as MantineButton } from '@mantine/core'
interface Props {
  children: ReactNode
  onClick?: () => void
}

function Button({ children, onClick }: Props) {
  return <MantineButton onClick={onClick}>{children}</MantineButton>
}

export default Button
