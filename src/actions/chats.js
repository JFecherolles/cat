export const CHATS_SAVE = 'CHATS_SAVE';

export function saveChats(chats) {
  return {
    type: CHATS_SAVE,
    payload: chats,
  };
}
