import styled from 'styled-components'

export const CheckboxesContaier = styled.fieldset`
  border: none;
  padding: 0 3.2rem;

  legend {
    font-size: 1.8rem;
    font-weight: bold;
    color: ${({ theme }) => theme['pine-green']};
    margin-bottom: 1.5rem;
    cursor: pointer;
  }

  .checkbox-wrapper {
    display: flex;
    align-items: center;
    gap: 0.9rem;
    font-size: 1.4rem;
    margin-bottom: 0.8rem;
    position: relative;

    input[type='checkbox'] {
      width: 2.4rem;
      height: 2.4rem;
      outline: none;
      background-color: ${({ theme }) => theme['pine-green']};
      position: absolute;
      opacity: 0;
      cursor: pointer;
      z-index: 1;
    }

    .checkmark {
      width: 2.4rem;
      height: 2.4rem;
      background-color: ${({ theme }) => theme['dark-blue-grey']};
      border-radius: 3px;
      cursor: pointer;

      display: flex;
      justify-content: center;
    }

    .check {
      display: none;
      margin-top: 3px;
      width: 6px;
      height: 14px;
      transform: rotate(45deg);
      border-right: 3px solid ${({ theme }) => theme.white};
      border-bottom: 3px solid ${({ theme }) => theme.white};
    }

    input[type='checkbox']:hover ~ .checkmark {
      background-color: ${({ theme }) => theme['pine-green']};
    }

    input[type='checkbox']:checked ~ .checkmark .check {
      display: block;
    }
  }
`
