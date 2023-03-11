import './updates.css'
import TopBarGeneral from '../../components/topbar/TopBarGeneral'
import texts from './text.png'

export default function Updates() {
  return (
    <>
    <TopBarGeneral/>
    <div className="containerUpdates">
      <div className="wrapperUpdates">
        <div className="mainUpdates">
          <h2 className='h2Updates'>1</h2>
          <h4 className='h4Updates'>Implement a rich text editor for better formatting for
            the blog and podcast description, as of right now there is
            limited formatting. This will make the description much easier
            to read.
          </h4>
          <h4 className='h4Updates'>An example:</h4>
          <p className='pUpdates'><img src={texts} alt="" className='textUpdate'/></p>
          <hr className='hrUpdates'/>
          <h2 className='h2Updates'>2</h2>
          <h4 className='h4Updates'>Implement the ability to upload images from your disk,
            this will save time but may slow down the website as they will need to
            be stored in the cloud.
          </h4>
          <h4 className='h4Updates'>An example:</h4>
          <p className='pUpdates'><input type="file" className='fileUpdate' /></p>
          <hr className='hrUpdates'/>
          <h2 className='h2Updates'>3</h2>
          <h4 className='h4Updates'>Complete the 'About' section page with the relevant information.
          <hr className='hrUpdates'/>
          </h4>
        </div>
    </div>
    </div></>
  )
}
