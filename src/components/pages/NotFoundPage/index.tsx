import { Stack, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";

const CenteredStack = styled(Stack)({
  justifyContent: "center",
  alignItems: "center",
});

export function NotFoundPage() {
  return (
    <CenteredStack width="100vw" height="100vh" gap="24px">
      <Typography variant="h2">ページは存在しません</Typography>
      <CenteredStack>
        <Typography>URLをお確かめの上、再度アクセスしてください。</Typography>
        <Typography>
          解決しない場合、
          <Typography component={Link} color="primary" to="/">
            TOP画面に戻る
          </Typography>
          か弊社担当者にお問い合わせください。
        </Typography>
      </CenteredStack>
    </CenteredStack>
  );
}
