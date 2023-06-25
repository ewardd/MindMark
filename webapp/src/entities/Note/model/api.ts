import { baseApi, ICreateNoteDto, INote, IUpdateNoteDto } from '@shared/api';

export const notesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getNotes: build.query<[INote], void>({
      query: () => ({
        url: `/pages`,
      }),
    }),
    createNote: build.mutation<INote, ICreateNoteDto>({
      query: (body) => ({
        url: `/pages`,
        method: 'POST',
        body,
      }),
    }),
});
export const { useGetNotesQuery } = notesApi;
