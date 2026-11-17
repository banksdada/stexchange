// Edit this file to update the team section on the home page.
// To add a photo: put the image in packages/ui/public/team/ and set `photo`, e.g. "/team/ben.jpg".
// Replace `bio` when you have one. Leave it empty to show "Photo and bio coming soon".

export type Person = { name: string; role: string; does: string; photo?: string; bio?: string };

export const TEAM: Person[] = [
  {
    name: "Ben",
    role: "CEO",
    does: "Makes the final call on every student selection and on money and safeguarding decisions, and looks after the relationships with universities and schools.",
  },
  {
    name: "Lucia",
    role: "Operations",
    does: "Runs applications and records day to day, chases school confirmations, keeps the consent and MOU registers, and replies to enquiries.",
  },
  {
    name: "Banks",
    role: "Technology development",
    does: "Builds and secures the programme's systems, looks after hosting, backups and permissions, and sets up and monitors the AI assistants.",
  },
];

export const AI_HELPERS = [
  "Read uploaded documents and flag anything missing or unclear",
  "Check applications against the programme rules and draft messages",
  "Draft status updates to students and families",
  "Spot a missed check-in and alert the duty person",
];
