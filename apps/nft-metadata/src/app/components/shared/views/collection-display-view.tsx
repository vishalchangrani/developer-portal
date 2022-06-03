import { GenericViewToggle } from "./generic-view-toggle"

type GenericViewProps = {
  view: any,
  withRawView: boolean
}


export function CollectionDisplayView({ view, withRawView }: GenericViewProps) {
  const collectionSquareImage = view.squareImage && view.squareImage.file ? view.squareImage.file.url : view.collectionSquareImage
  const collectionBannerImage = view.bannerImage && view.bannerImage.file ? view.bannerImage.file.url : view.collectionBannerImage

  return (
    <>
      <div className="text-2xl">{view.collectionName || view.name}</div>
      <a className="text-xs hover:underline text-blue-600" href={view.externalURL} target="_blank">Visit Website</a>
      <div className="text-md mt-2">
        {view.collectionDescription}
      </div>
      <img src={collectionSquareImage} width="80" height="80"></img>
      <img src={collectionBannerImage} width="200" height="50"></img>
      {
        view && view.socials && Object.keys(view.socials).map((social) => {
          const socialLink = view.socials[social] && view.socials[social].url ? view.socials[social].url : view.socials[social]
          return (
            <div key={social}>
              {social} : {socialLink}
            </div>
          )
        })
      }
      {
        withRawView && (
          <>
            <hr className="my-2" />
            <GenericViewToggle view={view} />
          </>
        )
      }
      
    </>
  )
}