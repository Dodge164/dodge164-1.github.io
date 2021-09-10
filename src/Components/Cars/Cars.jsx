// /* eslint-disable react/void-dom-elements-no-children */
// /* eslint-disable react/jsx-one-expression-per-line */
// /* eslint-disable jsx-a11y/control-has-associated-label */
// /* eslint-disable indent */
// /* eslint-disable jsx-a11y/label-has-associated-control */
// /* eslint-disable operator-linebreak */
// /* eslint-disable no-unused-vars */
// import React from 'react';
// import s from './Cars.module.scss';

// export default function Cars({
//   onChangeCategories,
//   onChangeCarCategories,
//   checkedId,
//   categoryList,
//   carList,
//   baseUrl,
// }) {
//   return (
//     <>
//       <form className={s.radioGroup}>
//         <label className={s.labelInput}>
//           <input
//             checked={checkedId === 'all'}
//             className={s.input}
//             name="class"
//             value="category?.id"
//             onChange={onChangeCategories}
//             type="radio"
//             id="all"
//           />
//           Все модели
//         </label>

//         {categoryList.map((category) => (
//           <label className={s.labelInput}>
//             <input
//               checked={checkedId === category.id}
//               className={s.input}
//               name="class"
//               value="category?.id"
//               onChange={onChangeCarCategories}
//               id={category?.id} // из CCAT
//               type="radio"
//             />

//             {category?.name}
//           </label>
//         ))}
//       </form>
//       <section className={s.carsPhotoContainer}>
//         {carList.length > 0 &&
//           carList?.map((car) => (
//             <div className={s.carsPhotoCard}>
//               <h3 className={s.carsPhotoName}>{car?.name}</h3>
//               <div className={s.carsPhotoPrice}>
//                 {car?.priceMin.toLocaleString('ru')} -
//                 {car?.priceMax.toLocaleString('ru')} ₽
//               </div>
//               <img
//                 className={s.photo}
//                 alt="car"
//                 src={
//                   car?.thumbnail?.path.includes('base64')
//                     ? car?.thumbnail?.path
//                     : baseUrl + car?.thumbnail?.path
//                 }
//               />
//             </div>
//           ))}
//       </section>
//     </>
//   );
// }
