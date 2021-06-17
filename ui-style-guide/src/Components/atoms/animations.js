const rotating=`
  @keyframes rotating {
    from {
      transform: rotate(0deg); }
    to {
      transform: rotate(360deg); 
    } 
  }
  animation-name: rotating;
  animation-iteration-count: infinite;
  animation-duration: 1s;
  animation-timing-function: linear;
`

export const animations = {
  rotating:rotating
}
export default animations