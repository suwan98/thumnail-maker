import {createGlobalStyle} from "styled-components";
import ThumbnailMakeBox from "./layout/ThumbnailMakeBox";
import Title from "./layout/Title";
import Input from "./components/common/Input";
import {useState} from "react";
import Button from "./components/common/Button";

function App() {
  const [inputText, setInputText] = useState("");
  const handleInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return (
    <>
      <GlobalStyle />
      <Title />
      <ThumbnailMakeBox thumbnailTitle={inputText} />
      <Input onInput={handleInputText} />
      <Button>제목에 맞는 이미지 변환하기</Button>
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
    body {
        background-color: #f7f7f7;
        width: 70vw;
        margin: 0 auto;
        text-align: center;
        padding-top: 7.8125rem;
    }
`;
