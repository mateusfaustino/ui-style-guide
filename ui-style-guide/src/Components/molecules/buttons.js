import React from 'react'
import atom from '../atoms'
import { hover } from '../atoms/backgrounds'
import MuiButton from '@material-ui/core/Button'
import {styled} from '@material-ui/core/styles' 

const StyledButton = styled(MuiButton)({

    '&.MuiButton-text':{
        
    },
    //Styles applied to the root element if variant="text" and color="primary".
    '&.MuiButton-textPrimary':{
        
    },
    //Styles applied to the root element if variant="text" and color="secondary".    
    '&.MuiButton-textSecondary':{
        
    },
    // Styles applied to the root element if variant="outlined".
    '&.MuiButton-outlined':{

    },
    //Styles applied to the root element if variant="outlined" and color="primary".
    '&.MuiButton-outlinedPrimary':{
    
    },
    //Styles applied to the root element if variant="outlined" and color="secondary".
    '&.MuiButton-outlinedSecondary':{

    },
    //Styles applied to the root element if variant="contained".
    '&.MuiButton-contained':{

    },
    //Styles applied to the root element if variant="contained" and color="primary".
    '&.MuiButton-containedPrimary':{
        background:atom.color.primary,
    },
    //Styles applied to the root element if variant="contained" and color="secondary".
    '&.MuiButton-containedSecondary':{

    },
    //Styles applied to the root element if disableElevation={true}.
    '&.MuiButton-disableElevation':{

    },
    //	Pseudo-class applied to the ButtonBase root element if the button is keyboard focused.
    '&.Mui-focusVisible':{

    },
    //Pseudo-class applied to the root element if disabled={true}
    '&.Mui-disabled':{

    },
    //Styles applied to the root element if color="inherit".
    '&.MuiButton-colorInherit':{

    },
    //Styles applied to the root element if size="small" and variant="text".
    '&.MuiButton-textSizeSmall':{

    },
    //Styles applied to the root element if size="large" and variant="text".
    '&.MuiButton-textSizeLarge':{

    },
    //Styles applied to the root element if size="small" and variant="outlined".
    '&.MuiButton-outlinedSizeSmall':{

    },
    //Styles applied to the root element if size="large" and variant="outlined".
    '&.MuiButton-outlinedSizeLarge':{

    },
    //Styles applied to the root element if size="small" and variant="contained".
    '&.MuiButton-containedSizeSmall':{

    },
    //Styles applied to the root element if size="large" and variant="contained".
    '&.MuiButton-containedSizeLarge':{

    },
    //	Styles applied to the root element if size="small".
    '&.MuiButton-sizeSmall':{
        
    },
    //Styles applied to the root element if size="large".
    '&.MuiButton-sizeLarge':{

    },
    //Styles applied to the root element if fullWidth={true}.
    '&.MuiButton-fullWidth':{

    },
    //Styles applied to the startIcon element if supplied.
    '&.MuiButton-startIcon':{
        
    },
    //Styles applied to the endIcon element if supplied.
    '&.MuiButton-endIcon':{

    },
    //	Styles applied to the icon element if supplied and size="small".
    '&.MuiButton-iconSizeSmall':{

    },
    //Styles applied to the icon element if supplied and size="medium".
    '&.MuiButton-iconSizeMedium':{
        
    },
    //Styles applied to the icon element if supplied and size="large".
    '&.MuiButton-iconSizeLarge':{

    },
})
const Button = (props)=>{
    return(
        <StyledButton 
            startIcon={''}
            endIcon={''}
            variant='text'
            disabled={false}
            color='primary'
            size='large'
        >
            {props.children}
        </StyledButton>
    )
} 

export default Button