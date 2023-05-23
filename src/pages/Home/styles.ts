import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const BaseCoutdownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  font-weight: bold;

  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StartCountDownButton = styled(BaseCoutdownButton)`
  background: ${(props) => props.theme['yellow-500']};
  color: ${(props) => props.theme.white};
  &:not(:disabled):hover {
    background: ${(props) => props.theme['yellow-700']};
  }
`

export const StopCountDownButton = styled(BaseCoutdownButton)`
  background: ${(props) => props.theme['red-500']};
  color: ${(props) => props.theme.white};
  &:not(:disabled):hover {
    background: ${(props) => props.theme['red-700']};
  }
`
