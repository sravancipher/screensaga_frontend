import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import { useState } from 'react';
import './PlayWebseries.css'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
function PlayWebseries({ stopplayingmovie, image, name }) {
    const [alert, setAlert] = useState(false);
    return (

        <>
            <div className='' style={{ position: "absolute", top: "0px" }}>
                <img src={image} style={{ width: "100vw", height: "100vh", zIndex: "-1" }}></img>
                <div className='colorapply'></div>
                <div className="row" style={{ position: "absolute", top: "40%", width: "100vw" }}>
                    <div className="col-md-1 col-2"></div>
                    <div className="col-md-3 col-8">
                        <form>
                            <select className="form-select text-light my-3" style={{ backgroundColor: "transparent" }}>
                                <option><b>Select Season</b></option>
                                <option><b>Season 1</b></option>
                                <option><b>Season 2</b></option>
                                <option><b>Season 3</b></option>
                            </select>
                            <select className="form-select text-light my-3" style={{ backgroundColor: "transparent" }}>
                                <option><b>Select Episode</b></option>
                                <option><b>Episode 1</b></option>
                                <option><b>Episode 2</b></option>
                                <option><b>Episode 3</b></option>
                                <option><b>Episode 4</b></option>
                            </select>

                        </form>
                        <button className='btn text-light' onClick={()=>{stopplayingmovie()}}><ArrowBackOutlinedIcon/><b>Back</b></button>
                        <button className="btn btn-danger w-100 my-2" onClick={() => { setAlert(true) }}>{name} <PlayCircleFilledIcon /></button>
                        {alert && <div class="alert alert-danger alert-dismissible">
                            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                            <strong>Attention!</strong> We're sorry, but the episode cannot be played right now.</div>
                        }
                    </div>
                    <div className="col-md-8 col-2"></div>
                </div>
            </div>
        </>
    )
}
export default PlayWebseries;