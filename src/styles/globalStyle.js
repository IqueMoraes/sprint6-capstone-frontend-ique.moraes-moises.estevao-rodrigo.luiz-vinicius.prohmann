import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     text-decoration: none;
	 font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
 }
 :root{
        --darkBlue: #1B2357;
        --seablue: #237C95;
        --yellow: #CEB310;
        --orange: #FEA800;
        --pictonBlue : #00C3FA;
        --blue : #3D8CA2;
        --lightGreen: #60D272;
        --bluePurple: #b1afe9
        --white: #f5f5f5;
        --plumSkin: #573353;
        --berryPopsicle: #D5A8D0;
        --black: #0c0d0d;
        --darkPink: #89023f;
        --lightRed: #FF6666;
        --red: #EC4F4F;
        --hoverBlue: #191970;
        --blueGradient: #5F4D93
        --pinkGradient: #DB7483
 }
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
::-webkit-scrollbar {
  width: 0;             
  height: 0;             
}
::-webkit-scrollbar-thumb {
  background-color: #0a0a0a;   
  border-radius: 20px;      
}
@media (min-width: 790px) {
  ::-webkit-scrollbar {
  width: 4px;               
  height: 6px;               
}
}
`;
export default GlobalStyles;
