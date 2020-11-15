export default {
  async fetchBooks() {
    let response = await fetch('http://10.0.0.186:3000/api/v1/books').then(
      (result) => {
        return result.json();
      },
    );
    return response.data;
  },

  async fetchBookDetail(dealId) {
    let response = await fetch(
      'http://10.0.0.186:3000/api/v1/books/' + dealId,
    ).then((result) => {
      return result.json();
    });
    return response.data;
  },
};
