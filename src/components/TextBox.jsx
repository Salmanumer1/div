import React,{useState} from "react";

const TextBox=(props)=>{
  const [text,setText]=useState("");
  const[words,setWords]=useState(0);
  const [history, setHistory] = useState([]);
  const [number, setNumber] = useState(0);
   const [number2, setNumber2] = useState(0);
 const [add, setAdd] = useState(0);
  const [sign, setSign] = useState('');

  const convert=()=>{
    let change=text.toUpperCase();
    setText(change);
  }
  const handleLowerCase=()=>{
    let lower=text.toLowerCase(text);
    setText(lower);
  }
  const handleOnChange=(event)=>{
    setText(event.target.value)

  }
  const cal=()=>{
    let num=text.split(" ").length/3;
    setWords(num);

  }
  const saveHistory = () => {
  if (text.trim() !== "") {
    setHistory([...history, text]);
  }
 
}
 const copy=()=>{
   navigator.clipboard.writeText(text);
  }
  const Addition=()=>{
  let ad=Number(number)+Number(number2);
  setSign('+ Addition of numbers..')
  setAdd(ad);
  }
    const Subtraction=()=>{
  let sub=Number(number)-Number(number2);
  setSign('- Subtracion of numbers..')
  setAdd(sub);
  }

    const multiplication=()=>{
  let mul=Number(number)*Number(number2);
  setSign('*  Multiplication of numbers..')
  setAdd(mul);
  }

    const division=()=>{
  let div=Number(number)/Number(number2);
  setSign('/ Division of numbers..')
  setAdd(div);
  }


  
    return(
    
    <>

<div style={{ display: "flex",}} >
  <div style={{
  position: "fixed",      // keeps it fixed while scrolling
  top: "48px",            // start below the navbar (adjust as per navbar height)
  left: 0,                // left side of page
  width: "300px",         // fixed width
  height: "100vh", // full height minus navbar
  backgroundColor: "#2d2d2d",
  color: "white",
  padding: "10px",
  overflowY: "auto",
  borderRight: "1px solid #555"
  }}>
    <h6>History</h6>
    {history.map((item, index) => (
      <p key={index}
         style={{
           background: "#444",
           padding: "5px",
           borderRadius: "5px",
           cursor: "pointer"
         }}
         onClick={() => setText(item)}
      >
        {item}<button className="btn btn-warning mx-3" value={index} onClick={() => {
  setHistory(prev => prev.filter((_, i) => i !== index))}}>Delete</button>
      </p>
    ))}

    
  </div>
    <div style={{
  position: "fixed",      // keeps it fixed while scrolling
  top: "48px",            // start below the navbar (adjust as per navbar height)
  right: 0,                // left side of page
  width: "300px",         // fixed width
  height: "100vh", // full height minus navbar
  backgroundColor: "#2d2d2d",
  color: "white",
  padding: "10px",
  overflowY: "auto",
  borderRight: "1px solid #555"
  }}>
    <h6>Features Calculator</h6>
    
      <button className="btn btn-warning mx-3" onClick={Addition}>+</button>
      <button className="btn btn-warning mx-3" onClick={Subtraction}>-</button>
      <button className="btn btn-warning mx-3" onClick={multiplication}>*</button>
      <button className="btn btn-warning mx-3" onClick={division}>/</button>  
      <input className="form-control me-2 my-3" type="text" value={Number(number)} onChange={(e)=>setNumber(e.target.value)}/>
      <input className="form-control me-2 my-3" type="text" value={Number(number2)} onChange={(e)=>setNumber2(e.target.value)}/>
    <div className="card">
  <div className="card-body">
    <h5 className="card-title">Answer</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">{sign}</h6>
     <input className="form-control me-2 my-3" value={add} onChange={(e)=>{e.target.value}}/>
  </div>
</div>
  </div>


<div className="containermb-5" style={{ flex: 1, }}>
 
  <h3>{props.heading}</h3>
  <label htmlFor="Mybox" className="form-label">Analyze Text</label>
  <textarea className="form-control  bg-warning-border-subtle" value={text} onChange={handleOnChange} id="Mybox" rows="8"></textarea>
  
<button type="button" className="btn btn-warning my-3" onClick={convert}>Convert To Capital</button>

<button type="button" className="btn btn-warning my-3 mx-3" onClick={handleLowerCase}>Convert To Lower Case</button>
<button className="btn btn-warning my-3 mx-2" onClick={saveHistory}>
  Save
</button>
<button className="btn btn-warning my-3 mx-2" onClick={copy}>
  copy
</button>
<h3 >Text Summary</h3>
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       Check Characters
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
       <p style={{ color: "black", width:"20%"}}>Characters are {text.length}</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Check Words
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p style={{ color: "black",width:"20%" }}>Words are {text.split(" ").length-1}</p>

      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Minutes to Read
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <p style={{color: "black",width:"20%"}}>Minutes To Read {0.08*text.split(" ").length}</p>
      </div>
    </div>
  </div>
</div>



<button className="btn btn-warning my-3" onClick={cal}>Calculate Summary Words</button>
<p className="my-3" style={{ backgroundColor: "Pink", color: "black",width:"36%" }}>Words for Summary are {words}</p>
</div>

</div>

</>
)
}
export default TextBox;