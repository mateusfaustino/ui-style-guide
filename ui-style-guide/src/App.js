import styled, {createGlobalStyle } from 'styled-components';
import Atom from './Components/atoms';
import atom from './Components/atoms';
import Grid from './Components/atoms/grid';
import Spacing from './Components/atoms/spacing';

const spacing = new Spacing(7,'16px','10vw')
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ${atom.scroll}
  ${atom.animation}
  body{
    background: ${atom.background.main};
  }
  li{
    list-style:none;
  }
  a{
    text-decoration:none;
  }
`
const Title = styled.h3`
  ${Atom.typography.header1}
`
const BoxWrapper = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  border-bottom:3px solid ${Atom.color.primary};
  width:100%;
  max-width:${spacing.container};
  
  `
  const Box = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  padding:16px;
  margin:8px;
  max-width:${spacing.container};
  box-shadow:${atom.shadow.shadow_3dp};
  
  ${atom.breakpoint.md}{
    max-width:calc(5*(${spacing.cgs}) - ${spacing.gap});
  }
  &.colors{
    flex-direction:column;
    width:100%;
    background:${(props)=>props.Value};
  }
  &.backgrounds{
    width:100%;
    ${(props)=>props.Value}
  }
  &.typografies{
    ${(props)=>props.Value}
  }
  &.animations{
    &::after{
      width:32px;
      height:32px;
      ${atom.background.primary_dark}
      content:" ";
      ${(props)=>props.Value}
    }
  }
  &.shadows{  
   box-shadow: ${(props)=>props.Value};
  }
`
const Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`
function App() {
  const Values =(props)=>{
    const keys =[];
    const values= []
    for (var property in props.Component){  
      keys.push(property)
      values.push(props.Component[property])
    }
    console.log(spacing.cs)
    return(
      <BoxWrapper>
        <GlobalStyle/>
        {
        keys.map((key,index)=>
        <Box className={props.className} key={index} Value={values[index]} >{key}</Box>
        )
      }
      </BoxWrapper>
    )
  } 
  
  return (
    <Container>
      {
      //<Grid Gap={spacing.gap} Margin={spacing.margin} Columns={spacing
      //.columns}/>
      }
      <Title>Colors:</Title>
      <Values className="colors" Component={Atom.color} />
      
      <Title>Backgrounds:</Title>
      <Values className="backgrounds" Component={Atom.background} />
      
      <Title>Typographies:</Title>
      <Values className="typografies" Component={Atom.typography} />
      
      <Title>Animations:</Title>
      <Values className="animations" Component={Atom.animation} />
      
      <Title>Shadows:</Title>
      <Values className="shadows" Component={Atom.shadow} />
    </Container>
  );
}

export default App;
