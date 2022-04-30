import styled from 'styled-components';

export const NavBarSection = styled.div`
padding: 20px 0;
background: #fff;`

export const NavBarContainer = styled.div`
display: flex;
justify-content: space-between;

@media (max-width: 768px) {
    flex-direction: column;
}
`
export const LogoText = styled.h2`
font-size: 30px;
font-weight: bold;

@media (max-width: 992px) {
    text-align: left;
}
`
export const ListItem = styled.li`
display: inline-block;
`
















































