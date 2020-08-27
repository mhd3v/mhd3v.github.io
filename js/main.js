function monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}

// lord forgive me for what i am doing here
document.getElementById("current-work-exp").innerHTML = `(${monthDiff(new Date(2020, 3, 1), new Date())} months)`;