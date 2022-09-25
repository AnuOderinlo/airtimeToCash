import { atom } from 'recoil';

export const addBankFormState = atom({
    key: 'addBankFormState',
    default: true,
});


export const showSuccessModal = atom({
    key: 'showSuccessModal',
    default: false,
});


export const viewAccountRecord = atom({
    key: 'viewAccountRecord',
    default: false,
});