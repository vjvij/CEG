function Header(){

      return (<div style={{height:"200px",width:"100%",backgroundColor:"#06213f",color:"white"}}>

                 <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",height:"100%"}}>
                    <img height={"150px"} src="https://cde.annauniv.edu/images/white.gif"/>
                    <div style={{fontSize:"20px"}}>
                        <div>   CENTRE FOR DISTANCE EDUCATION
                     ANNA UNIVERSITY, CHENNAI-25</div>
                     <div style={{display:"flex",gap:"4px",justifyContent:"space-around",fontSize:"16px",marginTop:"10px"}}>
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
                 <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",height:"100%",backgroundColor:"#750087",height:"50px"}}>
                  <div>About us</div>
                  <div>academic</div>
                  <div>About us</div>
                  <div>academic</div>
                  <div>About us</div>
                  <div>academic</div>
                 </div>
      </div>)


}

export default Header;