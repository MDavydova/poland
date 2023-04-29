import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardGroup,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const CardWord = ({ note, repeatAmount, polish, translation, _id }) => {
  const excerpt = (str) => {
    if (str.length > 45) {
      str = str.substring(0, 45) + " ...";
    }
    return str;
  };

  return (
    <MDBCardGroup>
      <MDBCard className="h-100 mt-2 d-sm-flex" style={{ maxWidth: "20rem" }}>
        <div className="top-left">{repeatAmount}</div>

        <MDBCardBody>
          <MDBCardTitle className="text-start">
            `Polish: ${polish} ${translation}`
          </MDBCardTitle>
          <MDBCardText className="text-start">
            {excerpt(note)}
            <Link to={`/card/${_id}`}>Read More</Link>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCardGroup>
  );
};

export default CardWord;
