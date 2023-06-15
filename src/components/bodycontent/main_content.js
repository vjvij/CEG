import "./main_content.css"
function MainContent() {
    return <div style={{ height: "1000px",display:"flex" }}>
        <div style={{  display: "grid", gap: "30px", height:"1000px",width:"60%" }}>
            
            <div style={{ height: "250px", display: "flex", gap: "30px",justifyContent:"space-evenly" }} >
                <img height={"350px"} width={"350px"} src="https://cde.annauniv.edu/images/ADVERTISEMENT_CY2023_ODL.png" />
                <img height={"350px"} width={"350px"} src="https://cde.annauniv.edu/images/CDESCNIMG.png" />
            </div>
            <div style={{ height: "auto", display: "flex", gap: "80px",justifyContent:'space-around', }}>
                <div class="imgholder" style={{ backgroundColor: "#4b0082", height: "100px",width:"300px",padding:"10px" }} ><a href="pdf/AdvertisementAnna Univ CY2020.pdf" target="_child" title="Click here">

                </a>

                    <a href="https://cdefee.annauniv.edu/SIMS/index.php" target="_child" title="ONLINE SEMESTER FEE PAYMENT">  </a>
                    <strong style={{color:"white",fontSize:"20px"}} >FEE PAYMENT </strong>
                    <br></br>
                    <br></br>
                    <strong  style={{color:"red",backgroundColor:"white",cursor: "pointer"}}>Click here</strong>


                </div>
                <div style={{backgroundColor:"#ffffcc",width:"400px",height:"auto"}}>
                  <div className="detail_admission_heading">
                  <h4 style={{cursor: "pointer"}} > DETAILS OF THE ADMISSION: 2018 - 2019</h4>
                  <div>
                  <div style={{cursor: "pointer"}} >► AY 2018 (JULY. 2018).</div>
                  <div style={{cursor: "pointer"}} >► CY 2019 (FEB. 2019),</div>
                  <div style={{cursor: "pointer"}} >► AY 2019 (AUG. 2019)</div>
                  </div>
                  </div>
                  <div className="detail_admission_heading">
                  <h4 style={{cursor: "pointer"}} > DETAILS OF THE ADMISSION: 2018 - 2019</h4>
                  <div>
                  <div style={{cursor: "pointer"}} >► AY 2018 (JULY. 2018).</div>
                  <div style={{cursor: "pointer"}} >► CY 2019 (FEB. 2019),</div>
                  <div style={{cursor: "pointer"}} >► AY 2019 (AUG. 2019)</div>
                  </div>
                  </div>
                  <div className="detail_admission_heading">
                  <h4 style={{cursor: "pointer"}} > DETAILS OF THE ADMISSION: 2018 - 2019</h4>
                  <div>
                  <div style={{cursor: "pointer"}} >► AY 2018 (JULY. 2018).</div>
                  <div style={{cursor: "pointer"}} >► CY 2019 (FEB. 2019),</div>
                  <div style={{cursor: "pointer"}} >► AY 2019 (AUG. 2019)</div>
                  </div>
                  </div>
                  

            </div>
            </div>
           

        </div>
        <div style={{height:"500px",width:"100%",marginTop:"100px"}}>
              <div style={{height:"80px",backgroundColor:"#2d0033",color:'white',fontSize:"45px"}}>Latest News &Events</div>
              <div className="moving-text" style={{height:"500px", borderRadius:"20px",marginTop:"10px", display:"flex",justifyContent:"center"}}>
                <span 
            style={{width:"60%"}}><div style={{color:"red"}} > ★★★  JUNE 2023  ★★★ </div>
            <div style={{color:"blue"}}>DISTANCE EDUCATION CALENDAR YEAR (CY 2023)
SET 33 MBA, MCA & M.SC (CS) - TENTATIVE CONTACT CLASSES SCHEDULED ON 12TH & 13TH NOVEMBER 2022</div>
</span>

  {/* <span 
            style={{width:"60%"}}><div style={{color:"red"}} > ★★★  JUNE 2022  ★★★ </div>
            <div style={{color:"blue"}}>DISTANCE EDUCATION CALENDAR YEAR (CY 2023)
SET 33 MBA, MCA & M.SC (CS) - TENTATIVE CONTACT CLASSES SCHEDULED ON 12TH & 13TH NOVEMBER 2022</div>
</span> */}
   {/* <span 
            style={{width:"60%"}}><div style={{color:"red"}} > ★★★  JUNE 2023  ★★★ </div>
            <div style={{color:"blue"}}>DISTANCE EDUCATION CALENDAR YEAR (CY 2023)
SET 33 MBA, MCA & M.SC (CS) - TENTATIVE CONTACT CLASSES SCHEDULED ON 12TH & 13TH NOVEMBER 2022</div>
</span>

  <span 
            style={{width:"60%"}}><div style={{color:"red"}} > ★★★  JUNE 2022  ★★★ </div>
            <div style={{color:"blue"}}>DISTANCE EDUCATION CALENDAR YEAR (CY 2023)
SET 33 MBA, MCA & M.SC (CS) - TENTATIVE CONTACT CLASSES SCHEDULED ON 12TH & 13TH NOVEMBER 2022</div>
</span> */}
                {/* <span> ★★★ = JUNE 2022 = ★★★
DISTANCE ADVERTISEMENT AY 2022:
CDE-ADVERTISEMENT ACADEMIC YEAR 2022 (ODL MODE)</span>
                <span> ★★★  JUNE 2023  ★★★
DISTANCE EDUCATION CALENDAR YEAR (CY 2023)
SET 33 MBA, MCA & M.SC (CS) - TENTATIVE CONTACT CLASSES SCHEDULED ON 12TH & 13TH NOVEMBER 2022</span>
                <span> ★★★ = JUNE 2022 = ★★★
DISTANCE ADVERTISEMENT AY 2022:
CDE-ADVERTISEMENT ACADEMIC YEAR 2022 (ODL MODE)</span>
                <span> ★★★  JUNE 2023  ★★★
DISTANCE EDUCATION CALENDAR YEAR (CY 2023)
SET 33 MBA, MCA & M.SC (CS) - TENTATIVE CONTACT CLASSES SCHEDULED ON 12TH & 13TH NOVEMBER 2022</span>
                <span> ★★★ = JUNE 2022 = ★★★
DISTANCE ADVERTISEMENT AY 2022:
CDE-ADVERTISEMENT ACADEMIC YEAR 2022 (ODL MODE)</span>
              <span> ★★★  JUNE 2023  ★★★
DISTANCE EDUCATION CALENDAR YEAR (CY 2023)
SET 33 MBA, MCA & M.SC (CS) - TENTATIVE CONTACT CLASSES SCHEDULED ON 12TH & 13TH NOVEMBER 2022</span>
                <span> ★★★ = JUNE 2022 = ★★★
DISTANCE ADVERTISEMENT AY 2022:
CDE-ADVERTISEMENT ACADEMIC YEAR 2022 (ODL MODE)</span>
                <span>  <span> ★★★  JUNE 2023  ★★★
DISTANCE EDUCATION CALENDAR YEAR (CY 2023)
SET 33 MBA, MCA & M.SC (CS) - TENTATIVE CONTACT CLASSES SCHEDULED ON 12TH & 13TH NOVEMBER 2022</span></span>
                <span> ★★★ =JUNE 2022 = ★★★
DISTANCE ADVERTISEMENT AY 2022:
CDE-ADVERTISEMENT ACADEMIC YEAR 2022 (ODL MODE)</span> */}
              </div>
        </div>
    </div>
}
export default MainContent