// https://mui.com/material-ui/guides/routing/
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React, { useMemo } from 'react';
import { Link as RouterLink, useMatch } from 'react-router-dom';

import type { LinkProps } from 'react-router-dom';

type Props = {
  icon?: React.ReactElement;
  primary: string;
  to: string;
};

const ListItemLink: React.FC<Props> = ({ icon, primary, to }) => {
  // https://reactrouter.com/docs/en/v6/api#usematch
  const match = useMatch(to);
  const renderLink = useMemo(
    () =>
      React.forwardRef<HTMLAnchorElement, Omit<LinkProps, 'to'>>(function Link(
        itemProps,
        ref
      ) {
        return <RouterLink to={to} ref={ref} {...itemProps} role={undefined} />;
      }),
    [to]
  );

  return (
    <li>
      <ListItemButton component={renderLink} selected={!!match}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItemButton>
    </li>
  );
};

export default ListItemLink;
