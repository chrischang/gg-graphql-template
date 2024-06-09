import React, { FC, useMemo } from "react";
import { useGetAllUsersQuery } from "../graphql/generated/queries";
import {
  Box,
  Card,
  CircularProgress,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import { formatEther } from "ethers";

interface User {
  id: string;
  totalBetAmount: string;
  winningAmount: string;
  pnl: number;
}

const PNLLeaderboard: FC = () => {
  const { data, loading } = useGetAllUsersQuery({ pollInterval: 2000 });

  const allUsers = useMemo(() => {
    if (!data?.users?.items.length) return [];
    return data.users.items
      .filter((user) => +user.totalBetAmount !== 0)
      .map((user) => ({
        ...user,
        pnl: user.winningAmount / user.totalBetAmount,
      }))
      .sort((a, b) => b.pnl - a.pnl);
  }, [data?.users]);

  const totals = useMemo(() => {
    const initialTotals = {
      winningAmount: BigInt(0),
      totalBetAmount: BigInt(0),
    };
    if (!data?.users?.items.length) return initialTotals;
    return data.users.items.reduce(
      (prev, curr) => ({
        totalBetAmount: prev.totalBetAmount + BigInt(curr.totalBetAmount),
        winningAmount: prev.winningAmount + BigInt(curr.winningAmount),
      }),
      initialTotals,
    );
  }, [data?.users]);

  const Header = () => (
    <Paper
      sx={{ display: "flex", gap: 1, fontWeight: "bold", p: "0.5rem 1rem" }}
    >
      <Box flex="1 1 25%">User</Box>
      <Box flex="1 1 25%">Winnings</Box>
      <Box flex="1 1 25%">Bets</Box>
      <Box flex="1 1 25%">PNL</Box>
    </Paper>
  );

  if (loading) {
    return (
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <CircularProgress variant={"indeterminate"} size={"5rem"} />
      </Container>
    );
  }

  return (
    <Container sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ p: "2rem 1rem 1rem" }}>
        <Typography component="h1" variant="h4" fontWeight="bold">
          SuperBlurBattlerz Leaderboard
        </Typography>
        <Typography component="h1" variant="subtitle1" color="gray">
          This leaderboard excludes users who have never made a bet
        </Typography>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 1,
          mb: 1,
        }}
      >
        <Card sx={{ padding: "1rem" }}>
          <Typography fontSize={20}>
            {Number(formatEther(totals.totalBetAmount.toString())).toFixed(5)} Ξ
          </Typography>
          <Typography fontSize={14} color="gray">
            Total Bets
          </Typography>
        </Card>
        <Card sx={{ padding: "1rem" }}>
          <Typography fontSize={20}>
            {Number(formatEther(totals.winningAmount.toString())).toFixed(5)} Ξ
          </Typography>
          <Typography fontSize={14} color="gray">
            Total Winnings
          </Typography>
        </Card>
        <Card sx={{ padding: "1rem" }}>
          <Typography fontSize={20}>{allUsers.length}</Typography>
          <Typography fontSize={14} color="gray">
            Total Users
          </Typography>
        </Card>
      </Box>

      <Header />
      <Paper sx={{ background: "rgb(18, 18, 18)" }}>
        {allUsers.map((user: User) => (
          <Box
            key={user.id}
            sx={{
              display: "flex",
              gap: 1,
              fontWeight: "bold",
              px: "1rem",
              "&:hover": {
                background: (theme) => theme.palette.action.hover,
              },
            }}
          >
            <Box
              onClick={() =>
                window.open(`https://blastscan.io/address/${user.id}`, "_blank")
              }
              sx={{
                flex: "1 1 25%",
                cursor: "pointer",
                "&:hover": {
                  color: "lightblue",
                },
                fontFamily: "monospace",
              }}
            >
              {user.id.substring(0, 10)}
            </Box>
            <Box flex="1 1 25%">
              {(Number(user.winningAmount) / 1e18).toFixed(5)} Ξ
            </Box>
            <Box flex="1 1 25%">
              {(Number(user.totalBetAmount) / 1e18).toFixed(5)} Ξ
            </Box>
            <Box
              sx={{
                flex: "1 1 25%",
                color:
                  user.pnl === 1 ? "inherit" : user.pnl > 1 ? "green" : "red",
              }}
            >
              {user.pnl.toFixed(5)}%
            </Box>
          </Box>
        ))}
      </Paper>
    </Container>
  );
};

export default PNLLeaderboard;
