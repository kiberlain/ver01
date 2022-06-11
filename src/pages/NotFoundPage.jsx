import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      Эта страница не существует. Перейдите на <Link to="/">главную</Link>
    </div>
  );
};

export { NotFoundPage };
