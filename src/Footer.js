import CopyrightIcon from '@mui/icons-material/Copyright';
function Footer(){
    return(
        <>
          <span className='w-100 d-block m-auto text-center text-light' style={{position:'relative',bottom:-20,opacity:0.5}}><CopyrightIcon/> {new Date().getFullYear()} ScreenSaga</span>
        </>
    )
}
export default Footer;