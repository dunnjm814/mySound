import { useParams } from 'react-router-dom'

function ElseProfView() {
  const { username }= useParams()
  const artist = username
  return (
    <div>
      <h1> OTHER</h1>
    </div>
  )
}
export default ElseProfView
