const countryData = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then((res) => res.json())
        .then((countries) => displayCountries(countries));
}

const displayCountries = (countries) => {
    // console.log(countries[17]);
    const countriesHtml = countries.map((country) => countryHtml(country));
    const countriesContainer = document.getElementById('countries');
    countriesContainer.innerHTML = countriesHtml.join(' ');
}
countryData()

const countryHtml = ({ name, flags, capital, languages, coatOfArms, currencies }) => {
    // console.log(languages);
    const language = languages ? Object.values(languages) : {};
    // console.log(currencies);
    // for(let lan of language){
    //     console.log(lan);
    // }

    //values of object is the output
    const value = currencies ? Object.values(currencies)[0] : {};
    // console.log(value.name,value.symbol);
    // console.log(currencyObject[key]);
    // <h2>currencie:${currencyObject[key]?.name}</h2>
    // console.log(currencies);
    // let test = '';
    // for (let currencie in currencies) {
    //     test = currencie;
    //     // const curr = currencies[currencie];
    //     // console.log(curr);
    //     // for(let c in curr){
    //     //     const money = curr[c];
    //     //     console.log(money);
    //     //     test = money;
    //     // }
    // }
    return `
        <div class = 'country'>
            <img src = '${flags.png}'>
           <h1>Name:${name.common}</h1>
           <h2>Capital:${capital}</h2>
           <h2>language:${language[0]}</h2>
          <h2>currencie:${value.name}(${value.symbol})</h2>
            ${coatOfArms.png ? `<img src="${coatOfArms.png}"/>` : 'not found'}
        </div>
    `
}
{/* <h2>Capital:${currencies ? currencyObject[key]: 'not found'}</h2> */ }
// {/* <h2>Capital:${currencyObject[key]?.name}</h2> */}
// {
//     ${coatOfArms} ? <img src = '${coatOfArms.png}'>:<p>${'not available'}</p>
//     }
// async function func = () => {
//     try {
//         let response = await fetch('a valid url');
//         let user = await response.json();
//     } catch (err) {
//         // catches errors both in fetch and response.json
//         console.log('error message');
//     }
// }
// func();

// <img src="${coatOfArms.png}"></img>
//             ${coatOfArms.png ? '' : 'not found'}

// for(let language in languages){
//     const lang = languages[language];
//     // console.log(lang);
// }
// let test ='';
// for(let currencie in currencies){
//     const curr = currencies[currencie];
//     console.log(curr);
//     for(let c in curr){
//         const money = curr[c];
//         console.log(c);
//         test = money;
//     }
// }
// console.log( coatOfArms.png ? coatOfArms.png : 'not available' );
    // const coatOfArms = true;
