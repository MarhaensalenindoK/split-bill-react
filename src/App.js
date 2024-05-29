import { useState } from "react";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import FriendList from "./components/FriendList";

const initialFriends = [
    {
        id: 118836,
        name: "Budi",
        image: "https://i.pravatar.cc/48?u=118836",
        balance: -7,
    },
    {
        id: 933372,
        name: "Sukma",
        image: "https://i.pravatar.cc/48?u=933372",
        balance: 20,
    },
    {
        id: 499476,
        name: "Parjo",
        image: "https://i.pravatar.cc/48?u=499476",
        balance: 0,
    },
];

export default function App() {
    const [showAddFriend, setShowAddFriend] = useState(false);
    const [friends, setFriends] = useState(initialFriends);
    const [selectedFriend, setSelectedFriend] = useState(null);

    function toggleAddFriend() {
        setShowAddFriend((prevShowAddFriend) => !prevShowAddFriend);
        setSelectedFriend(null);
    }

    function handleAddFriend(friend) {
        setFriends((prevFriends) => [...prevFriends, friend]);
    }

    function handleSelectFriend(friend) {
        setSelectedFriend((prevSelectedFriend) =>
            prevSelectedFriend?.id === friend.id ? null : friend
        );

        setShowAddFriend(false);
    }

    function handleSplitBill(bill) {
        setFriends((prevFriends) =>
            prevFriends.map((friend) =>
                friend.id === selectedFriend.id
                    ? { ...friend, balance: friend.balance + bill }
                    : friend
            )
        );

        setSelectedFriend(null);
    }

    return (
        <div className="app">
            <div className="sidebar">
                <FriendList
                    friends={friends}
                    onSelectFriend={handleSelectFriend}
                    selectedFriend={selectedFriend}
                />
                {showAddFriend && (
                    <FormAddFriend onAddFriend={handleAddFriend} />
                )}
                <button className="button" onClick={toggleAddFriend}>
                    {showAddFriend ? "Tutup" : "Tambah teman"}
                </button>
            </div>
            {selectedFriend && (
                <FormSplitBill
                    selectedFriend={selectedFriend}
                    onSplitBill={handleSplitBill}
                />
            )}
        </div>
    );
}
