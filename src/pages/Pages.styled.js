import styled from '@emotion/styled';
import url from '../img/bg-form.jpg';


export const Container = styled.div`
  display: flex;
  align-items: centre;
  justify-content: space-around;
  gap: 20px;
  padding: 0 40px;
`;

export const TitleForm = styled.h1`
  text-align: center;
  font-size: 34px;
  color: orange;
  margin-bottom: 20px;
`;

export const TitleContacts = styled.h2`
  text-align: center;
  font-size: 34px;
  color: orange;
  margin-bottom: 20px;
`;

export const ContentBlock = styled.div`
  width: 480px;
  background-color: #cccccc;
  height: 480px;
  background-image: url(${url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 5px solid black;
  // border-bottom: 80px solid black;
  border-radius: 10px;
  padding: 20px 15px;
`;

export const ScrollBar = styled.div`
  height: 200px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const Message = styled.p`
  padding: 3px 8px;
  margin-left: 35px;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.52;
  color: #363131;
  border-radius: 3px;
  background-color: #71717157;
`;