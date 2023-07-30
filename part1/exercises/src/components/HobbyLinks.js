export default function HobbyLinks() {
  let hobbyLinks = ["https://www.michaels.com/", "https://maniology.com/"];
  return (
    <div>
      <p>Hobby Links:</p>
      <a href={hobbyLinks[0]}>Michael's (Craft Store)</a><br/>
      <a href={hobbyLinks[1]}>Maniology (Nail Stamping)</a>
    </div>
  );
}