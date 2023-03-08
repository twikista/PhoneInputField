import PhoneInput from "react-phone-number-input/input";
import styled from "styled-components";

export const PhoneNumberInput = ({ country, value, onChange }) => {
  return (
    <InputWrapper>
      <PhoneInput
        name="phoneNumber"
        international
        country={country}
        defaultCountry="NG"
        value={value}
        onChange={onChange}
        placeholder="883 231 4879"
      />
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border: none;
  font-size: clamp(1.25rem, 2.3vw, 2.125rem);
  input {
    font-size: 1em;
    border: none;
    outline: none;
    height: 100%;
  }
`;
