import { useState } from "react";

export default function FormAddFriend({ onAddFriend }) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("https://i.pravatar.cc/48");

    function handleSubmit(e) {
        e.preventDefault();
        if (!name || !image) return;

        const id = crypto.randomUUID();

        const balance = 0;

        if (image === "https://i.pravatar.cc/48") {
            const idImage = `?u=${id}`;

            const newImage = image + idImage;
            setImage(newImage);
        }

        const newFriend = { id, name, image, balance };
        onAddFriend(newFriend);

        setName("");
        setImage("https://i.pravatar.cc/48");
    }

    return (
        <form action="" className="form-add-friend" onSubmit={handleSubmit}>
            <label htmlFor="name">😊Nama</label>
            <input
                type="text"
                id="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="Nama"
            />

            <label htmlFor="image">📸Gambar</label>
            <input
                type="text"
                id="image"
                onChange={(e) => setImage(e.target.value)}
                placeholder="Default : https://i.pravatar.cc/48"
            />

            <button className="button" type="submit" onClick={handleSubmit}>
                Tambah
            </button>
        </form>
    );
}
