import { AppBar } from '@material-ui/core';
import {styled} from '@material-ui/core/styles'

const StyledAppBar = styled(AppBar)({


})

const appBar = (props)=>{
    return(
        <StyledAppBar color={props.color}>
            {props.children}
        </StyledAppBar>
    )
}

export default appBar

