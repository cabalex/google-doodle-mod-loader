(()=>new Promise(async(e,t)=>{Eu||zu||Hu||t("I couldn't find the game. Maybe try refreshing?"),console.log("GOOGLE DOODLE MOD LOADER\ncreated by cabalex for the 2021 Doodle Champion Island Games\nv0.1.0\n\nUpload your FNF song beatmap/mp3."),window.google.doodle.doodle_args.submitScoreUrl="";var[o]=await window.showOpenFilePicker({multiple:!1,types:[{description:"FNF Beatmaps",accept:{"application/json":[".json"]}}]});o=await o.getFile();var[n]=await window.showOpenFilePicker({multiple:!1,types:[{description:"FNF Songs",accept:{"audio/mpeg":[".mp3",".ogg"]}}]});n=await n.getFile(),console.log("Loading files...");var r=[],s=120,i=document.createElement("audio");i.setAttribute("id","tempModLoaderAudio");var a=new FileReader;a.onloadend=async function(t){if(t.target.readyState==FileReader.DONE)if("string"==typeof t.target.result){var o=JSON.parse(t.target.result);s=o.song.bpm;for(var c=[3,2,0,1],l=0;l<o.song.notes.length;l++){var u=o.song.notes[l];if(u.mustHitSection)for(var g=0;g<u.sectionNotes.length;g++){(d=u.sectionNotes[g])[1]<4&&r.push({type:c[d[1]%4],time:d[0]})}else for(g=0;g<u.sectionNotes.length;g++){var d;(d=u.sectionNotes[g])[1]>3&&r.push({type:c[d[1]%4],time:d[0]})}}r.sort((e,t)=>e.time-t.time),a.readAsArrayBuffer(n)}else{var p=new Blob([t.target.result],{type:"audio/mpeg"});i.src=URL.createObjectURL(p),i.addEventListener("durationchange",async function(){r.push({type:10,time:1e3*i.duration});for(var t=document.getElementsByTagName("html")[0].innerHTML,o=1;o<=6;o++)if(t.indexOf("logos/2020/kitsune/rc"+o)>-1){switch(console.log("Running RC"+o+" - https://www.google.com/logos/2020/kitsune/rc"+o+"/kitsune20.html?hl=en"),o){case 1:A.C1.Ud.Sb=i.src,A.C1.Qc=1e3*i.duration;var n=zu.toString().replace(/.SPEED=[0-9.]*\}this/gm,".SPEED="+s+"}this");zu.prototype.constructor=new Function("b",n.substr(12,n.length-13));break;case 2:A.E1.Rd.Tb=i.src,A.E1.Oc=1e3*i.duration;n=Eu.toString().replace(/.SPEED=[0-9.]*\}this/gm,".SPEED="+s+"}this");Eu.prototype.constructor=new Function("b",n.substr(12,n.length-13)),Du=r;break;case 3:A.I1.Rd.Tb=i.src,A.I1.Oc=1e3*i.duration;n=Hu.toString().replace(/.SPEED=[0-9.]*\}this/gm,".SPEED="+s+"}this");Hu.prototype.constructor=new Function("b",n.substr(12,n.length-13)),Du=r;break;case 4:case 5:case 6:A.K1.le.oc=i.src,A.K1.Sc=1e3*i.duration;n=Hu.toString().replace(/.SPEED=[0-9.]*\}this/gm,".SPEED="+s+"}this");Hu.prototype.constructor=new Function("b",n.substr(12,n.length-13)),Gu=r;break;default:console.error("Error: Unknown rc type? RC"+o)}break}console.log("Finished loading successfully! Visit the main Artistic Swimming minigame to play."),e()},!1)}},a.readAsText(o)}))();