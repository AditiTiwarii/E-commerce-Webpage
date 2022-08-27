import styled from "styled-components"

const Container = styled.div`
height: 30px;
background-color:#B3A0FB;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container>
      Special Deal! Buy One Get One Free
    </Container>
  )
}

export default Announcement
