import axios from 'axios';

export default class WordService {
  async getWord() {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const key = 'EPSYE728';
    const number_of_words = 1;
    try {
      const res = await axios(
        `${proxy}https://random-word-api.herokuapp.com/word?key=${key}&number=${number_of_words}`
      );
      this.result = res.data[0];
    } catch (error) {
      alert(error);
    }
  }
}
