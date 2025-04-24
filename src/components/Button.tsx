import React from 'react'

interface Props {
    classType?: string,
    text: string
    onClick: () => void;
}

function Button({classType = 'btn btn-primary', text, onClick}: Props) {
  return (
    <div><button type="button" className={classType} onClick={onClick}>{text}</button></div>
  )
}

export default Button