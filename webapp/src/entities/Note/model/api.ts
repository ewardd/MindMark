import { baseApi, ICreateNoteDto, INote, IUpdateNoteDto } from '@shared/api';

export const notesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getNotes: build.query<[INote], void>({
      query: () => ({
        url: `/pages`,
      }),
    }),
    getNote: build.query<INote, INote['id']>({
      query: (id) => ({
        url: `/pages/${id}`,
      }),
    }),
    createNote: build.mutation<INote, ICreateNoteDto>({
      query: (body) => ({
        url: `/pages`,
        method: 'POST',
        body,
      }),
    }),
    updateNote: build.mutation<INote, IUpdateNoteDto>({
      query: (body) => ({
        url: `/pages`,
        method: 'PATCH',
        body,
      }),
    }),
  }),
});
export const { useGetNotesQuery, useGetNoteQuery, useCreateNoteMutation, useUpdateNoteMutation } = notesApi;
