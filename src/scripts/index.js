const pictureOfTheDay = () => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then(response => response.json())
    .then(parsed => {
        const el = document.querySelector(".info__container");
        el.innerHTML += `
            <img src='${parsed.hdurl}'>
            <p>${parsed.title}</p>
            <p>${parsed.date}</p>
            <p>${parsed.explanation}</p>
            <p>Image Source: <a href="${parsed.hdurl}">${parsed.hdurl}</a></p>`
        }
    );
}


// Date needs to be "YYYY-MM-DD"
const pictureForDateSpecified = (someDate) => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${someDate}`)
    .then(response => response.json())
    .then(parsed => {
        const el = document.querySelector(".info__container");
        el.innerHTML += `
            <img src='${parsed.hdurl}'>
            <p>${parsed.title}</p>
            <p>${parsed.date}</p>
            <p>${parsed.explanation}</p>
            <p>Image Source: <a href="${parsed.hdurl}">${parsed.hdurl}</a></p>`
        }
    );
}

pictureForDateSpecified ("1996-01-01");