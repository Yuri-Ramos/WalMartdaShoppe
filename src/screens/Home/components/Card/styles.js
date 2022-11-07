import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: center;
  width: 80%;
  margin: auto;
  justify-content: center;
`;

export const Card = styled.div`
  display: flex;
  width: 300px;
  min-height: 150px;
  flex-direction: column;
  padding: 20px;
  margin: 20px;
  background-color: #f5f5f5;
  box-shadow: -1px 11px 24px -11px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
  height: 100%;
  border-radius: 13%;
  margin-top: 10px;
`;

export const CardTitle = styled.h3`
  margin-top: 20px;
  color: #333;
  font-size: 1.5rem;
  text-align: center;
`;

export const CardText = styled.p`
  margin-top: 10px;
  color: #666;
  font-size: 1rem;
`;

export const CardImg = styled.img`
  margin-top: 30px;
  margin: auto;
  height: 250px;
  width: 250px;
  border-radius: 8%;
`;
export const CardDescricao = styled.p`
  color: blue;
`;
export const CardImgDescricao = styled.img`
  margin-top: 50px;
  margin: auto;
  height: 300px;
  width: 300px;
  border-radius: 5%;
`;
