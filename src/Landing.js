import boy from './images/boy.png';
const Landing = () => {
    const usrName = () =>{
        var input = document.getElementById("userInput").value;
        console.log(input);
        document.getElementById("uname").innerHTML= 'Hello ' + input + '!';
        document.getElementById("main-nav").classList.remove("class-hide");
        document.getElementById("home-hide").classList.add("class-hide");
        // document.getElementById("Sense").style.removeProperty('display');
    }

    return ( 
        <div id="home-hide" className="home flex flex-col items-center justify-center" >
            <div style={{marginTop:"20px"}}><span style={{fontSize:"150%"}}>Your Name: </span>
        <input id="userInput" type="text" /></div>
        <button onClick={() => usrName()} className=" btn bg-blue-500 hover:bg-blue-700 text-white font-​bold py-1 px-4 rounded " > Submit... </button>
        </div>
     );

  
}
 
export default Landing;