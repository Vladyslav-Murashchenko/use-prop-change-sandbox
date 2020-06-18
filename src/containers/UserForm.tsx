import React, { useState } from "react";
import usePropChange from "use-prop-change";

import { PersonFields } from "../components/PersonFields";

import { removeIndex, append, createIdGenerator } from "../utils";

interface UserData {
  name: string;
  age: string;
  money: string;
  isHappy: boolean;
  friends: FriendData[];
}

interface FriendData {
  id: number;
  name: string;
  age: string;
  money: string;
  isHappy: boolean;
}

interface Props {
  onSubmit: (userData: UserData) => void;
}

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

  const handleUserDataProp = usePropChange(setUserData);

  const handleAddFriend = () => {
    handleUserDataProp("friends", append(createFriendData()));
  };

  const handleDeleteFriend = (friendIndex: number) => {
    handleUserDataProp("friends", removeIndex(friendIndex));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(userData);
      }}
    >
      <h2>{userData.name} Personal Data</h2>
      <PersonFields personData={userData} onPersonDataChange={setUserData} />
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
              onPersonDataChange={handleUserDataProp(["friends", i])}
            />
          </div>
        ))}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
