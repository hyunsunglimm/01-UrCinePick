export default function DetailPage() {
  return (
    <>
      <div className="mt30"></div>
      <h2 className="heading regular">Details</h2>
      <div className="mt10"></div>
      <ul className="ratings">
        <li>
          <strong>Internet Movie Database</strong>
          <div>8.4/10</div>
        </li>
        <li>
          <strong>Rotten Tomatoes</strong>
          <div>94%</div>
        </li>
        <li>
          <strong>Metacritic</strong>
          <div>78/100</div>
        </li>
      </ul>
      <br />
      <br />
      <br />
      <br />
      <div className="info-block">
        <h3 className="heading regular">Cast</h3>
        <hr className="line-type1 mt20" aria-hidden="true" />
        <h4 className="heading small mt10">Director</h4>
        <p className="txt-type2">Anthony Russo, Joe Russo</p>
      </div>
    </>
  );
}
