import React, { useState } from 'react';


const countryAndCapital = [
  {
    country: 'Country',
    capital: "Capital",
  },
  {
    country: 'Afghanistan',
    capital: "Kabul",
  },
  {
    country: 'Albania',
    capital: "Tirana",
  },
  {
    country: 'Algeria',
    capital: "Algiers",
  },
  {
    country: 'Andorra',
    capital: "Andorra la Vella",
  },
  {
    country: 'Angola',
    capital: "Luanda",
  },
  {
    country: 'Antigua and Barbuda',
    capital: "St. John's",
  },
  {
    country: 'Argentina',
    capital: "Buenos Aires",
  },
  {
    country: 'Armenia',
    capital: "Yerevan",
  },
  {
    country: 'Australia',
    capital: "Canberra",
  },
  {
    country: 'Austria',
    capital: "Vienna",
  },
  {
    country: 'Azerbaijan',
    capital: "Baku",
  },
  {
    country: 'Bahamas',
    capital: "Nassau",
  },
  {
    country: 'Bahrain',
    capital: "Manama",
  },
  {
    country: 'Bangladesh',
    capital: "Dhaka",
  },
  {
    country: 'Barbados',
    capital: "Bridgetown",
  },
  {
    country: 'Belarus',
    capital: "Minsk",
  },
  {
    country: 'Belgium',
    capital: "Brussels",
  },
  {
    country: 'Belize',
    capital: "Belmopan",
  },
  {
    country: 'Benin',
    capital: "Porto-Novo",
  },
  {
    country: 'Bhutan',
    capital: "Thimphu",
  },
  {
    country: 'Bolivia',
    capital: "Sucre",
  },
  {
    country: 'Bosnia and Herzegovina',
    capital: "Sarajevo",
  },
  {
    country: 'Botswana',
    capital: "Gaborone",
  },
  {
    country: 'Brazil',
    capital: "BrasÃ­lia",
  },
  {
    country: 'Brunei',
    capital: "Bandar Seri Begawan",
  },
  {
    country: 'Bulgaria',
    capital: "Sofia",
  },
  {
    country: 'Burkina Faso',
    capital: "Ouagadougou",
  },
  {
    country: 'Burundi',
    capital: "Gitega",
  },
  {
    country: 'Cabo Verde',
    capital: "Praia",
  },
  {
    country: 'Cambodia',
    capital: "Phnom Penh",
  },
  {
    country: 'Cameroon',
    capital: "YaoundÃ©",
  },
  {
    country: 'Canada',
    capital: "Ottawa",
  },
  {
    country: 'Central African Republic',
    capital: "Bangui",
  },
  {
    country: 'Chad',
    capital: "N'Djamena",
  },
  {
    country: 'Chile',
    capital: "Santiago",
  },
  {
    country: 'China',
    capital: "Beijing",
  },
  {
    country: 'Colombia',
    capital: "BogotÃ¡",
  },
  {
    country: 'Comoros',
    capital: "Moroni",
  },
  {
    country: 'Congo (Congo-Brazzaville)',
    capital: "Brazzaville",
  },
  {
    country: 'Congo (Democratic Republic) ',
    capital: "Kinshasa",
  },
  {
    country: 'Costa Rica',
    capital: "San JosÃ©",
  },
  {
    country: 'Croatia',
    capital: "Zagreb",
  },
  {
    country: 'Cuba',
    capital: "Havana",
  },
  {
    country: 'Cyprus',
    capital: "Nicosia",
  },
  {
    country: 'Czech Republic',
    capital: "Prague",
  },
  {
    country: 'Denmark',
    capital: "Copenhagen",
  },
  {
    country: 'Djibouti',
    capital: "Djibouti",
  },
  {
    country: 'Dominica',
    capital: "Roseau",
  },
  {
    country: 'Dominican Republic',
    capital: "Santo Domingo",
  },
  {
    country: 'Ecuador',
    capital: "Quito",
  },
  {
    country: 'Egypt',
    capital: "Cairo",
  },
  {
    country: 'El Salvador',
    capital: "San Salvador",
  },
  {
    country: 'Equatorial Guinea',
    capital: "Malabo",
  },
  {
    country: 'Eritrea',
    capital: "Asmara",
  },
  {
    country: 'Estonia',
    capital: "Tallinn",
  },
  {
    country: 'Eswatini',
    capital: "Mbabane",
  },
  {
    country: 'Ethiopia',
    capital: "Addis Ababa",
  },
  {
    country: 'Fiji',
    capital: "Suva",
  },
  {
    country: 'Finland',
    capital: "Helsinki",
  },
  {
    country: 'France',
    capital: "Paris",
  },
  {
    country: 'Gabon',
    capital: "Libreville",
  },
  {
    country: 'Gambia',
    capital: "Banjul",
  },
  {
    country: 'Georgia',
    capital: "Tbilisi",
  },
  {
    country: 'Germany',
    capital: "Berlin",
  },
  {
    country: 'Ghana',
    capital: "Accra",
  },
  {
    country: 'Greece',
    capital: "Athens",
  },
  {
    country: 'Grenada',
    capital: "St. George's",
  },
  {
    country: 'Guatemala',
    capital: "Guatemala City",
  },
  {
    country: 'Guinea',
    capital: "Conakry",
  },
  {
    country: 'Guinea-Bissau',
    capital: "Bissau",
  },
  {
    country: 'Guyana',
    capital: "Georgetown",
  },
  {
    country: 'Haiti',
    capital: "Port-au-Prince",
  },
  {
    country: 'Honduras',
    capital: "Tegucigalpa",
  },
  {
    country: 'Hungary',
    capital: "Budapest",
  },
  {
    country: 'Iceland',
    capital: "ReykjavÃ­k",
  },
  {
    country: 'India',
    capital: "New Delhi",
  },
  {
    country: 'Indonesia',
    capital: "Jakarta",
  },
  {
    country: 'Iran',
    capital: "Tehran",
  },
  {
    country: 'Iraq',
    capital: "Baghdad",
  },
  {
    country: 'Ireland',
    capital: "Dublin",
  },
  {
    country: 'Israel',
    capital: "Jerusalem",
  },
  {
    country: 'Italy',
    capital: "Rome",
  },
  {
    country: 'Jamaica',
    capital: "Kingston",
  },
  {
    country: 'Japan',
    capital: "Tokyo",
  },
  {
    country: 'Jordan',
    capital: "Amman",
  },
  {
    country: 'Kazakhstan',
    capital: "Astana",
  },
  {
    country: 'Kenya',
    capital: "Nairobi",
  },
  {
    country: 'Kiribati',
    capital: "South Tarawa",
  },
  {
    country: 'Korea (North)',
    capital: "Pyongyang",
  },
  {
    country: 'Korea (South)',
    capital: "Seoul",
  },
  {
    country: 'Kuwait',
    capital: "Kuwait City",
  },
  {
    country: 'Kyrgyzstan',
    capital: "Bishkek",
  },
  {
    country: 'Laos',
    capital: "Vientiane",
  },
  {
    country: 'Latvia',
    capital: "Riga",
  },
  {
    country: 'Lebanon',
    capital: "Beirut",
  },
  {
    country: 'Lesotho',
    capital: "Maseru",
  },
  {
    country: 'Liberia',
    capital: "Monrovia",
  },
  {
    country: 'Libya',
    capital: "Tripoli",
  },
  {
    country: 'Liechtenstein',
    capital: "Vaduz",
  },
  {
    country: 'Lithuania',
    capital: "Vilnius",
  },
  {
    country: 'Luxembourg',
    capital: "Luxembourg City",
  },
  {
    country: 'Madagascar',
    capital: "Antananarivo",
  },
  {
    country: 'Malawi',
    capital: "Lilongwe",
  },
  {
    country: 'Malaysia',
    capital: "Kuala Lumpur",
  },
  {
    country: 'Maldives',
    capital: "MalÃ©",
  },
  {
    country: 'Mali',
    capital: "Bamako",
  },
  {
    country: 'Malta',
    capital: "Valletta",
  },
  {
    country: 'Marshall Islands',
    capital: "Majuro",
  },
  {
    country: 'Mauritania',
    capital: "Nouakchott",
  },
  {
    country: 'Mauritius',
    capital: "Port Louis",
  },
  {
    country: 'Mexico',
    capital: "Mexico City",
  },
  {
    country: 'Micronesia',
    capital: "Palikir",
  },
  {
    country: 'Moldova',
    capital: "ChiÈ™inÄƒu",
  },
  {
    country: 'Monaco',
    capital: "Monaco",
  },
  {
    country: 'Mongolia',
    capital: "Ulaanbaatar",
  },
  {
    country: 'Montenegro',
    capital: "Podgorica",
  },
  {
    country: 'Morocco',
    capital: "Rabat",
  },
  {
    country: 'Mozambique',
    capital: "Maputo",
  },
  {
    country: 'Myanmar',
    capital: "Naypyidaw",
  },
  {
    country: 'Namibia',
    capital: "Windhoek",
  },
  {
    country: 'Nauru',
    capital: "Yaren",
  },
  {
    country: 'Nepal',
    capital: "Kathmandu",
  },
  {
    country: 'Netherlands',
    capital: "Amsterdam",
  },
  {
    country: 'New Zealand',
    capital: "Wellington",
  },
  {
    country: 'Nicaragua',
    capital: "Managua",
  },
  {
    country: 'Niger',
    capital: "Niamey",
  },
  {
    country: 'Nigeria',
    capital: "Abuja",
  },
  {
    country: 'North Macedonia',
    capital: "Skopje",
  },
  {
    country: 'Norway',
    capital: "Oslo",
  },
  {
    country: 'Oman',
    capital: "Muscat",
  },
  {
    country: 'Pakistan',
    capital: "Islamabad",
  },
  {
    country: 'Palau',
    capital: "Ngerulmud",
  },
  {
    country: 'Panama',
    capital: "Panama City",
  },
  {
    country: 'Papua New Guinea',
    capital: "Port Moresby",
  },
  {
    country: 'Paraguay',
    capital: "AsunciÃ³n",
  },
  {
    country: 'Peru',
    capital: "Lima",
  },
  {
    country: 'Philippines',
    capital: "Manila",
  },
  {
    country: 'Poland',
    capital: "Warsaw",
  },
  {
    country: 'Portugal',
    capital: "Lisbon",
  },
  {
    country: 'Qatar',
    capital: "Doha",
  },
  {
    country: 'Romania',
    capital: "Bucharest",
  },
  {
    country: 'Russia',
    capital: "Moscow",
  },
  {
    country: 'Rwanda',
    capital: "Kigali",
  },
  {
    country: 'Saint Kitts and Nevis',
    capital: "Basseterre",
  },
  {
    country: 'Saint Lucia',
    capital: "Castres",
  },
  {
    country: 'Saint Vincent and the Grenadines',
    capital: "Kingstown",
  },
  {
    country: 'Samoa',
    capital: "Apia",
  },
  {
    country: 'San Marino',
    capital: "San Marino",
  },
  {
    country: 'Sao Tome and Principe',
    capital: "SÃ£o TomÃ©",
  },
  {
    country: 'Saudi Arabia',
    capital: "Riyadh",
  },
  {
    country: 'Senegal',
    capital: "Dakar",
  },
  {
    country: 'Serbia',
    capital: "Belgrade",
  },
  {
    country: 'Seychelles',
    capital: "Victoria",
  },
  {
    country: 'Sierra Leone',
    capital: "Freetown",
  },
  {
    country: 'Singapore',
    capital: "Singapore",
  },
  {
    country: 'Slovakia',
    capital: "Bratislava",
  },
  {
    country: 'Slovenia',
    capital: "Ljubljana",
  },
  {
    country: 'Solomon Islands',
    capital: "Honiara",
  },
  {
    country: 'Somalia',
    capital: "Mogadishu",
  },
  {
    country: 'South Africa',
    capital: "Pretoria",
  },
  {
    country: 'South Sudan',
    capital: "Juba",
  },
  {
    country: 'Spain',
    capital: "Madrid",
  },
  {
    country: 'Sri Lanka',
    capital: "Colombo",
  },
  {
    country: 'Sudan',
    capital: "Khartoum",
  },
  {
    country: 'Suriname',
    capital: "Paramaribo",
  },
  {
    country: 'Sweden',
    capital: "Stockholm",
  },
  {
    country: 'Switzerland',
    capital: "Zurich",
  },
  {
    country: 'Syria',
    capital: "Damascus",
  },
  {
    country: 'Taiwan',
    capital: "Taipei",
  },
  {
    country: 'Tajikistan',
    capital: "Dushanbe",
  },
  {
    country: 'Tanzania',
    capital: "Dodoma",
  },
  {
    country: 'Thailand',
    capital: "Bangkok",
  },
  {
    country: 'Timor-Leste',
    capital: "Dili",
  },
  {
    country: 'Togo',
    capital: "LomÃ©",
  },
  {
    country: 'Tonga',
    capital: "Nuku'alofa",
  },
  {
    country: 'Trinidad and Tobago',
    capital: "Port of Spain",
  },
  {
    country: 'Tunisia',
    capital: "Tunis",
  },
  {
    country: 'Turkey',
    capital: "Ankara",
  },
  {
    country: 'Turkmenistan',
    capital: "Ashgabat",
  },
  {
    country: 'Tuvalu',
    capital: "Funafuti",
  },
  {
    country: 'Uganda',
    capital: "Kampala",
  },
  {
    country: 'Ukraine',
    capital: "Kiev",
  },
  {
    country: 'United Arab Emirates',
    capital: "Abu Dhabi",
  },
  {
    country: 'United Kingdom',
    capital: "London",
  },
  {
    country: 'United States',
    capital: "Washington",
  },
  {
    country: 'Uruguay',
    capital: "Montevideo",
  },
  {
    country: 'Uzbekistan',
    capital: "Tashkent",
  },
  {
    country: 'Vanuatu',
    capital: "Port Vila",
  },
  {
    country: 'Vatican City',
    capital: "Vatican City",
  },
  {
    country: 'Venezuela',
    capital: "Caracas",
  },
  {
    country: 'Vietnam',
    capital: "Hanoi",
  },
  {
    country: 'Yemen',
    capital: "Sana'a",
  },
  {
    country: 'Zambia',
    capital: "Lusaka",
  },
  {
    country: 'Zimbabwe',
    capital: "Harare",
  }
];



function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getDefinitions(currentWordIndex)
{
  let correctWordIndex = getRandomInt(0,4)
  
  let definitions = []
  let usedDefinitions = [countryAndCapital[currentWordIndex].capital]

  for(let i = 0; i < 5; ++i)
  {
    let selectedDefinition = ""
    if(i === correctWordIndex)
    {
      selectedDefinition = countryAndCapital[currentWordIndex].capital  
    }
    else
    {
      selectedDefinition = countryAndCapital[getRandomInt(0, countryAndCapital.length -1)].capital  
      while(usedDefinitions.includes(selectedDefinition))
      {
        selectedDefinition = countryAndCapital[getRandomInt(0, countryAndCapital.length -1)].capital  
      }
      usedDefinitions.push(selectedDefinition)
    }
    definitions.push(selectedDefinition)
  }

  return definitions
}

function App() {
  const [currentWordIndex, setCurrentWordIndex] = useState(getRandomInt(0,countryAndCapital.length - 1));
  const [selectedDefinition, setSelectedDefinition] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [curentDefinitions, setCurrentDefinitions] = useState(getDefinitions(currentWordIndex))

  const handleAnswerClick = (definition) => {
    if (definition === countryAndCapital[currentWordIndex].capital) {
      setScore(score + 1);
    }
    setSelectedDefinition(definition);
    setIsAnswered(true);
  };

  const handleNextWord = () => {
      let nextWordIndex = getRandomInt(0,countryAndCapital.length)
      setCurrentWordIndex(nextWordIndex);
      setCurrentDefinitions(getDefinitions(nextWordIndex))
      setIsAnswered(false);
      setSelectedDefinition(null);
      
  };


  return (
    <div className="App">
      <h1>Capitals Quiz</h1>
      <p>Current Score: {score}</p>
      <h2>What is the capital of "{countryAndCapital[currentWordIndex].country}"?</h2>

      <div>
        {
        
        curentDefinitions.map((definition, index) => (
          <React.Fragment key={index}>
          <button
            //key={index}
            onClick={() => handleAnswerClick(definition)}
            disabled={isAnswered}
            style={{
              fontSize: '20px',
              marginBottom: '10px',
              backgroundColor:
                isAnswered
                  ? definition === countryAndCapital[currentWordIndex].capital
                    ? 'lightgreen'
                    : 'salmon'
                  : 'lightgray',
              color: 'black',

            }}
          >
          
            {definition}
          </button>
          <br/>
          </React.Fragment>
        ))
        
        }
      </div>

      {isAnswered && (
        <div>
          <p>
            {selectedDefinition === countryAndCapital[currentWordIndex].capital
              ? 'Correct!'
              : `Incorrect! The correct answer was: "${countryAndCapital[currentWordIndex].capital}"`}
          </p>
          
          <button onClick={handleNextWord}>Next country</button>
        </div>
      )}
    </div>
  );
}

export default App;
