import { atom, selector } from "recoil";


export const Networkatom = atom({
    key: "Networkatom",
    default:102
})

export const Jobsatom = atom({
    key: "Jobsatom",
    default:0
})
export const Messagesatom = atom({
    key: "Messagesatom",
    default:0
})
export const Notificationsatom = atom({
    key: "Notificationsatom",
    default: 0
})


export const totalcntselector = selector({
    key: "totalcntselector",
    get: ({ get }) => {
        const Networkatomcount = get(Networkatom);
        const Jobsatomcount = get(Jobsatom);
        const Messagesatomcount = get(Messagesatom);
        const Notificationsatomcount = get(Notificationsatom);
        return Networkatomcount + Jobsatomcount + Messagesatomcount + Notificationsatomcount;
    },
})