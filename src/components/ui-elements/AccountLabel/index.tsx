import { Typography } from '@mui/material'

type Props = {
  salesOffice: string
  accountName: string
}

const AccountLabel: React.FC<Props> = ({ salesOffice, accountName }) => {
  return (
    <Typography variant="subtitle2" color="text.secondary">
      {salesOffice + ' : ' + accountName}
    </Typography>
  )
}

export default AccountLabel
