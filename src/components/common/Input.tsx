import styled from "styled-components";

function Input({onInput}) {
  return (
    <>
      <label>
        <TextInput
          type="text"
          placeholder="썸네일의 제목을 입력해주세요😊"
          onChange={onInput}
        />
        <button>제목에 맞는 이미지 변환하기</button>
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
