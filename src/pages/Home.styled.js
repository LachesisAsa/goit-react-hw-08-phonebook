import styled from '@emotion/styled';
import url from '../img/bg-form.jpg';


export const Container = styled.div`
// min-height: calc(50vh - 80px);
height: 480px;
text-align: center;
width: 720px;
background-image: url(${url});
background-color: #cccccc;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
border: 5px solid black;
border-radius: 10px;
padding: 100px 20px;
margin-top: 20px;
margin-left: auto;
margin-right: auto;
`;

export const Title = styled.h1`
  margin-top: 20px;
  font-weight: 500;
  font-size: 28px;
  text-align: center;
  color: orange;
  & span {
    display: block;
    margin-bottom: 15px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const IconContainer = styled.span`
  margin-bottom: 10px;
  color: orange;
`;