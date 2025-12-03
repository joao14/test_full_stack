"use client";

import { useEffect, useState } from "react";
import { getUser, editUser } from "../../../services/api/userService";
import { useRouter, useParams } from "next/navigation";

export default function EditUserPage() {
    const router = useRouter();
    const params = useParams();
    const id = params.id as string;

    const [form, setForm] = useState({ name: "", email: "" });

    useEffect(() => {
        async function load() {
            const data = await getUser(parseInt(id));
            setForm({ name: data.name, email: data.email });
        }
        load();
    }, [id]);

    const submit = async (e: any) => {
        e.preventDefault();
        await editUser({ id: parseInt(id), ...form });
        router.push("/");
    };

    return (
        <div style={{ padding: 20 }}>
            <h1>Edit User</h1>

            <form onSubmit={submit}>
                <label>Name:</label>
                <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <br />

                <label>Email:</label>
                <input
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <br />

                <button type="submit">Update</button>
            </form>
        </div>
    );
}
