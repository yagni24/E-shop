import { React } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function MyCarousel() {
    // const imgCarousel = [
    //     {
    //         img: React1,
    //         id: 1
    //     },
    //     {
    //         img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    //         id: 2
    //     },
    //     {
    //         img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    //         id: 3
    //     },

    //     {
    //         img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    //         id: 4
    //     }
    // ]




    return (
        <div style={{}}>
            <img style={{ objectfit: "cover", height:"700px",width:'100%' }} src={"https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"}></img>
        </div>
        // <Carousel infiniteLoop showThumbs={false} autoPlay interval={4000} transitionTime={2500} useKeyboardArrows={true} style={{top:'50px'}}>
        //     {imgSlider}
        // </Carousel>
    );
}

export default MyCarousel