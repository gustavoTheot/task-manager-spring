import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme['gray-50']};
`

export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;

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
    margin-top: 2rem;
    background-color: ${(props) => props.theme['gray-50']};

    &:hover {
      background-color: ${(props) => props.theme['blue-ultra-light']};
    }
  }
`
export const NumberInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  input {
    width: 20rem;
    margin-left: 3.8rem;
  }
`

export const DescriptionTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const ResponsableStatus = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4.2rem;

  select {
    border-radius: 0px;
    margin-left: 1.4rem;
    width: 14rem;
    padding: 0.75rem;
    border-radius: 8px;
    background-color: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-50']};
    border: none;
    outline: none;

    option {
      color: ${(props) => props.theme['gray-50']};
      background-color: ${(props) => props.theme['gray-900']};
      border: 1px solid ${(props) => props.theme['gray-700']};
    }

    &:focus {
      outline: 1px solid ${(props) => props.theme['gray-700']};
    }
  }

  select:first-child {
    margin-right: 4rem;
  }
`

export const ListTasks = styled.div`
  overflow-y: scroll;
  scroll-margin: 1rem;
  height: 19rem;

  margin-top: 2rem;

  &::-webkit-scrollbar {
    width: 0.5rem;
    background-color: transparent;
  }

  &:-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme['blue-ultra-light']};
    border-radius: 999px;
  }

  thead {
    tr {
      th:first-child {
        width: 3rem;
      }

      th:nth-child(4) {
        width: 6rem;
      }
      th:nth-child(2) {
        width: 12rem;
      }

      th:nth-child(3) {
        width: 12rem;
      }

      th:last-child {
        width: 9rem;
      }

      th {
        padding: 0.5rem;
      }
    }
  }

  tbody {
    tr {
      td {
        text-align: center;
        padding: 1rem;
      }

      td:last-child {
        display: flex;
        justify-content: center;
        gap: 0.5rem;
      }
    }
  }

  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
    color: ${(props) => props.theme['gray-50']};

    &:hover {
      color: ${(props) => props.theme['blue-ultra-light']};
    }
  }
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  margin-left: 30%;
`
