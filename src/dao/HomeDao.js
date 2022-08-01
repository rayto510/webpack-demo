import axios from 'axios';

const getSampleText = () => axios.get('https://jsonplaceholder.typicode.com/todos/1');

export default getSampleText;
