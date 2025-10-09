import { WhiteCard } from "@components/shared/cards/WhiteCard";
import { Outlet } from "react-router";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <WhiteCard />
      <Outlet />
    </div>
  );
}
