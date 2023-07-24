import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme['gray-50']};
`

export const FormAddTask = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1.5rem;
  width: 50rem;
  padding: 1.5rem;

  label {
    margin-right: 0.75rem;
  }

  input {
    background-color: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-50']};
    border: none;
    border-radius: 8px;
    outline: none;
    height: 3rem;
    padding-left: 1rem;
    width: 40rem;

    display: flex;
    align-items: center;

    &:focus {
      outline: 1px solid ${(props) => props.theme['blue-ultra-light']};
    }
  }

  button {
    height: 2.5rem;
    width: 10rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    background-color: ${(props) => props.theme['gray-50']};

    &:hover {
      background-color: ${(props) => props.theme['blue-ultra-light']};
    }
  }
`
export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Description = styled.div`
  display: flex;
  flex-direction: row;

  textarea {
    background-color: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-50']};
    border: none;
    border-radius: 8px;
    outline: none;
    padding: 1rem;
    resize: vertical;
    font-family: 'Roboto', sans-serif;
    width: 40rem;

    &::placeholder {
      font-family: 'Roboto', sans-serif;
    }

    &:focus {
      outline: 1px solid ${(props) => props.theme['blue-ultra-light']};
    }
  }
`

export const ResponsablePriority = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  gap: 8rem;

  select {
    border-radius: 0px;
    padding: 0.75rem;
    width: 13rem;
    border-radius: 8px;
    background-color: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-50']};
    border: none;
    outline: none;
    margin-left: 0.4rem;

    option {
      color: ${(props) => props.theme['gray-50']};
      background-color: ${(props) => props.theme['gray-900']};
      border: 1px solid ${(props) => props.theme['gray-700']};
    }

    &:focus {
      outline: 1px solid ${(props) => props.theme['gray-700']};
    }
  }
`

export const Deadline = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  input {
    padding: 1rem;
    width: 10rem;
  }
  input[type='date']::-webkit-calendar-picker-indicator {
    cursor: pointer;
    filter: invert(0.8) brightness(50%) sepia(100%) saturate(10000%)
      hue-rotate(200deg);
  }
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  margin-right: 20%;
  margin-top: 1rem;
`
