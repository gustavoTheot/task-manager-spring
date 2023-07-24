import styled from 'styled-components'

export const AppContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme['gray-1000']};
`
