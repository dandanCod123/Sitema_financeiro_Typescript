import styled from "styled-components";

export const Table = styled.table`
   width: 100%;
   background-color: #fff;
   padding: 20px;
   box-shadow: 0px 0px 5px #ccc;
   border-radius: 10px;
   margin-top: 20px;
`;

export const TableHeadColumn = styled.th<{ widht?:number}>`
  width: ${props => props=> props.widht ? `${props.widht}px` :'auto'};
  padding: 10px 0;
  text-align: left;
`; 