import { baseApi, ICreateNoteDto, INote, IUpdateNoteDto } from '@shared/api';

export const notesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getNotes: build.query<[INote], void>({
      query: () => ({
        url: `/pages`,
      }),
    }),
});
export const { useGetNotesQuery } = notesApi;
