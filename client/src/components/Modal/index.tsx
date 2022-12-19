import { useState } from 'react'
import { StyledCreateModal } from './styles'
import { AiOutlineClose } from 'react-icons/ai'
import { iStyledButtonProps, StyledButton } from '../../styles/button'

export interface ICreateModalProps {
  className?: string
  children: React.ReactNode
  nameModal: string
  nameButtonOpen: string
  propsButton: iStyledButtonProps
}

function Modal({ children, className, nameModal, nameButtonOpen, propsButton }: ICreateModalProps) {
  const [modalState, setModalState] = useState(false)
  return (
    <>
      <StyledButton
        buttonStyle={propsButton.buttonStyle}
        buttonSize={propsButton.buttonSize}
        color={propsButton.color}
        onClick={() => setModalState(!modalState)}
      >
        {nameButtonOpen}
      </StyledButton>

      {modalState && (
        <StyledCreateModal className={className}>
          <div className='content-box'>
            <div className='moda-header'>
              <p>{nameModal}</p>
              <button onClick={() => setModalState(!modalState)}>
                <AiOutlineClose />
              </button>
            </div>
            {children}
          </div>
        </StyledCreateModal>
      )}
    </>
  )
}

export default Modal
