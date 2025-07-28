import { List } from "@/shared/components/organism/containers/list/List";
import { TeamMemberItem } from "./components/TeamMemberItem";

export const TeamMembersList = () => {
  return <List render={<TeamMemberItem />} data={data} />;
};
