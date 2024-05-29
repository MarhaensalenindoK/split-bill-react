import { useState } from "react";

export default function FormSplitBill({ selectedFriend, onSplitBill }) {
    const [amount, setAmount] = useState("");
    const [myBill, setMyBill] = useState("");
    const [whoIsPaying, setWhoIsPaying] = useState("user");

    const friendBill = amount ? amount - myBill : "";

    function handleSubmit(e) {
        e.preventDefault();

        if (!amount || !myBill) return;

        onSplitBill(whoIsPaying === "user" ? friendBill : -myBill);
    }

    return (
        <form action="" className="form-split-bill" onSubmit={handleSubmit}>
            <h2>Patungan bersama {selectedFriend.name}</h2>
            <label htmlFor="">💰Total Biaya</label>
            <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />

            <label htmlFor="">💳Tagihan-ku</label>
            <input
                type="text"
                value={myBill}
                onChange={(e) => setMyBill(e.target.value)}
            />

            <label htmlFor="">🤵Tagihan si {selectedFriend.name}</label>
            <input type="text" disabled value={friendBill} />

            <label htmlFor="">💲Ditalangin oleh..</label>
            <select
                name=""
                id=""
                value={whoIsPaying}
                onChange={(e) => setWhoIsPaying(e.target.value)}
            >
                <option value="user">Kamu</option>
                <option value="friend">{selectedFriend.name}</option>
            </select>

            <button className="button" type="submit" onClick={handleSubmit}>
                Tambah
            </button>
        </form>
    );
}
