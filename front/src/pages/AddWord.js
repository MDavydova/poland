import React, { useState, useEffect } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBValidation,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createCard } from "../redux/features/cardSlice";

const initialState = {
  polish: "",
  translation: "",
  note: "",
};

const AddWord = () => {
  const [cardData, setCardData] = useState(initialState);
  const [update, setUpdate] = useState(false);
  const { error } = useSelector((state) => ({
    ...state.card,
  }));
  const { user } = useSelector((state) => ({ ...state.auth }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { polish, translation, note } = cardData;

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const handleSubmit = () => {
    if (polish && translation) {
      dispatch(
        createCard({ ...cardData, creator: user?.result?._id, navigate, toast })
      );

      window.location.reload();
    }
  };
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setCardData({ ...cardData, [name]: value });
  };

  const handleClear = (e) => {
    setCardData({ polish: "", note: "", translation: "" });
  };
  return (
    <div
      style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "450px",
        alignContent: "center",
        marginTop: "120px",
      }}
      className="container"
    >
      <MDBCard alignment="center">
        <h5>Add Word</h5>
        <MDBCardBody>
          <MDBValidation onSubmit={handleSubmit} className="row g-3" noValidate>
            <div className="col-md-12">
              <MDBInput
                placeholder="Enter Word In Polish"
                type="text"
                value={polish || ""}
                name="polish"
                onChange={onInputChange}
                className="form-control"
                required
                invalid
                validation="Please provide word in polish"
              />
            </div>
            <div className="col-md-12">
              <MDBInput
                placeholder="Enter Word In Your Language"
                type="text"
                value={translation || ""}
                name="translation"
                onChange={onInputChange}
                className="form-control"
                required
                invalid
                validation="Please provide word in translation"
              />
            </div>
            <div className="col-md-12">
              <MDBInput
                placeholder="Enter Note"
                type="text"
                value={note}
                name="note"
                onChange={onInputChange}
                className="form-control"
                textarea
                rows={4}
              />
            </div>

            <div className="col-12">
              <MDBBtn type="submit" style={{ width: "100%" }}>
                Submit
              </MDBBtn>
              <MDBBtn
                style={{ width: "100%" }}
                className="mt-2"
                type="button"
                color="danger"
                onClick={handleClear}
              >
                Clear
              </MDBBtn>
            </div>
          </MDBValidation>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default AddWord;
