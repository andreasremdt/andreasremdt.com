import { GraphQLClient } from "graphql-request";

export function slugify(name: string) {
  return name.toLowerCase().trim().replace(/[.\s]/gi, "-");
}

export function getGraphCMS() {
  return new GraphQLClient(
    "https://api-eu-central-1.graphcms.com/v2/ckzekldqw3bp001z1fxyv2ohm/master",
    {
      headers: {},
    }
  );
}
