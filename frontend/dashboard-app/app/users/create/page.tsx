"use client";

import { useState } from "react";
import { createUser } from "../../services/api/userService";
import { useRouter } from "next/navigation";

export default function CreateUserPage() {
    const router = useRouter();
    const [form, setForm] = useState({ name: "", email: "" });

    const submit = async (e: any) => {
        e.preventDefault();
        await createUser(form);
        router.push("/");
    };

    return (
        <div style={{ padding: 20 }}>
            <h1>Create User</h1>

            <form onSubmit={submit}>
                <label>Name:</label>
                <input
                    type="text"
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <br />

                <label>Email:</label>
                <input
                    type="email"
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <br />

                <button type="submit">Save</button>
            </form>
        </div>
    );
}
