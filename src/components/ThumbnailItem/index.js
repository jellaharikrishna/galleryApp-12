import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, onToggleThumbnail, isActiveThumbnail} = props
  const {imageUrl, imageAltText, thumbnailUrl, thumbnailAltText} = imageDetails

  const onClickThumbnail = () => {
    onToggleThumbnail(imageUrl, imageAltText)
  }

  const isClickedActiveImg = !isActiveThumbnail
    ? 'thumbnail-onclick'
    : 'thumbnail-btn'

  return (
    <li className="thumbnail-card">
      <button
        type="button"
        className={isClickedActiveImg}
        onClick={onClickThumbnail}
      >
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}
export default ThumbnailItem
