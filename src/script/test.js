const tokens = {
  livetokens: true,
  sort: false,
  stacked: true,
  search: true,
  query: 'cane',

  curr: [
    { name: 'cane', value: 2000 },
    { name: 'gatto', value: 400 },
    { name: 'polpo', value: 8000 },
    { name: 'mucca', value: 700 },
  ],
  currLive() {
    if (!this.livetokens) return;
    this.curr = this.curr.filter((el) => el.value > 500);
    console.log('live');
  },

  currStacked() {
    if (!this.stacked) return;

    this.curr = this.curr.filter((el) => el.value > 1500);
    console.log('stacked');
  },

  currSearch() {
    if (!this.search) return;

    this.curr = this.curr.filter((el) => el.name === this.query);
    console.log('search', this.curr);
  },

  filter() {
    this.currLive(), this.currSearch(), this.currStacked();
  },
};

tokens.filter();
console.log(tokens.curr);
