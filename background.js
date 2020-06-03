const target=document.getElementsByClassName("title style-scope ytmusic-player-bar")
const observer = new MutationObserver(records => {
    loader()
  });
observer.observe(target[0] ,{childList: true})
function loader(){
if (!document.getElementById("urlteleporter")){
main();
}
else{
var url=location.href;
document.getElementById("urlteleporter").href=url.replace("music.youtube","youtube");
}
}
function main(){
    var elem=document.getElementsByClassName("player-minimize-button style-scope ytmusic-player");
    var alter=document.createElement("a");
    var url=location.href;
    alter.id="urlteleporter";
    alter.innerText="Move";
    alter.href=url.replace("music.youtube","youtube");
    alter.classList.add("btn","btn-dark","text-center");
    alter.setAttribute("target","_blank");
    alter.setAttribute("rel","noopener noreferrer");
    elem[0].parentNode.appendChild(alter);
    }
