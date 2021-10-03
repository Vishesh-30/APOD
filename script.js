fetch('https://api.nasa.gov/planetary/apod?api_key=LqMffyTdTaLX6kpKyN7GZYaih4jvSvUA1W9t9LPg')
    .then(data => data.json())
    .then(APOD_Data =>{
        const APOD_Title = APOD_Data.title;
        const Title = document.getElementById('title')

        Title.innerHTML = APOD_Title;

        const APOD_date = APOD_Data.date;
        const date = document.getElementById('date')

        date.innerHTML = APOD_date;
      
        const myImage = document.getElementById('image');
        myImage.innerHTML= `<img src="${ APOD_Data.hdurl}" alt="">`


        const APOD_explanation = APOD_Data.explanation;
        const explanation = document.getElementById('explanation')

        explanation.innerHTML = APOD_explanation;

        const APOD_copyright = APOD_Data.copyright;
        const copyright = document.getElementById('copyright')

        copyright.innerHTML = APOD_copyright;

    })

