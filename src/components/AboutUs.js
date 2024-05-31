import React,{ useState } from 'react'

export default function AboutUs(props) {

    // const [myStyle,setMyStyle]=useState(
    //     {color: "white",
    //     backgroundColor: "black",
    //     border: "2px solid white"})
   let myStyle={
    color: props.mode ==='dark'?'white':'black',
    backgroundColor: props.mode ==='dark'?'black':'white'
    
   }
  
        // const [btnText,setBtnText]=useState("Enable Light Mode")
    
    // const Togglecolor=()=>{
    //     if(btnText =="Enable Light Mode" )
    //         {
    //             setMyStyle({color: "black",
    //             backgroundColor: "white"})
    //             setBtnText("Enable Dark Mode")
    //         }else{
    //             setMyStyle({color: "white",
    //             backgroundColor: "black",
    //             border: "2px solid white"})
    //             setBtnText("Enable Light Mode")
    //         }


    //    }  
  return (
    <div className='container my-3' style={myStyle}>
        <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong> Accordion Item #1 </strong>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong> Accordion Item #2 </strong>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong> Accordion Item #3 </strong>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
{/* <button className="btn btn-primary my-3" onClick={Togglecolor}> 
         {btnText}
        </button>*/}
    </div>
  )
}
