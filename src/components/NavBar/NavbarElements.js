import styled from 'styled-components'
import {Link} from 'react-router-dom';



export const Nav = styled.nav`
   background: black;
   height: 80px;
   margin-top: -30px;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 18px;
   position: sticky;
   top: 0;
   z-index: 10;
   
   @media screen and (max-width: 960px){
      transition: 0.8s all ease;
   }
`
export const NavbarContainer = styled.div`
   display: flex;
   justify-content: space-between;
   height: 80px;
   z-index: 1;
   width: 100%;
   padding: 0 24px;
   max-width: 1100px;
   position: fixed;
`

export const NavLogo = styled(Link)`
   color: #54559e;
   justify-self: flex-start;
   cursor: pointer;
   font-size: 1.5rem;
   display: flex;
   align-items: center;
   margin-left: 24px;
   font-weight: bold;
   text-decoration: none;

   &.active{
      border-bottom: 3px solid #54559e;
   }
`;

export const MobileIcon = styled.div`
   display: none;

   @media screen and (max-width: 760px){
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
      color: white;
   }
`

export const NavMenu = styled.ul`
   display: flex;
   align-items: center;
   list-style: none;
   text-align: center;
   margin-right: -22px;

   @media screen and (max-width: 768px){
      display: none;
   }
`

export const NavItem = styled.li`
   height: 80px;
`

export const NavLinks = styled(Link)`
   color: white;
   display: flex;
   align-items: center;
   padding: 0 1rem;
   height: 100%;
   cursor: pointer;
   text-decoration: none;
`;

export const NavBtn = styled.nav`
   display: flex;
   align-items: center;

   @media screen and (max-width: 760px){
      display: none;
   }
`

export const NavBtnLink = styled(Link)`
   border-radius: 50px;
   background: #54559e;
   white-space: nowrap;
   padding: 10px 22px;
   color: #010606;
   font-size: 16px;
   outline: none;
   border: none;
   cursor: pointer;
   transition: all 0.2s ease-in-out;
   text-decoration: none;

   &:hover{
      transition: all 0.2s ease-in-out;
      background: #fff;
      color: #010606;
   }
` 