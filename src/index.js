import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CommonContext } from './context';


const data = [
  {
      _id: 1,
      age: 72,
      name: 'Geraldine Shepard',
      address: '173 Portland Avenue, Fivepointville, New Hampshire, 3613'
  },
  {
      _id: 2,
      age: 97,
      name: 'Browning Cline',
      address: '177 Forest Place, Dundee, Northern Mariana Islands, 7967'
  },
  {
      _id: 3,
      age: 52,
      name: 'Doreen Banks',
      address: '680 Rodney Street, Tryon, Alaska, 8940'
  },
  {
      _id: 4,
      age: 58,
      name: 'Knapp Oneill',
      address: '266 Vandervoort Avenue, Chical, Washington, 8102'
  },
  {
      _id: 5,
      age: 58,
      name: 'Duran Schultz',
      address: '836 Beaver Street, Rosedale, Wisconsin, 6097'
  },
  {
      _id: 6,
      age: 18,
      name: 'Hickman Drake',
      address: '733 Bedford Avenue, Rosine, California, 9307'
  },
  {
      _id: 7,
      age: 93,
      name: 'Dominique Sullivan',
      address: '271 Glenwood Road, Vallonia, Indiana, 2220'
  },
  {
      _id: 8,
      age: 27,
      name: 'Tasha Hogan',
      address: '872 Richmond Street, Faxon, Connecticut, 3191'
  },
  {
      _id: 9,
      age: 90,
      name: 'Bright Bradley',
      address: '633 Holt Court, Mappsville, Ohio, 8103'
  },
  {
      _id: 10,
      age: 69,
      name: 'Pat Buchanan',
      address: '463 Chestnut Avenue, Kimmell, Colorado, 5022'
  },
  {
      _id: 11,
      age: 17,
      name: 'Donaldson Maxwell',
      address: '444 Gardner Avenue, Naomi, Arizona, 5456'
  },
  {
      _id: 12,
      age: 82,
      name: 'Wilda Kelley',
      address: '530 Pineapple Street, Cuylerville, Federated States Of Micronesia, 8212'
  },
  {
      _id: 13,
      age: 30,
      name: 'Jenny Holland',
      address: '831 Karweg Place, Fannett, Georgia, 5009'
  },
  {
      _id: 14,
      age: 63,
      name: 'Becker Brennan',
      address: '460 Monaco Place, Nipinnawasee, Rhode Island, 6536'
  },
  {
      _id: 15,
      age: 15,
      name: 'Emma York',
      address: '992 Canarsie Road, Cutter, Maryland, 7487'
  },
  {
      _id: 16,
      age: 13,
      name: 'Benita Guerrero',
      address: '990 Clark Street, Leola, Delaware, 5391'
  },
  {
      _id: 17,
      age: 12,
      name: 'Miriam Thompson',
      address: '706 Malta Street, Bainbridge, Minnesota, 6891'
  },
  {
      _id: 18,
      age: 94,
      name: 'Rosalyn Randolph',
      address: '484 Elliott Place, Bendon, Virgin Islands, 9254'
  },
  {
      _id: 19,
      age: 30,
      name: 'Gonzales Mathews',
      address: '323 Woodrow Court, Grayhawk, Illinois, 6495'
  },
  {
      _id: 20,
      age: 64,
      name: 'Porter Mcconnell',
      address: '579 Hampton Place, Leroy, Iowa, 7179'
  },
  {
      _id: 21,
      age: 69,
      name: 'Boyer Noble',
      address: '983 Ovington Court, Eggertsville, New Jersey, 9219'
  },
  {
      _id: 22,
      age: 68,
      name: 'Ratliff Tyson',
      address: '674 Cox Place, Jeff, Michigan, 241'
  },
  {
      _id: 23,
      age: 93,
      name: 'Cleo Silva',
      address: '534 Newkirk Placez, Gorham, Florida, 5612'
  },
  {
      _id: 24,
      age: 69,
      name: 'Dominguez Bartlett',
      address: '500 Crescent Street, Morgandale, Palau, 1623'
  },
  {
      _id: 25,
      age: 37,
      name: 'Hattie Wolfe',
      address: '319 Whitney Avenue, Snelling, Hawaii, 2888'
  },
  {
      _id: 26,
      age: 99,
      name: 'Maxwell Acosta',
      address: '989 Seabring Street, Iola, Guam, 7890'
  },
  {
      _id: 27,
      age: 55,
      name: 'Parsons Rich',
      address: '279 Barbey Street, Farmington, Oklahoma, 9447'
  },
  {
      _id: 28,
      age: 44,
      name: 'Cruz Glass',
      address: '515 Micieli Place, Waterloo, New York, 688'
  },
  {
      _id: 29,
      age: 56,
      name: 'Flossie Mccarty',
      address: '269 Auburn Place, Sunwest, Idaho, 7479'
  },
  {
      _id: 30,
      age: 19,
      name: 'Tina Park',
      address: '715 Arlington Place, Nash, Oregon, 7507'
  },
  {
      _id: 31,
      age: 25,
      name: 'Gayle Michael',
      address: '825 Bleecker Street, Ilchester, Nevada, 614'
  },
  {
      _id: 32,
      age: 40,
      name: 'Burgess Bernard',
      address: '494 Kingsway Place, Hilltop, American Samoa, 7749'
  },
  {
      _id: 33,
      age: 32,
      name: 'Sybil Winters',
      address: '218 Locust Street, Takilma, Massachusetts, 8632'
  },
  {
      _id: 34,
      age: 82,
      name: 'Alvarez Barry',
      address: '376 Stockton Street, Eastvale, Mississippi, 4164'
  },
  {
      _id: 35,
      age: 34,
      name: 'Paige Henry',
      address: '366 Monroe Place, Sunnyside, South Carolina, 2170'
  },
  {
      _id: 36,
      age: 12,
      name: 'Arlene Mcfadden',
      address: '304 Conover Street, Hiseville, Tennessee, 9981'
  },
  {
      _id: 37,
      age: 56,
      name: 'Ana Harrell',
      address: '121 Herkimer Street, Herbster, Virginia, 8584'
  },
  {
      _id: 38,
      age: 89,
      name: 'Reyna Schmidt',
      address: '908 Glenmore Avenue, Fairforest, Wyoming, 4831'
  },
  {
      _id: 39,
      age: 10,
      name: 'Beatrice Powell',
      address: '635 Fiske Place, Fairhaven, Marshall Islands, 6612'
  },
  {
      _id: 40,
      age: 71,
      name: 'Mayo Valenzuela',
      address: '798 Dunne Court, Cresaptown, Nebraska, 1433'
  },
  {
      _id: 41,
      age: 87,
      name: 'Isabel Holman',
      address: '195 Bogart Street, Hanover, Texas, 3335'
  },
  {
      _id: 42,
      age: 28,
      name: 'Dana Morgan',
      address: '279 Strong Place, Martinsville, Kansas, 5868'
  },
  {
      _id: 43,
      age: 32,
      name: 'Salazar Bishop',
      address: '496 Harrison Avenue, Blende, Kentucky, 1409'
  }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CommonContext.Provider value={data}>
    <App />
    </CommonContext.Provider>
 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
