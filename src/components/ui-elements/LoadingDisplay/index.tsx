import { Box, CircularProgress } from '@mui/material';

type Props = {
  /**
   * @description ローディングをフルスクリーンで表示するかどうか
   * @default false
   */
  fullscreen?: boolean;
  /**
   * @description ローディングサークルのサイズ
   * @default 36
   */
  size?: number;
};

/**
 * @description ローディングを表示する
 */
export default function LoadingDisplay(props: Props) {
  const { fullscreen = false, size = 36 } = props;

  if (fullscreen) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        width="100vw"
        bgcolor="#FFF"
        position="fixed"
        top="0"
        left="0"
        zIndex="9999"
      >
        <CircularProgress size={size} />
      </Box>
    );
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="32em"
    >
      <CircularProgress size={size} />
    </Box>
  );
}
