// import './M_searchForm.scss'
// import React from 'react'

// import A_input from '../A_input/A_input.jsx'
// import A_button from '../A_button/A_button.jsx'

// export default class M_searchForm extends React.Component {
//   constructor(props) {
//     super(props)
//   }

//   renderResetButton = () => {
//     const { handleSearchInput } = this.props
//     return (
//       <A_button
//         text="x"
//         type="resetField"
//         disabled={false}
//         handleClick={() => handleSearchInput('')}
//       />
//     )
//   }

//   render() {
//     const {
//       searchInputValue,
//       isSearchButtonDisabled,
//       handleSearchInput,
//       handleSearchSubmit
//     } = this.props
//     return (
//       <div className="M_searchForm">
//         <A_input
//           value={searchInputValue}
//           placeholder="Найти пост"
//           handleInput={handleSearchInput}
//           handleSubmit={handleSearchSubmit}
//         />

//         {searchInputValue != '' && this.renderResetButton()}
//         <A_button
//           text="Поиск"
//           disabled={isSearchButtonDisabled}
//           handleClick={handleSearchSubmit}
//         />
//       </div>
//     )
//   }
// }
