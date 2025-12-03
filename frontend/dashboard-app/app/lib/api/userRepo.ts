const BASE_URL = process.env.API_URL || "http://localhost:3000/api";

export async function getUsers() {
    const res = await fetch(`${BASE_URL}/users/all`, { cache: "no-store" });
    if (!res.ok) throw new Error("Error fetching users");
    return res.json();
}

export async function getUser(id: number) {
    const res = await fetch(`${BASE_URL}/users/get/${id}`, { cache: "no-store" });
    if (!res.ok) throw new Error("Error fetching user");
    return res.json();
}

export async function addUser(user: any) {
    const res = await fetch(`${BASE_URL}/users/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user }),
    });
    if (!res.ok) throw new Error("Error adding user");
    return res.json();
}

export async function updateUser(user: any) {
    const res = await fetch(`${BASE_URL}/users/update`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user }),
    });
    if (!res.ok) throw new Error("Error updating user");
    return res.json();
}

export async function deleteUser(id: number) {
    const res = await fetch(`${BASE_URL}/users/delete/${id}`, {
        method: "DELETE",
    });
    if (!res.ok) throw new Error("Error deleting user");
    return res.json();
}
