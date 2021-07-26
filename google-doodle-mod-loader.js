(() => {
  return new Promise(async (resolve, reject) => {  
    if (!Eu && !zu && !Hu) {
      reject("I couldn't find the game. Maybe try refreshing?")
    }
    console.log("GOOGLE DOODLE MOD LOADER\ncreated by cabalex for the 2021 Doodle Champion Island Games\nv0.1.0\n\nUpload your FNF song beatmap/mp3.")
    window.google.doodle.doodle_args.submitScoreUrl = "";
    // Get files
    var [f] = await window.showOpenFilePicker({"multiple": false, "types": [{"description": "FNF Beatmaps", "accept": {'application/json': ['.json']}}]})
    f = await f.getFile()
    var [f2] = await window.showOpenFilePicker({"multiple": false, "types": [{"description": "FNF Songs", "accept": {'audio/mpeg': ['.mp3', '.ogg']}}]})
    f2 = await f2.getFile()
    //
    // File reading begin
    //
    console.log("Loading files...")
    var beatmap = []
    var bpm = 120;
    var audio = document.createElement('audio');
    audio.setAttribute('id', 'tempModLoaderAudio')
    var reader = new FileReader();
    reader.onloadend = async function(e) {
      if (e.target.readyState == FileReader.DONE) {
        if (typeof(e.target.result) == "string") {
          var txt = JSON.parse(e.target.result);
          bpm = txt['song']['bpm'];
          var assignment = [3, 2, 0, 1];
          for (var j = 0; j < txt['song']['notes'].length; j++) {
            var section = txt['song']['notes'][j]
            /* Google Doodle mappings:
            # 0 - Right (FNF Left)
            # 1 - Up (FNF down)
            # 2 - Down (FNF up)
            # 3 - Left (FNF right)*/
            if (section['mustHitSection']) {
                // Ignore 2P notes (4-7)
                for (var i = 0; i < section['sectionNotes'].length; i++) {
                  var x = section['sectionNotes'][i];
                  if (x[1] < 4) {
                    beatmap.push({"type": assignment[x[1] % 4], "time": x[0]});
                  }
                }
            } else {
                // Ignore 2P notes (1-3)
                for (var i = 0; i < section['sectionNotes'].length; i++) {
                  var x = section['sectionNotes'][i];
                  if (x[1] > 3) {
                    beatmap.push({"type": assignment[x[1] % 4], "time": x[0]});
                  }
                }
            }
          }
          beatmap.sort((a, b) => a['time'] - b['time']);
          // Load this afterward
          reader.readAsArrayBuffer(f2);
        } else {
          var blob = new Blob([e.target.result], { type: 'audio/mpeg' })
          audio.src = URL.createObjectURL(blob)
          audio.addEventListener('durationchange', async function() {
            // Songs end with a type 10 note
            beatmap.push({"type": 10, "time": audio.duration*1000})
            // Find the key of disco
            var source = document.getElementsByTagName('html')[0].innerHTML;
            /*
            There is a different version of the Google Doodle hosted on rc1, rc2, rc3, and rc4-rc6.
            Each variable name is randomized, so you can't just use one on any other.
            This script checks for that and changes the variables accordingly.
            */
            for (var i = 1; i <= 6; i++) {
              if (source.indexOf("logos/2020/kitsune/rc" + i) > -1) {
                console.log("Running RC" + i + " - https://www.google.com/logos/2020/kitsune/rc" + i + "/kitsune20.html?hl=en" )
                switch(i) {
                  case 1:
                    A.C1.Ud.Sb = audio.src
                    A.C1.Qc = audio.duration*1000
                    var funcstr = zu.toString().replace(/.SPEED=[0-9.]*\}this/mg, ".SPEED=" + bpm + "}this")
                    zu.prototype.constructor = new Function("b", funcstr.substr(12, funcstr.length-13));
                    break;
                  case 2:
                    A.E1.Rd.Tb = audio.src
                    A.E1.Oc = audio.duration*1000
                    var funcstr = Eu.toString().replace(/.SPEED=[0-9.]*\}this/mg, ".SPEED=" + bpm + "}this")
                    Eu.prototype.constructor = new Function("b", funcstr.substr(12, funcstr.length-13));
                    // Cu - rock (third one, the three sisters gate)
                    // Bu - ballad (second one, underwater)
                    // Du - disco (first one, normal gate)
                    Du = beatmap;
                    break;
                  case 3:
                    A.I1.Rd.Tb = audio.src
                    A.I1.Oc = audio.duration*1000
                    var funcstr = Hu.toString().replace(/.SPEED=[0-9.]*\}this/mg, ".SPEED=" + bpm + "}this")
                    Hu.prototype.constructor = new Function("b", funcstr.substr(12, funcstr.length-13));
                    Du = beatmap;
                    break;
                  case 4:
                  case 5:
                  case 6:
                    A.K1.le.oc = audio.src
                    A.K1.Sc = audio.duration*1000
                    var funcstr = Hu.toString().replace(/.SPEED=[0-9.]*\}this/mg, ".SPEED=" + bpm + "}this")
                    Hu.prototype.constructor = new Function("b", funcstr.substr(12, funcstr.length-13));
                    Gu = beatmap;
                    break;
                  default:
                    console.error("Error: Unknown rc type? RC" + i)
                }
                break;
              }
            }
            //
            console.log("Finished loading successfully! Visit the main Artistic Swimming minigame to play.")
            resolve();
          }, false);
        }
      }
    }
    reader.readAsText(f)
  })
})();