import { Card } from "@mui/material";
import banner1 from "../../assets/capital k banner 1.jpg";
import banner2 from '../../assets/Restaurant-Food-Web-Banner-Design-1180x664.jpg';
const banner3 ="https://cmsimages.shoppersstop.com/SS_25_kids_main_kv_web_d891e0ff9a/SS_25_kids_main_kv_web_d891e0ff9a.png"
const banner4 ="https://cmsimages.shoppersstop.com/Only_web_6d5176b761/Only_web_6d5176b761.png";
const banner5= "https://cmsimages.shoppersstop.com/SS_25_main_kv_web_fd8e548010/SS_25_main_kv_web_fd8e548010.png"
const HomeCategory = () => {
  return (
   <>
    <div className="homeCategorySection container-fluid mt-3 mb-2">
        <h4 className="">What are You craving for ?</h4>
        <div className="row d-flex align-items-center justify-content-between overflow-y-scroll mx-3">
            <div className="col-md-1 categoryItem me-2 p-0">
                <img src={banner1} alt="Kids Category" className="w-100"/>
            </div>
            <div className="col-md-1 categoryItem me-2 p-0">
                <img src={banner2} alt="Only Category" className="w-100"/>
            </div>
            <div className="col-md-1 categoryItem me-2 p-0">
                <img src={banner3} alt="Main Category" className="w-100"/>

            </div>

            <div className="col-md-1 categoryItem me-2 p-0">
                <img src={banner4} alt="Main Category" className="w-100"/>

            </div>

            <div className="col-md-1 categoryItem me-2 p-0">
                <img src={banner5} alt="Main Category" className="w-100"/>

            </div>
             <div className="col-md-1 categoryItem me-2 p-0">
                <img src={banner1} alt="Kids Category" className="w-100"/>
            </div>
            <div className="col-md-1 categoryItem me-2 p-0">
                <img src={banner2} alt="Only Category" className="w-100"/>
            </div>
            <div className="col-md-1 categoryItem me-2 p-0">
                <img src={banner3} alt="Main Category" className="w-100"/>

            </div>

            <div className="col-md-1 categoryItem me-2 p-0">
                <img src={banner4} alt="Main Category" className="w-100"/>

            </div>
            </div>
    </div>
    <div className="homeCategorySection2 container-fluid mt-3 mb-2">
       <h4> some Heading</h4>
        <Card>
            <img src={banner1} alt="" srcset="" />
        </Card>
        
    </div>
    </>
  )
}

export default HomeCategory
