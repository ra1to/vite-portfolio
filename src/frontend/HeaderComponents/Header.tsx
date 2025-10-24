import { Link } from 'react-router-dom';


export const Header = () => {
  return (
    <header>
        <div className="logo">
            <h3>.Ra1to</h3>
        </div>
      <nav>
        <ul>
          <li>
            <Link to="/">ホーム</Link>
          </li>
          <li>
            <Link to="/blog">ブログ</Link>
          </li>
          <li>
            <a href="https://x.com/skyappsfree" target="_blank" rel="noopener noreferrer">SNS</a>
          </li>
        </ul>
      </nav>


    </header>
  );
};