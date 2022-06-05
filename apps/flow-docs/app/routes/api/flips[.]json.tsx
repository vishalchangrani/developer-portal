import type { LoaderFunction } from "@remix-run/node";
import flipSampleOutput from "./flipSampleOutput.json";
import type { FlipCellProps } from "../../../../../libs/design-system/dist/lib/Components/Flips/FlipCell";
export type LoaderData = FlipCellProps[];

export const loader: LoaderFunction = async () => {
  // Fetch PRs from onflow/flow repo
  // Filter only PRs with 'Flip' labels
  const flipInfo = flipSampleOutput.filter((pr) =>
    pr.labels.filter((label) => label.name == "FLIP")
  );

  // Convert from github API output to FlipCellProp
  const flipCellProps: LoaderData = flipInfo.map((pr) => ({
    numComments: 0, // TODO: We need to create another API call for this
    heading: pr.title,
    tags: pr.labels.map((label) => label.name),
    participant: { profileImage: pr.user.avatar_url, name: pr.user.login },
    date: pr.created_at,
    forumLink: pr.html_url,
  }));

  return flipCellProps;
};
