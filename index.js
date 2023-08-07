(function () {
    new Typed('#console1', {
        strings: [' echo hostname<br>'],
        typeSpeed: 100,
        showCursor: false
    });
    setTimeout(() => {
        var x = document.getElementsByClassName("s1")[0];
        console.log(x);
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }, 2200);   
    new Typed('#console2', {
        strings: ['^2320 echo education<br>'],
        typeSpeed: 100,
        showCursor: false
    });
    setTimeout(() => {
        var x = document.getElementsByClassName("s2")[0];
        console.log(x);
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }, 4800);
    new Typed('#console3', {
        strings: ['^5000 ls<br>'],
        typeSpeed: 100,
        showCursor: false
    });
    setTimeout(() => {
        var x = document.getElementsByClassName("s3")[0];
        console.log(x);
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }, 6000);
    new Typed('#console4', {
        strings: ['^6600 cat intro.txt<br>'],
        typeSpeed: 100,
        showCursor: false
    });
    setTimeout(() => {
        var x = document.getElementsByClassName("s4")[0];
        console.log(x);
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }, 8500);
})();