import React,{useEffect,useState} from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import Button from '@mui/material/Button';
import Loading from './Landing'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const Qoutes = ()=>{
	const [conten,setcotent] = useState()
	const [auth,setauth] = useState()
    const [load,setloader] = useState(true)
  
	const apiurl = "https://type.fit/api/quotes";
     let  jsda  = "";
  
       let rand = Math.floor(Math.random() * 1643);
       let col = ["#8f59f9","#1e0059","#ff76a5","#611630","#de5256","#4836ff","#19705d","#158381","#9b3478","#00e091","#00bcd4","#e91e63","#8bc34a","#8bc34a","#910385","#9c27b0","#4caf50","#cbc323","#00bcd4","#a682ed","#6729e3","#00d5ff","#4caf50","#795548","#db3a00","#1ad0ab","#8d0081","#1f1e1e","#009688","#004d40"];
       let colra = Math.floor(Math.random() * col.length );
        
       
    const fetchDat = async (dta)=>{
    
    	try {
    	let res  = await fetch(dta)

    	 jsda = await res.json()
       

           if(jsda[rand].author == null){
              setauth("Manshu")
    	    } else {
              setloader(false)
          setcotent(jsda[rand].text)
          setauth(jsda[rand].author)
          document.body.style.backgroundColor = col[colra];
          
          }

      } catch(error){
      	console.log(error)
      }
   
     

    }

	 useEffect(()=>{
	 	fetchDat(apiurl)
	 },[])
  
  const Updat=()=>{
  	fetchDat(apiurl)
  }

   const whatss=()=>{
      let link = `whatsapp://send?text=${conten}`
     window.open(link)
   }  
     const cop=()=>{
       navigator.clipboard.writeText(conten);
        var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
       // alert("youcopy")
   }  
    
    if(load){
        return <Loading/>
    }

	return(<>
		 <nav>
      	<h1>Quote's</h1>
      </nav>

        <div className="container">
        	   <div className="midconatainer">
        			<h4>{conten}
        			</h4>

        			<strong>~{auth}</strong>

        			<Button variant="outlined" id="btn" onClick={Updat}>...</Button>
               </div>
               <div className="icons">
                
                 
                 <Button variant="outlined" class="btn2" id="wat" onClick={whatss} > <WhatsAppIcon className="whats" /></Button>
                   <Button variant="outlined" class="btn2" id="cop" onClick={cop} > <ContentCopyIcon className="whats" /></Button>
 

               </div>
        		</div>	
        	
	</>)
}
export default Qoutes;