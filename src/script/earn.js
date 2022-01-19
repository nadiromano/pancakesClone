const URL = 'https://tokens.pancakeswap.finance/pancakeswap-top-100.json';
const tBody = document.querySelector('.earn__table-table-body');
const toTopBtn = document.querySelector('.earn__to-top-btn');
const earnTable = document.querySelector('#earn-table');
const sortBtn = document.querySelector('.input-sort__box');
const sortCascade = document.querySelector('.input-sort__cascade');
const sortLabel = document.getElementById('sort-label');
const sortCascadeItem = document.querySelectorAll('.input-sort__cascade__item');
const earnOnOffBtn = document.querySelector('.input__on-of');
const earnOnOffToggle = document.querySelector('.input__on-of-toggle');
const earnTableCont = document.querySelector('#farms-table');
const earnLive = document.querySelector('.earn__tab-box');
const earnLiveV1 = document.querySelector('#earn-v1');
const earnLiveV2 = document.querySelector('#earn-v2');
const earnNav = document.querySelector('.earn-v');
const rawCurr = document.querySelectorAll(
  '.earn__table-table-row__cont-el__cash-text-value'
);
const searchInput = document.querySelector('.input-search__input');

// fetch datas

const fetchData = async function () {
  const res = await fetch(URL);
  const data = await res.json();
  return data;
};

const currBtc = async function () {
  const data = await fetchData();

  const dataArr = await data.tokens;
  return dataArr;
};

const currBtcArr = currBtc();

const stakedBtc = async function () {
  const data = await fetchData();

  const dataArr = await data.tokens.filter((curr) => curr.decimals < 18);
  return dataArr;
};
const stakedBtcArr = stakedBtc();

const liveBtc = async function () {
  const data = await fetchData();
  const dataArr = await data.tokens.filter((curr) => curr.decimals < 16);
  return dataArr;
};
const liveBtcArr = liveBtc();

// get and display currency
const getCurr = async function (arr) {
  try {
    earnTableCont.style.display = 'none';
    let data = await arr;
    let ranNum = Math.floor(Math.random() * (1000000 - 1000) + 1000);

    let curr = data.map(
      (i) =>
        (i = {
          symbol: i.symbol,
          logo: i.logoURI,
          decimals: i.decimals,
          value: Math.floor(Math.random() * (1000000 - 1000) + 1000),
          multiplier: Math.floor(Math.random() * (40 - 0) + 0),
        })
    );

    //rendering
    const markup = curr
      .map((curr) => {
        return `<tr class="earn__table-table-row">
        <td>
          <div class="earn__table-table-row__cont-box">
            <div>
              <div class="earn__table-table-row__cont-el">
                <div class="earn__table-table-row__cont-el__title">
                  <div
                    class="earn__table-table-row__cont-el__title-icon-box"
                  >
                    <div
                      class="earn__table-table-row__cont-el__title-icons-icon earn__table-table-row__cont-el__title-icon-container"
                    >
                      <div
                        class="earn__table-table-row__cont-el__title-icons-icon earn__table-table-row__cont-el__title-icon-container earn__table-table-row__cont-el__title-icons earn__table-table-row__cont-el__title-icon-main"
                      >
                        <img
                          src="${curr.logo}"
                          class="earn__table-table-row__cont-el__title-icons-img" onerror="this.src = 'https://pancakeswap.finance/images/tokens/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82.svg';" 
                        />
                      </div>
                      <div
                        class="earn__table-table-row__cont-el__title-icons-icon earn__table-table-row__cont-el__title-icon-secundary earn__table-table-row__cont-el__title-icons earn__table-table-row__cont-el__title-icon-secundary-item"
                      >
                        <img
                          src="https://pancakeswap.finance/images/tokens/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c.svg"
                          class="earn__table-table-row__cont-el__title-icons-img"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      color="text"
                      class="earn__table-table-row__cont-el__title-text"
                    >
                      ${curr.symbol + '-BNB'} 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div class="earn__table-table-row__cont-box">
            <div>
              <div class="earn__table-table-row__cont-el__subtitle">
                Earned
              </div>
              <div class="earn__table-table-row__cont-el">
                <span
                  class="earn__table-table-row__cont-el__subtitle-value"
                  >0</span
                >
              </div>
            </div>
          </div>
        </td>
        <td>
          <div class="earn__table-table-row__cont-box">
            <div>
              <div class="earn__table-table-row__cont-el__subtitle">
                APR
              </div>
              <div class="earn__table-table-row__cont-el">
                <div
                  class="earn__table-table-row__cont-el__percent-value"
                >
                  <div
                    class="earn__table-table-row__cont-el__boxed earn__table-table-row__cont-el__percent-text earn__table-table-row__cont-el__percent-text--perc"
                  >
                    ${curr.decimals + '%'}<button
                      class="sc-hKFxyN earn__table-table-row__cont-el__btn earn__table-table-row__cont-el__btn--layout"
                      scale="sm"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="18px"
                        color="text"
                        xmlns="http://www.w3.org/2000/svg"
                        class=""
                      >
                        <path
                          d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z"
                        ></path>
                        <path
                          d="M11.25 7.72H6.25V9.22H11.25V7.72Z"
                        ></path>
                        <path
                          d="M18 15.75H13V17.25H18V15.75Z"
                        ></path>
                        <path
                          d="M18 13.25H13V14.75H18V13.25Z"
                        ></path>
                        <path
                          d="M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z"
                        ></path>
                        <path
                          d="M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div class="earn__table-table-row__cont-box">
            <div>
              <div class="earn__table-table-row__cont-el__subtitle">
                Liquidity
              </div>
              <div class="earn__table-table-row__cont-el">
                <div
                  class="earn__table-table-row__cont-el__cash-container"
                >
                  <div
                    class="earn__table-table-row__cont-el__cash-text"
                  >
                    <div
                      color="text"
                      class="earn__table-table-row__cont-el__cash-text-value"
                    >
                      $${curr.value}
                    </div>
                  </div>
                  <div
                    class="earn__table-table-row__cont-el__cash-text-icon"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      color="textSubtle"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                      class="earn__table-table-row__cont-el__cash-text-icon-svg"
                    >
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div class="earn__table-table-row__cont-box">
            <div>
              <div class="earn__table-table-row__cont-el__subtitle">
                Multiplier
              </div>
              <div class="earn__table-table-row__cont-el">
                <div
                  class="earn__table-table-row__cont-el__multiplier"
                >
                  <div
                    class="earn__table-table-row__cont-el__multiplier-text"
                  >
                  ${curr.multiplier + 'x'}
                  </div>
                  <div
                    class="earn__table-table-row__cont-el__multiplier-icon"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      color="textSubtle"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                      class="earn__table-table-row__cont-el__cash-text-icon-svg"
                    >
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div class="earn__table-table-row__cont-box">
            <div>
              <div class="earn__table-table-row__cont-el">
                <div
                  class="earn__table-table-row__cont-el__more-btn"
                >
                  <svg
                    viewBox="0 0 24 24"
                    color="primary"
                    class="earn__table-table-row__cont-el__more-btn-style earn__table-table-row__cont-el__more-btn-layout"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </td>
      </tr>`;
      })
      .join('');

    tBody.insertAdjacentHTML('beforeend', markup);
    earnTableCont.style.display = 'block';
  } catch (err) {
    throw err.message;
  }
};

getCurr(currBtcArr);

// go to top

toTopBtn.addEventListener('click', function () {
  earnTable.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// open sort box (cercare di utilizzare il bubbleling)

sortBtn.addEventListener('click', function (e) {
  sortCascade.classList.toggle('novisible');
  if (sortCascade.classList.contains('novisible')) {
    sortBtn.style.borderRadius = '16px';
  } else {
    sortBtn.style.borderRadius = '16px 16px 0 0';
  }
});

sortCascadeItem.forEach((e) =>
  e.addEventListener('click', function () {
    sortCascade.classList.add('novisible');
    let label = sortLabel.textContent;
    sortBtn.style.borderRadius = '16px';
    sortLabel.textContent = e.textContent;
    e.textContent = label;
  })
);

//on-off switch
earnOnOffBtn.addEventListener('click', function (e) {
  if (!earnOnOffBtn.classList.contains('toggle-active')) {
    earnOnOffBtn.style.backgroundColor = 'var(--succes-color)';
    earnOnOffToggle.style.left = '17px';
    earnOnOffBtn.classList.add('toggle-active');
    tBody.innerHTML = '';
    getCurr(stakedBtcArr);
  } else {
    earnOnOffBtn.style.backgroundColor = 'rgb(238, 234, 244)';
    earnOnOffToggle.style.left = '0px';
    earnOnOffBtn.classList.remove('toggle-active');
    tBody.innerHTML = '';
    getCurr(currBtcArr);
  }
});

//live switch provare a fare il toggle ad entrambi gli elementi
earnLive.addEventListener('click', function (e) {
  earnLive
    .querySelectorAll('.earn__tab-box-btn')
    .forEach((el) => el.classList.remove('earn__tab-box-btn-active'));
  e.target.classList.toggle('earn__tab-box-btn-active');
  if (e.target.innerText === 'Live') {
    tBody.innerHTML = '';
    getCurr(currBtcArr);
  } else {
    tBody.innerHTML = '';
    getCurr(liveBtcArr);
  }
  console.log(e.target.textContent);
});

//nav switch
earnNav.addEventListener('click', function (e) {
  e.preventDefault();
  earnNav
    .querySelectorAll('.tab-page')
    .forEach((el) => el.classList.remove('tab-page-active'));
  e.target.classList.toggle('tab-page-active');
});

// sort

// rawCurr.sort((a, b) => {
//   if (a.value > b.value) {
//     return 1;
//   }
//   if (a.value < b.value) {
//     return -1;
//   }
//   return 0;
// });

// search
const loadSearchResults = async function (query) {
  try {
    const data = await fetchData();

    loadData = data.tokens;

    loadData.forEach((el) => {
      el.name.toLowerCase();
      el.symbol.toLowerCase();
    });

    const filtered = loadData.filter(
      (el) => el.name.includes(query) || el.symbol.includes(query)
    );

    return filtered;
  } catch (err) {
    throw err;
  }
};

searchInput.addEventListener(
  'input',
  async function (e) {
    let filter = searchInput.value;
    let curr = await loadSearchResults(filter);

    curr.forEach((el) => {
      el.symbol.toUpperCase();
    });
    console.log(curr);

    tBody.innerHTML = '';
    getCurr(curr);
  },
  false
);
