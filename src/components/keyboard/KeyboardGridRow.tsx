import {Grid, type GridProps} from '@mui/material'

export default function KeyboardGridRow({
  children,
  ...rest
}: Partial<GridProps>) {
  return (
    <Grid
      container
      wrap="nowrap"
      spacing={1}
      data-row
      sx={{maxWidth: '100%'}}
      {...rest}
    >
      {children}
    </Grid>
  )
}
