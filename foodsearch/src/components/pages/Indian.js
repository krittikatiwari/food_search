import React from "react";
import './Indian.css'
import { Link } from "react-router-dom";
import { India } from "../Data/Indian";
export default function Indian(){

    

    return (
        <>
        <div className="display-img">
            <img src="https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/content6553.jpg"></img>
        </div>
        <div className="indian-heading"><h1 className="type-of-recipe">Indian Food</h1></div>

        <div className="indian-container" >
            {
                 India.map((eac,index)=>{
                    return(
                        <Link key={index} className="abc" to={eac.iPath}><div className="indian-box">
                            <img className="img" src={eac.iimage}/>
                            <div className="indian-names"><h2 className="indian-name">{eac.iname}</h2></div>
                        </div></Link>
                    )
                    })
            }
       
            {/* <Link className="abc" to='/veg'><div className="indian-box"><img className="img" src="https://www.thenomadicvegan.com/wp-content/uploads/2019/02/Dal-Fry-Tadka.jpg"></img>
                <div className="indian-names"><h2 className="indian-name">Vegetarian</h2></div>
            </div></Link>

            <Link className="abc" to='/nonveg'><div className="indian-box"><img className="img" src="https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2017/08/07132126/The-Coastal-Macha-2.jpg"></img>
                <div className="indian-names"><h2 className="indian-name">Non Vegetarian</h2></div>
            </div></Link>

            <Link className="abc" to='/south-indian'><div className="indian-box"><img className="img" src="https://www.wowchandigarh.com/wp-content/uploads/2021/01/shutterstock_1153818823.jpg"></img>
                <div className="indian-names"><h2 className="indian-name">South Indian</h2></div>
            </div></Link>

            <Link className="abc" to='/street-food'><div className="indian-box"><img className="img" src="https://content.jdmagicbox.com/comp/delhi/i3/011p1221737902j8p3i3/catalogue/street-foods-of-india-lajpat-nagar-3-delhi-restaurants-s6rhru.jpg"></img>
                <div className="indian-names"><h2 className="indian-name">street Food</h2></div>
            </div></Link>

            <Link className="abc" to='/indian-sweet'><div className="indian-box"><img className="img" src="https://thekitchencommunity.org/wp-content/uploads/2021/10/indian-shutterstock_295395848-1200x900.jpg"></img>
                <div className="indian-names"><h2 className="indian-name">Indian Sweet</h2></div>
            </div></Link> */}
            
        </div>
        </>
    )
}