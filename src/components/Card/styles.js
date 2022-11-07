import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  margin: auto;
`;

export const Card = styled.div`
  display: flex;
  width: calc(100% - 40px);
  min-height: 150px;
  flex-direction: row;
  padding: 20px;
  margin: 20px;
  background-color: #f5f5f5;
  box-shadow: -1px 11px 24px -11px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
  height: 100%;
  border-radius: 10px;
  margin-top: 10px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
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
  height: 100%;
  width: 100%;
  border-radius: 8%;
`;

export const Photo = styled.div`
  width: 60%;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const Destaque = styled.h1`
  margin: 40px 20px;
`;
export const CardButon = styled.button`
  width: 250px;
  height: 50px;
  background: #303dcf;
  border-radius: 10px;
`;
