import LocationDetails from "../LocationDetails";
import "../styles/About.css";

type AboutProps = {
  details: LocationDetails;
};

export default function About(props: AboutProps) {
  return (
    <div className="info-columns">
      <div className="ratings">
        <h3>{props.details.rating}</h3>
        <img src={props.details.ratingImage}></img>
        <table className="subratings-table">
          <tbody>
            {props.details.subratings.map((subrating) => (
              <tr key={"rating_" + subrating.localized_name}>
                <td>
                  <h5 className="subrating-value">{subrating.localized_name}</h5>
                </td>
                <td>
                  <img src={subrating.rating_image_url}></img>
                </td>
                <td>{subrating.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="description">
        {props.details.description}
        <p>
          Address:{" "}
          <a
            href={`https://maps.google.com/?q=${props.details.name} ${props.details.address}`}
            target="_blank"
          >
            {props.details.address}
          </a>
        </p>
      </div>
    </div>
  );
}
