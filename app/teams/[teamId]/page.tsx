import { teams } from "@/data/teams";
import TeamMembershipDetails from "@/components/TeamMembershipDetails";
import { notFound } from "next/navigation";

export default async function TeamPage({
  params,
}: {
  params: Promise<{ teamId: string }>;
}) {
  const { teamId } = await params;
  const team = teams[teamId as keyof typeof teams];

  if (!team) return notFound();

  return (
    <TeamMembershipDetails
      teamName={team.teamName}
      description={team.description}
      bannerImage={team.bannerImage}
      tiers={team.tiers}
      location={team.location}
      founded={team.founded}
    />
  );
}
