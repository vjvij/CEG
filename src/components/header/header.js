function Header(){

      return (<div style={{height:"200px",width:"100%",backgroundColor:"#06213f",color:"white"}}>

                 <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",height:"100%"}}>
                    <img height={"150px"} src="https://cde.annauniv.edu/images/white.gif"/>
                    <div style={{fontSize:"20px"}}>
                        <div>   CENTRE FOR DISTANCE EDUCATION
                     ANNA UNIVERSITY, CHENNAI-25</div>
                     <div style={{display:"flex",gap:"4px",justifyContent:"space-around",fontSize:"16px",marginTop:"10px",cursor: "pointer"}}>
                        <span>Home</span>
                        <span>|</span>
                        <span>Contact us</span>
                        <span>|</span>
                        <span>A-Z Index</span>
                        <span>|</span>
                        <span>Studycentre Login</span>
                     </div>
                     </div>
                     <img width={"200px"} height={"150px"} src="https://cde.annauniv.edu/images/UGCDEB_2023APPLICATION.png"/>
                 </div>
                 <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",height:"100%",backgroundColor:"#750087",height:"50px",cursor: "pointer"}}>
                  <div >ABOUT US</div>
                  <div>ACADEMIC</div>
                  <div>ADMISSION</div>
                  <div>ADMINISTRATION</div>
                  <div>PROJECT</div>
                  <div>FAQ</div>
                  <div>GALLERY</div>
                  <div>EXAMINATION</div>
                 </div>
      </div>)


}

export default Header;