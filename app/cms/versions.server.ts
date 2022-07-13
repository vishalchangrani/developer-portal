import invariant from "tiny-invariant"
import { octokit } from "./github.server"
import { z } from "zod"

/**
 * a list of version strings that's specified in a repo's versions.json file
 *
 * usually should look like a semver version but these might be _anything_
 */
type VersionList = Array<string>

export function parseVersions(data: unknown): VersionList {
  /** https://semver.org/#is-there-a-suggested-regular-expression-regex-to-check-a-semver-string */
  const semverRegex =
    /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/

  const versionParser = z.array(z.string().regex(semverRegex)).nonempty()
  return versionParser.parse(data)
}

export type RepoVersionsResult =
  | {
      versions: VersionList | null
      error?: undefined
    }
  | { versions: null; error: Error }

export async function getRepoVersions(
  owner: string,
  repo: string
): Promise<RepoVersionsResult> {
  try {
    const file = await octokit.repos.getContent({
      owner: owner,
      repo: repo,
      path: `versions.json`,
    })

    invariant(!Array.isArray(file.data), `did not expect array`)
    invariant("encoding" in file.data)
    invariant(file.data.encoding === "base64", `expected base64`)

    const content = Buffer.from(
      file.data.content,
      file.data.encoding
    ).toString()

    const data = JSON.parse(content)
    const parsed = parseVersions(data)

    return { versions: parsed }
  } catch (er) {
    return { versions: null, error: er as Error }
  }
}
