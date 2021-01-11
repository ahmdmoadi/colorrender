//import domtoimage from 'domtoimage';
//import domtoimage from 'dom-to-image';

function gebi(x) {
    return document.getElementById(x);
}

let colstr;

gebi("file").addEventListener("change" , (e) => {
    let fileinputctrl = e.target;
    let files = fileinputctrl.files;

    let firstFile = files[0];

    let fileReader = new FileReader();

    fileReader.onload = (e) => {
        let fileContents = e.target.result;
        //gebi("out").innerText = fileContents;
        colstr = fileContents;

        colstr = colstr.split(" ");

        if(colstr[0]=="flex") {//begin printstuff
            for (let i=2;i<colstr.length;i++) {
                if (colstr[i] == "newline") {
                    out.innerHTML += "<br>";
                    tststr += "<br>";
                } else {
                    out.innerHTML += `<div class="cell" style="background:${colstr[i]};width:${colstr[1]}px;height:${colstr[1]}px"></div>`;
                    tststr += `<div class="cell" style="background:${colstr[i]}"></div>`;
                }
            }
        } else {
        for (let i=0;i<colstr.length;i++) {
            if (colstr[i] == "newline") {
                out.innerHTML += "<br>"
            } else {
                out.innerHTML += `<div class="cell" style="background:${colstr[i]}"></div>`;
            }
        } }//end printstuff
    }

    fileReader.readAsText(firstFile);
});

let processcol = gebi("process");
let out = gebi("out");
let colors = gebi("colors");
let tststr;

processcol.addEventListener("click", () => {
    colstr = "";
    colstr = colors.value;
    colstr = colstr.split(" ");
    console.log(colstr);
    if(colstr[0]=="flex") {
        for (let i=2;i<colstr.length;i++) {
            if (colstr[i] == "newline") {
                out.innerHTML += "<br>";
                tststr += "<br>";
            } else {
                out.innerHTML += `<div class="cell" style="background:${colstr[i]};width:${colstr[1]}px;height:${colstr[1]}px"></div>`;
                tststr += `<div class="cell" style="background:${colstr[i]};width:${colstr[1]}px;height:${colstr[1]}px"></div>`;
            }
        }
    } else {
        for (let i=0;i<colstr.length;i++) {
            if (colstr[i] == "newline") {
                out.innerHTML += "<br>";
                tststr += "<br>";
            } else {
                out.innerHTML += `<div class="cell" style="background:${colstr[i]}"></div>`;
                tststr += `<div class="cell" style="background:${colstr[i]}"></div>`;
                // setTimeout(() => {
                //     var node = document.getElementById(out);

                //     domtoimage.toPng(node)
                //     .then (function (dataUrl) {
                //         var img = new Image();
                //         img.src = dataUrl;
                //         document.appendChild(img);})
                //     .catch(function (error) {
                //         console.error('oops, something went wrong!', error);});
                // },2000);
                // var node = document.getElementById('out');

                // domtoimage.toPng(out)
                //     .then (function (dataUrl) {
                //         var img = new Image();
                //         img.src = dataUrl;
                //         document.appendChild(img);})
                //     .catch(function (error) {
                //         console.error('oops, something went wrong!', error);});
                //     }
            }
        }
    console.log(tststr);
    //for(colstr)
    //out.innerHTML += `<div style="background-color:`;
    }
});


document.addEventListener('DOMContentLoaded', function() {
    gebi("getPic").addEventListener("click", () => {
        domtoimage.toBlob(gebi("out"))
        .then((blob) => {
            window.saveAs(blob, "output.png");
            // document.body.insertAdjacentHTML("beforeend", `<img src="${blob}" />`);
            // console.log(""+blob);
        })
    })
});


