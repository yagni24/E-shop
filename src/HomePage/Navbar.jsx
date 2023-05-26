import React from "react";
import React1 from "./img/React1.jpg"
import React2 from "./img/React2.jpg"
import React3 from"./img/React3.jpg"
import { Component } from "react";
import styles from './navbar.module.css';


  const ImgList = ({images})=>{
    return(
        <div>
            {images.map((image,index)=>(
                <img style={{height:"400px",
                width:"400px"}} src={image.img} alt={`Image ${index}`} key={index}/>
            ))}
        </div>
    );
  };
class Navbar extends Component{
    constructor(props){
        super(props);
        this.state ={
            images:[
               {img: React1},{img: React2},{img: React3}
            ]
        }
    };
render()
{
    return(
        <>
        <div id={styles.bg}>
            <ul >
                <li><a href="#"></a>
                    Men
                </li>
                <li><a href="#"></a>
                    Women
                </li>
                <li><a href="#"></a>
                    kids
                </li>
                <li><a href="#"></a>
                    Shoes
                </li>
            </ul>
        </div>
        <div className={styles.img}>
        <ImgList images={this.state.images}/>
        </div>
        </>
    )
   }  
}
export default Navbar
