import Header from "../../../../core/components/Header/Header"
import Date from "../Date/Date"
import MetrixCard from "../MetrixCard/MetrixCard"
import PieChart from "../PieChart/PieChart"
import './Tile.css'
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Tile(){
    return(
        <div>
            <Header/>

        <div className="full" >
            <div className="cards">
<MetrixCard/>
            </div>
            <div className="content-container">
                <div className="top">
                    <div className="backtohome">
                    <Button variant="contained" sx={{height:'40px', width:'160px',marginLeft:'20px',fontSize:'13px'}}><HomeIcon/>Back to Home</Button>
                    </div>
                    <div className="datepicker">
                    <Date/>
                    <Button variant="contained" sx={{height:'40px', width:'100px'}}><FilterAltIcon/>Apply</Button>
                    <Button variant="contained" sx={{height:'40px', width:'100px'}}><ClearIcon/>Clear</Button>
                    <Button variant="contained" sx={{height:'40px', width:'100px'}}><ArrowDropDownIcon/>Export</Button>
                   
                    </div>
             
                  

                </div>
                <div className="middle">
                    <PieChart/>
                </div>

            </div>

        </div>
</div>
    )
}
export default Tile