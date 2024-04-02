import { ListAlt, Logout, Sms, Store } from '@mui/icons-material'
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Stack,
} from '@mui/material'

import AccountLabel from '../AccountLabel'

import ListItemLink from './LinkListItem'

type Props = {
  drawerWidth?: number
  salesOffice: string
  accountName: string
  onLogout: () => void
}

export const SideBar: React.FC<Props> = ({
  drawerWidth = 300,
  salesOffice,
  accountName,
  onLogout,
}) => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{ width: drawerWidth, flexShrink: 0 }}
    >
      <Stack sx={{ width: drawerWidth, height: '100%' }}>
        {/* TODO: ロゴの追jか */}
        {/* <Box px={2} py={1}>
          <HonsyuLogo />
        </Box> */}
        <Stack
          padding={1}
          divider={<Divider flexItem />}
          sx={{ flexDirection: 'column', flexGrow: 1 }}
        >
          <Box padding={2}>
            <AccountLabel salesOffice={salesOffice} accountName={accountName} />
          </Box>
          <List subheader={<ListSubheader>見積管理</ListSubheader>}>
            <ListItemLink
              to="/wholesalers"
              primary="得意先一覧"
              icon={<Store color="primary" />}
            />
            <ListItemLink
              to="/deals"
              primary="商談一覧（管理番号）"
              icon={<Sms color="primary" />}
            />
            <ListItemLink
              to="/estimates"
              primary="見積一覧（新管理番号）"
              icon={<ListAlt color="primary" />}
            />
          </List>
          <List subheader={<ListSubheader>受注管理</ListSubheader>}>
            <ListItemLink
              to="/orders"
              primary="受注一覧"
              icon={<Store color="primary" />}
            />
          </List>
        </Stack>
        <Divider />
        <List>
          <ListItemButton onClick={onLogout}>
            <ListItemIcon>
              <Logout color="primary" />
            </ListItemIcon>
            <ListItemText primary="ログアウト" />
          </ListItemButton>
        </List>
      </Stack>
    </Drawer>
  )
}
