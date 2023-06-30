import { baseApi, ICreateNoteDto, INote, ITreeNoteDto, IUpdateNoteDto } from '@shared/api';

export const notesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getNotes: build.query<[ITreeNoteDto], void>({
      query: () => ({
        url: `/notes`,
      }),
    }),
    getNote: build.query<INote, INote['id']>({
      query: (id) => ({
        url: `/notes/${id}`,
      }),
    }),
    createNote: build.mutation<INote, ICreateNoteDto>({
      query: (body) => ({
        url: `/notes`,
        method: 'POST',
        body,
      }),
    }),
    updateNote: build.mutation<INote, IUpdateNoteDto>({
      query: (body) => ({
        url: `/notes/${body.id}`,
        method: 'PATCH',
        body,
      }),
    }),
  }),
});
export const { useGetNotesQuery, useGetNoteQuery, useCreateNoteMutation, useUpdateNoteMutation } = notesApi;
