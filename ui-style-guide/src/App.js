import './App.css';
import styled from 'styled-components';
import Atom from './Components/atoms';
import atom from './Components/atoms';

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
  max-width:500px;
`
const Box = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  padding:16px;
  margin:8px;
  &.colors{
    width:100%;
    border: 1px solid #000;
    background:${(props)=>props.Value};
  }
  &.backgrounds{
    width:100%;
    border: 1px solid #000;
    ${(props)=>props.Value}
  }
  &.typografies{
    ${(props)=>props.Value}
  }
  &.animations{
    &::after{
      width:32px;
      height:32px;
      background: ${Atom.color.primary_dark};
      content:" ";
      border: 1px solid #000;
      ${(props)=>props.Value}
    }
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
    console.log(keys)
    return(
      <BoxWrapper>{
        
        keys.map((key,index)=>
        <Box className={props.className} key={index} Value={values[index]} >{key}</Box>
        )
      }
      </BoxWrapper>
    )
  } 
  
  return (
    <Container>
      <Title>Colors:</Title>
      <Values className="colors" Component={Atom.color} />
      
      <Title>Backgrounds:</Title>
      <Values className="backgrounds" Component={Atom.background} />
      
      <Title>Typographies:</Title>
      <Values className="typografies" Component={Atom.typography} />
      
      <Title>Animations</Title>
      <Values className="animations" Component={Atom.animation} />
    </Container>
  );
}

export default App;
