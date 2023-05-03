import CardModel from "../models/Card.js";

export const createCard = async (req, res) => {
  const card = req.body;

  const newCard = new CardModel({
    ...card,
    repeatAmount: 0,
    createdAt: new Date().toISOString(),
  });
  console.log(newCard);
  try {
    await newCard.save();
    res.status(201).json(card);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const deleteCard = async (req, res) => {
  const { id } = req.params;
  try {
    await CardModel.findByIdAndRemove(id);
    res.json({ message: "card deleted" });
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const increaseCounterCard = async (req, res) => {
  const { id } = req.params;

  try {
    const card = await CardModel.findById(id);
    const newRepeatAmount = card.repeatAmount + 1;
    await CardModel.findByIdAndUpdate(id, { repeatAmount: newRepeatAmount });
    res.json({ message: "card amount updated" });
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const getCardsByUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const userCards = await CardModel.find({ creator: userId });

    res.status(200).json(userCards);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
