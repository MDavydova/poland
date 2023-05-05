import React, { useEffect, useState } from "react";
import "../Dashboard/Dashboard.scss";
import CardWord from "../../components/CardWord/CardWord";
import { useDispatch, useSelector } from "react-redux";
import { deleteCard, getCardsByUser } from "../../redux/features/cardSlice";
import Spinner from "../../components/Spinner";
import { toast } from "react-toastify";

const Dashboard = () => {
  const { user } = useSelector((state) => ({ ...state.auth }));
  const { userCards, loading } = useSelector((state) => ({ ...state.card }));
  const userId = user?.result?._id;

  const dispatch = useDispatch();

  useEffect(() => {
    if (userId) {
      dispatch(getCardsByUser(userId));
    }
  }, [userId]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div
      style={{
        margin: "auto",
        padding: "120px",
        maxWidth: "900px",
        alignContent: "center",
      }}
    >
      <h4 className="text-center">
        {" "}
        {user?.result?.name} is learning these words
      </h4>
      <hr style={{ maxWidth: "570px" }} />
      {userCards &&
        userCards.map((item) => {
          return <CardWord item={item} />;
        })}
    </div>
  );
};

export default Dashboard;
