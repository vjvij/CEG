import "./footer.css";
function Footer() {

    return <div style={{height:"300px",backgroundColor:"#eaecff"}}>

        <div style={{display:"flex",justifyContent:"space-around"}}>
            <div>
                <div style={{display:"grid",gap:"10px" ,color:"blue",cursor: "pointer"}}> <div >Centre for Distance Education</div>
                   <div>  Anna Univeristy</div>
                    <div>Chennai</div>
                    <div>600025</div>
                    <div>Tel: <span style={{color:"green" }}>044-22357216/21</span></div>
                <div>Email: <span style={{color:"green"}}>distanceprog@annauniv.edu</span>
                </div>
                    </div>
                
            </div>

            <div  style={{display:"grid",gap:"10px",alignItems:"center",justifyContent:"center"}}>
                <img width={"400px"} height={"150px"} src="https://tse1.mm.bing.net/th?id=OIP.9Rhf-Puimwj9yq_G2HrIywHaEF&pid=Api&P=0&h=180" />
               <div> FIND US WITH GOOGLE MAPS »
                ROUTE MAP</div>
            </div>
            <div style={{display:"grid",gap:"10px"}}>
                   <h3>STAY UP TO DATE WITH WHATS HAPPENING</h3>
                   <div className="footer_social_media_icons" style={{display:"flex",height:"60px",cursor: "pointer"}}>
                     <div>
                        <img src="https://tse2.mm.bing.net/th?id=OIP.ioAVkOV4rYT_5FhBYQOx_QHaHa&pid=Api&P=0&h=180"/>
                     </div>
                     <div>
                        <img src="https://tse4.mm.bing.net/th?id=OIP.DgVNhFcvWWSCxJpVWsry4wHaHV&pid=Api&P=0&h=180"/>
                     </div>
                     <div>
                        <img src="https://tse1.mm.bing.net/th?id=OIP.F3xR8ls8kYW4hwfduKGa_wHaHa&pid=Api&P=0&h=180"/>
                     </div>
                     <div>
                        <img src="https://tse3.mm.bing.net/th?id=OIP.Aef0l7zB_RUxfOPFEs1EgQHaHa&pid=Api&P=0&h=180"/>
                     </div>
                     <div>
                        <img src="https://tse3.mm.bing.net/th?id=OIP.g2gp5mQrD0kg3FYUMRL-AwHaHa&pid=Api&P=0&h=180"/>
                     </div>
                     {/* <div>
                        <img src="https://rukminim1.flixcart.com/image/128/128/krjjde80/t-shirt/c/7/u/s-710-1-710-2-ftx-original-imag5b2jgfyk5gcw.jpeg?q=70"/>
                     </div> */}
                   </div>
                     <div>SUBSCRIBE TO OUR NEWSLETTER:</div>
                     <div>
                        <input placeholder="Enter email address"/>
                        <button style={{cursor: "pointer"}}>Submit</button>
                     </div>
            </div>

        </div>

        <div style={{marginTop:"25px",color:"red"}}>COPYRIGHT © 2014 - ALL RIGHTS RESERVED - TODAYS DATE :- 14/5/2023 TIME :- 11 : 20 : 20DESIGNED BY CDE WEB TEAM</div>

    </div>

}

export default Footer