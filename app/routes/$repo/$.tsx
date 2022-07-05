import { json, LoaderFunction, redirect } from "@remix-run/node"
import { Link, useCatch, useLoaderData, useLocation } from "@remix-run/react"
import invariant from "tiny-invariant"
import { getMdxPage, useMdxComponent } from "~/cms/utils/mdx"
import {
  ContentName,
  ContentSpec,
  contentTools,
  getContentSpec,
} from "~/constants/repos"
import { ErrorPage } from "~/ui/design-system/src/lib/Components/ErrorPage"
import { MdxPage } from "../../cms"
import { ToolName } from "../../ui/design-system/src/lib/Components/Internal/tools"
import { InternalPage } from "../../ui/design-system/src/lib/Pages/InternalPage"
export { InternalErrorBoundary as ErrorBoundary } from "~/errors/error-boundaries"

type LoaderData = {
  content: ContentSpec
  path: string
  page: MdxPage
}

export const loader: LoaderFunction = async ({
  params,
  request,
}): Promise<LoaderData> => {
  const contentName = params.repo
  const path = params["*"] || "index"

  invariant(contentName, `expected repo param`)

  const contentSpec = getContentSpec(contentName)

  const isRawMDXFileRequest = path.toLowerCase().endsWith(".mdx")
  const isRawMarkdownFileRequest = path.toLowerCase().endsWith(".md")

  if (!contentSpec) {
    throw json({ status: "noRepo" }, { status: 404 })
  }

  const isDocument =
    !path.includes(".") || isRawMDXFileRequest || isRawMarkdownFileRequest

  if (!isDocument) {
    throw redirect(`/${params.repo}/_raw/${path}`)
  }

  let page: MdxPage | null

  try {
    page = await getMdxPage(
      {
        owner: contentSpec.owner,
        repo: contentSpec.repoName,
        branch: contentSpec.branch,
        fileOrDirPath: [contentSpec.basePath, path].join("/"),
      },
      { request, forceFresh: process.env.FORCE_REFRESH === "true" }
    )
  } catch (e) {
    throw json({ status: "mdxError", error: e }, { status: 500 })
  }

  if (!page) {
    throw json({ status: "noPage" }, { status: 404 })
  }

  return { content: contentSpec, path, page }
}

export default function RepoDocument() {
  const { content, path, page } = useLoaderData<LoaderData>()
  const MDXContent = useMdxComponent(page)
  const tool = contentTools[content.contentName]

  return (
    <InternalPage
      activePath={path}
      contentDisplayName={content.displayName}
      contentPath={content.contentName}
      header={path === "index" ? content.landingHeader : undefined}
      sidebarConfig={content.schema?.sidebar}
      internalSidebarMenu={
        tool && {
          selectedTool: tool,
          toolLinks: toolLinks,
        }
      }
      githubUrl={page.editLink}
      toc={page.toc}
    >
      <MDXContent />
    </InternalPage>
  )
}

const toolContentMap: Record<ToolName, ContentName> = {
  cadence: "cadence",
  cli: "flow-cli",
  emulator: "flow-emulator",
  fcl: "fcl-js",
  testing: "flow-js-testing",
  vscode: "vscode-extension",
}

const toolLinks: Record<ToolName, string> = { ...toolContentMap }
for (let [key, value] of Object.entries(toolLinks)) {
  toolLinks[key as ToolName] = `/${value}`
}

export function CatchBoundary() {
  const caught = useCatch()
  console.error("CatchBoundary $.tsx", caught)
  const location = useLocation()

  switch (caught.data.status) {
    case "noPage":
      return (
        <ErrorPage
          title={"404 – Page not found"}
          subtitle={`there is no page at "${location.pathname}"`}
          actions={
            <Link className="underline" to="/">
              Go home
            </Link>
          }
        />
      )
    case "mdxError":
      return (
        <ErrorPage
          title={"Error processing"}
          subtitle={`An error occured processing the mdx for this document`}
          actions={
            <Link className="underline" to="/">
              Go home
            </Link>
          }
        />
      )
    case "noRepo":
      return (
        <ErrorPage
          title={"404 – Repo not found"}
          subtitle={`This repo is not available or does not exist`}
          actions={
            <Link className="underline" to="/">
              Go home
            </Link>
          }
        />
      )
  }

  throw new Error(`Unhandled error: ${caught.status}`)
}
