import React from "react";
import Cards from "./Employe_1";
import Employe from "./Employe_2";
function Value() {
  const Values = [
    {
      id: 1,
      Head: "class based componets with props",
      Title: "Welcome to employe component",
      Name: "Sonu",
      Age: "23",
    },
    {
      id: 2,
      Head: "class based componets with props",
      Title: "Welcome to employe component",
      Name: "Loukya",
      Age: "2",
    },
    {
      id: 1,
      Head: "class based componets with props",
      Title: "Welcome to employe component",
      Name: "Divya",
      Age: "20",
    },
  ];
  const Values_1 = [
    {
      Name: "Gayatri",
      Course: "MBBS",
    },
    {
      Name: "Sonu",
      Course: "BTECH",
    },
  ];

  return (
    <>
      <Cards
        Head={Values[0].Head}
        Title={Values[0].Title}
        Name={Values[0].Name}
        Age={Values[0].Age}
      ></Cards>
      <Cards
        Head={Values[1].Head}
        Title={Values[1].Title}
        Name={Values[1].Name}
        Age={Values[1].Age}
      ></Cards>
      <Cards
        Head={Values[2].Head}
        Title={Values[2].Title}
        Name={Values[2].Name}
        Age={Values[2].Age}
      ></Cards>
      <Employe Name={Values_1[0].Name} Course={Values_1[0].Course}></Employe>
      <Employe Name={Values_1[1].Name} Course={Values_1[1].Course}></Employe>
    </>
  );
}
export default Value;
