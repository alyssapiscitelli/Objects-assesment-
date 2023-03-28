

const ol =document.querySelector('ol');
const movies= [
{
    name: "Pride and Predjudice",
    year: '2005',
    director: 'Joe Wright',
   Image: 'https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDA0MzA4MzE@._V1_.jpg'
    },

    {
    name: 'Bride wars',
    year:'2009',
    director: 'Gary Winick',
    Image: 'https://www.dvdplanetstore.pk/wp-content/uploads/2013/12/Bride_Wars_DVD_Cover.jpg'
    },

    {
    name:'The Chronicles of Narnia',
    year: '2009',
    director:'Joe Johnston',
    Image: 'https://lumiere-a.akamaihd.net/v1/images/p_thechronicalsofnarnia_lionwitchwadrobe_19890_fe46d195.jpeg'
    },

]

const template =movies.map (movies=>  `

<li>
<p> Name ${movies.name}</p>

<p>Year ${movies.year}</p>

<p>Director ${movies.director}</p>

<p> <img src= '${movies.Image}'width= "250" /> </p>
</li>

`)
ol.innerHTML=template.join('');