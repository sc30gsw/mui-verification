import { Box, CircularProgress } from "@mui/material";

import LoadingDisplay from "../../ui-elements/LoadingDisplay";
import { SideBar } from "../../ui-elements/SideBar";

import type React from "react";

type Props = {
  /** ページ全体をLoading状態にするか */
  overlayLoading?: boolean;
  /** 子コンポーネント */
  children: React.ReactNode;
};

export const MainLayout = ({ children, overlayLoading = false }: Props) => {
  const user = {
    manageBaseName: "大阪営業所",
    name: "田中太郎",
  };

  if (!user) {
    return <LoadingDisplay />;
  }
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
      }}
    >
      <SideBar
        salesOffice={user.manageBaseName}
        accountName={user.name}
        onLogout={() => {}}
      />
      <Box
        component="main"
        position="relative"
        flexGrow={1}
        minHeight="100vh"
        width="calc(100% - 275px)" // 全体の横幅から、CosmosDrawer分を差し引いて指定
        padding={4}
        boxSizing="border-box"
      >
        {children}
        {overlayLoading && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              z: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(255, 255, 255, 0.7)",
            }}
          >
            <CircularProgress />
          </Box>
        )}
      </Box>
    </Box>
  );
};
