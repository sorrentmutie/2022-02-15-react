import { IResult } from "../../models/randomUser";



export const RandomUserCard: React.FC<IResult> = (props) => {
  return (
    <div className="col-md-4">
      <div className="card border-secondary mb-3" style={{maxWidth: '20rem'}}>
        <div className="card-header">{props !== undefined ? props.result.email : "loading..."}</div>
        <div className="card-body">
          <h4 className="card-title">{props.result.name.first} {props.result.name.last}</h4>
          <p className="card-text">
               <img src={props.result.picture.large} alt="img non disponibile!" />
          </p>
        </div>
      </div>
    </div>
  );
};
