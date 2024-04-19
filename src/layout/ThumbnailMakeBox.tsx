import styled from "styled-components";

function ThumbnailMakeBox({thumbnailTitle}: {thumbnailTitle: string}) {
  return (
    <>
      <Container>
        <h1>{thumbnailTitle}</h1>
      </Container>
    </>
  );
}

export default ThumbnailMakeBox;

const Container = styled.section`
  height: 43.75rem;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
