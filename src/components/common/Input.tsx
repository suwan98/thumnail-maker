import styled from "styled-components";

interface Props {
  onInput: React.ChangeEventHandler;
}

function Input({onInput}: Props) {
  return (
    <>
      <label>
        <TextInput
          type="text"
          placeholder="썸네일의 제목을 입력해주세요😊"
          onChange={onInput}
        />
      </label>
    </>
  );
}

export default Input;

const TextInput = styled.input`
  width: 100%;
  margin-top: 3rem;
  padding: 0.75rem;
  border: none;
  text-align: center;
`;
