import React from 'react'
import styled from 'styled-components'
import atom from '../atoms'
import { hover } from '../atoms/backgrounds'
import MuiButton from '@material-ui/core/Button' 


const Button = (props)=>{
    return(
        <MuiButton 
            startIcon={''}
            endIcon={''}
            variant='contained'
            disabled={false}
            color='primary'
            size='large'
        >
            <h3>{props.children}</h3>
        </MuiButton>
    )
} 

export default Button