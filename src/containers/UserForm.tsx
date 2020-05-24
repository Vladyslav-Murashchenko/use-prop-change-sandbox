import React, { useState } from "react";

import { PersonFields } from "../components/PersonFields";

import { removeIndex, append, createIdGenerator } from "../utils";
import useSetProp from "./../useSetProp";

const defaultUserData: UserData = {
  name: "",
  age: "0",
  money: "0",
  isHappy: true,
  friends: [],
};

const generateFriendId = createIdGenerator();

const createFriendData = (): FriendData => ({
  id: generateFriendId(),
  name: "",
  age: "0",
  money: "0",
  isHappy: true,
});

export const UserForm: React.FC<Props> = ({ onSubmit }) => {
  const [userData, setUserData] = useState(defaultUserData);

  const setUserDataProp = useSetProp(setUserData);

  const handleAddFriend = () => {
    setUserDataProp("friends", append(createFriendData()));
  };

  const handleDeleteFriend = (friendIndex: number) => {
    setUserDataProp("friends", removeIndex(friendIndex));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(userData);
      }}
    >
      <h2>{userData.name} Personal Data</h2>
      <PersonFields personData={userData} onChange={setUserData} />
      <div className="titleWithButton">
        <h3>Frields</h3>
        <button type="button" onClick={handleAddFriend}>
          +
        </button>
      </div>
      <div>
        {userData.friends.map((friend, i) => (
          <div key={friend.id}>
            <div className="titleWithButton">
              <h3>Friend {friend.name} Data</h3>
              <button type="button" onClick={() => handleDeleteFriend(i)}>
                <div className="deleteIcon" />
              </button>
            </div>
            <PersonFields
              personData={friend}
              onChange={setUserDataProp(["friends", i])}
            />
          </div>
        ))}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

type Props = {
  onSubmit: (userData: UserData) => void;
};

type UserData = {
  name: string;
  age: string;
  money: string;
  isHappy: boolean;
  friends: FriendData[];
};

type FriendData = {
  id: number;
  name: string;
  age: string;
  money: string;
  isHappy: boolean;
};
