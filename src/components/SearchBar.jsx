// import { useRef, useState } from "react";
// import { fetchSearchMovies } from "../utils/fetchMovies";

// export default function SearchBar({ setMovies }) {
//   const textRef = useRef();
//   const yearRef = useRef();
//   const typeRef = useRef();
//   const [isInputYear, setIsInputYear] = useState(false);

//   function submitHandler(e) {
//     e.preventDefault();
//     if (!textRef.current.value) return;
//     const searchData = {
//       text: textRef.current.value,
//       year: yearRef.current.value,
//       type: typeRef.current.value,
//     };
//     fetchSearchMovies(searchData, setMovies);
//   }

//   function handleChange(e) {
//     if (e.target.value === "직접입력") {
//       setIsInputYear(true);
//     } else {
//       setIsInputYear(false);
//     }
//   }

//   return (
//     <div className="m0auto mt50">
//       <form className="detail-search" onSubmit={submitHandler}>
//         <input
//           type="text"
//           placeholder="검색어를 입력하세요."
//           className="input"
//           ref={textRef}
//           required
//         />
//         <select
//           name=""
//           id="type"
//           className="select"
//           onChange={handleChange}
//           ref={isInputYear ? null : yearRef}
//         >
//           <option hidden>Year</option>
//           <option>2024</option>
//           <option>2023</option>
//           <option>2022</option>
//           <option>2021</option>
//           <option>2020</option>
//           <option>직접입력</option>
//         </select>
//         {isInputYear && (
//           <input
//             type="text"
//             placeholder="연도를 입력하세요."
//             className="input"
//             ref={yearRef}
//           />
//         )}
//         <select name="" id="type" className="select" ref={typeRef}>
//           <option hidden>Type</option>
//           <option>movie</option>
//           <option>series</option>
//           <option>episode</option>
//         </select>
//         <button className="btn regular pink" type="submit">
//           Search
//         </button>
//       </form>
//     </div>
//   );
// }

// formData 사용 버전 --------------------------------
import { useState } from "react";
import { fetchSearchMovies } from "../utils/fetchMovies";

export default function SearchBar({ setMovies }) {
  const [isInputYear, setIsInputYear] = useState(false);

  function submitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const text = formData.get("text");
    const year = formData.get("year");
    const type = formData.get("type");
    if (!text) return;

    const searchData = { text, year, type };
    fetchSearchMovies(searchData, setMovies);
  }

  function handleChange(e) {
    if (e.target.value === "직접입력") {
      setIsInputYear(true);
    } else {
      setIsInputYear(false);
    }
  }

  return (
    <div className="m0auto mt50">
      <form className="detail-search" onSubmit={submitHandler}>
        <input
          name="text"
          type="text"
          placeholder="검색어를 입력하세요."
          className="input"
          required
        />
        <select
          name={isInputYear ? "" : "year"}
          id="type"
          className="select"
          onChange={handleChange}
        >
          <option hidden>Year</option>
          <option>2024</option>
          <option>2023</option>
          <option>2022</option>
          <option>2021</option>
          <option>2020</option>
          <option>직접입력</option>
        </select>
        {isInputYear && (
          <input
            name="year"
            type="text"
            placeholder="연도를 입력하세요."
            className="input"
          />
        )}
        <select name="type" id="type" className="select">
          <option hidden>Type</option>
          <option>movie</option>
          <option>series</option>
          <option>episode</option>
        </select>
        <button className="btn regular pink" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
