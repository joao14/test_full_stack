import * as UserRepo from "../../lib/api/userRepo";

export async function getAllUsers() {
    const data = await UserRepo.getUsers();
    return data.users;
}

export async function getUser(id: number) {
    const data = await UserRepo.getUser(id);
    return data.user;
}

export async function createUser(payload: any) {
    return await UserRepo.addUser(payload);
}

export async function editUser(payload: any) {
    return await UserRepo.updateUser(payload);
}

export async function removeUser(id: number) {
    return await UserRepo.deleteUser(id);
}
