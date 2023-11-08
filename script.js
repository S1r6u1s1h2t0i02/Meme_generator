async function getMemes(){
    var raw=await fetch("https://api.imgflip.com/get_memes")
    var result=await raw.json()
    //console.log(result)
    //console.log(result.data.memes)
    console.log(Math.random())
    var index=Math.floor(Math.random()*100)
    var array=result.data.memes
    var image=document.querySelector(".card img")
    var caption=document.querySelector(".card h2")
    image.src=array[index].url
    caption.innerHTML=array[index].name
}
getMemes()