/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import cn from 'classnames';
import { ReactComponent as Close } from '../../../Assets/svg/x.svg';
import { ReactComponent as Burg } from '../../../Assets/svg/menu_btn.svg';
import s from './BurgerOrderInfo.module.scss';

// export default function BurgerOrderInfo({ onBurgerClicked, onSidebarClicked }) {
//   return (
//     <div className={s.burger}>
//       {onBurgerClicked ? (
//         <Close className={s.close} onClick={onSidebarClicked} />
//       ) : (
//         <Burg
//           className={cn(s.line, { [s.active]: onBurgerClicked })}
//           onClick={onSidebarClicked}
//         />
//       )}
//     </div>
//   );
// }

// export default function BurgerOrderInfo({ onBurgerClicked, onSidebarClicked }) {
//   return (
//     <div className={s.burger}>
//       {onBurgerClicked ? (
//         <button type="button" className={s.close} onClick={onSidebarClicked}>
//           Информация о заказе
//         </button>
//       ) : (
//         <button
//           type="button"
//           className={cn(s.line, { [s.active]: onBurgerClicked })}
//           onClick={onSidebarClicked}
//         >
//           Информация о заказе
//         </button>
//       )}
//     </div>
//   );
// }
export default function BurgerOrderInfo({ onBurgerClicked, onSidebarClicked }) {
  return (
    <div className={s.burger}>
      {onBurgerClicked ? (
        <button className={s.btn} onClick={onSidebarClicked}>
          <Close className={s.close} />
        </button>
      ) : (
        <button className={s.btn} onClick={onSidebarClicked}>
          {/* <Burg
            className={cn(s.line, { [s.active]: onBurgerClicked })}
            onClick={onSidebarClicked}
          /> */}
          O заказе
        </button>
      )}
    </div>
  );
}
