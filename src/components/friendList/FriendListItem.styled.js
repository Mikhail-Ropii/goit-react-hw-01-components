import styled from "@emotion/styled";

export const IsOnline = styled.span`
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 10px;
    background-color: ${p => (p.isOnline ? 'green' : 'red')};
`;