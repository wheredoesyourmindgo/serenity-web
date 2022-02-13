import {ColumnBox, RowBox} from 'mui-sleazebox'
import {KeyLegend} from '@components/key'
import {KeyLegendProps} from '@components/key/KeyLegend'
import {Box, Typography as Type} from '@mui/material'

export default function SymbolKeys() {
  const sharedProps: KeyLegendProps = {
    variant: 'h5',
    fontSize: 10,
    fontWeight: 500,
    KeyContainerProps: {
      sx: {
        width: 75
      }
    }
  } as const

  const sharedTypeProps = {
    component: 'span',
    noWrap: true,
    variant: 'inherit'
  } as const

  return (
    <Box>
      <ColumnBox flexSpacing={1}>
        <RowBox child flexSpacing={1}>
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>
              expert
              <br /> mode
            </Type>
          </KeyLegend>

          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>
              jump
              <br />
              to top
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>
              prev. <br />
              sentence
            </Type>
          </KeyLegend>

          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>
              next <br />
              sentence
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>
              scroll
              <br />
              bottom
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} />
        </RowBox>
        <RowBox child flexSpacing={1}>
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>
              g <br />
              command
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>
              jump to
              <br />
              middle
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>
              jump to
              <br />
              last ln.
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>
              jump to
              <br />
              first ln.
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>
              scroll to
              <br />
              middle
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} />
        </RowBox>
        <RowBox child flexSpacing={1}>
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>
              z<br /> command
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>
              jump to
              <br /> bottom
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>
              scroll
              <br /> down
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>
              scroll
              <br /> up
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps}>
            <Type {...sharedTypeProps}>
              scroll
              <br /> top
            </Type>
          </KeyLegend>
          <KeyLegend {...sharedProps} />
        </RowBox>
        <RowBox child flexSpacing={1}>
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
          <KeyLegend {...sharedProps} />
        </RowBox>
      </ColumnBox>
    </Box>
  )
}
