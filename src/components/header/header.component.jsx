import "./header.css";

export const Header = () => {
  return (
    <div className="header_div">
      <div className="container">
        <div className="header_main_div">
          <a className="header_a" href="#">
            Where In the World ?
          </a>
          <div>
            <button className="header_p">Dark Mode</button>
          </div>
        </div>
      </div>
    </div>
  );
};
