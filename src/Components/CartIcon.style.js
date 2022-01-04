import styled from 'styled-components';

export const IconButton = styled.div`
svg {
    width: 30px;
    height: 30px;
  }
 position :relative;
 width:45px;
 height:45px;
 background-color: gray;
 border-radius:15px;
 border-color:none;
 position: relative;
 display: inline-block;
 margin-right:10px;
 margin-top:10px;
`;

export const Notification = styled.span`
margin-left:10px;
text-align:center;
transform: matrix(1, 0, 0, 1, 9.38333, -8);
position: absolute;
padding: 5px 5px;
border-radius: 20%;
background: rgb(255, 105, 0);
color: white;
font-size:12px;
`;