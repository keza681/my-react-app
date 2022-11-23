import React from 'react'
import { Stack, Button } from "@mui/material";
const MuiButton = () => {
  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction='row'>
            <Button variant='text' color='error' href='https://google.com'>
                Text
            </Button>
            <Button variant='contained'>Contained</Button>
            <Button variant='outlined' color='warning' >Outlined</Button>

        </Stack>
    </Stack>
  )
}

export default MuiButton
