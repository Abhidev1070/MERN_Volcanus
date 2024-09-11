import React, { useState } from 'react'
// import Person from './Person'

import Index from './Index';


const App = () => {
  // const [data, setdata] = useState([
  //   {
  //     id: 1,
  //     title: "i phone ",
  //     pries: "200000",
  //     img: "https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_UY327_FMwebp_QL65_.jpg"
  //   },
  //   {
  //     id: 2,
  //     title: "samsung s23 ",
  //     pries: "120000",
  //     img: "https://m.media-amazon.com/images/I/51L8W6d-DNL._AC_UY327_FMwebp_QL65_.jpg"
  //   },
  //   {
  //     id: 3,
  //     title: "oneplus 11r ",
  //     pries: "29000",
  //     img: "https://m.media-amazon.com/images/I/61u9zN1HYCL._AC_UY327_FMwebp_QL65_.jpg"
  //   }

  // ]);
  return (
    <>
      {/* <Person name={"Abhishe"} age="20"/>
      <Person name={"Abhishe"} age="20"/>
      <Person name={"Abhishe"} age="20"/>
      <Person/> */}

      {/* <img src={data[0].img} alt="#" />
      <br />
      Title = {data[0].title}
      <br />
       pries={data[0].pries} */}
      {/* {data.map((e) => (
        <div key={e.id}>
          <h1>{e.title}</h1>
          <img src={e.img} alt="" />
          <h1>{e.pries}</h1>

        </div>

      ))} */}
      <Index tital="Abhi"/>
      






    </>
  )
}

export default App