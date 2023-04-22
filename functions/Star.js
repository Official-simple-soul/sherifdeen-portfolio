import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Star = ({ n }) => {
    let j = [];
    let newJ = 0;
    for (let i = 0; i < n; i++) {
      j.push(<AiFillStar className="text-other1" />);
    }
    if (j.length - 5 !== 0) newJ = 5 - j.length;
    for (let i = 0; i < newJ; i++) {
      j.push(<AiOutlineStar className="text-other2" />);
    }
    return j;
  };

  export default Star