import { baseApi, ICreateNoteDto, INote, ITreeNoteDto, IUpdateNoteDto } from '@shared/api';

export const notesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getNotes: build.query<[ITreeNoteDto], void>({
      query: () => ({
        url: `/notes`,
      }),
      providesTags: ['Notes'],
    }),
    getNote: build.query<INote, INote['id']>({
      query: (id) => ({
        url: `/notes/${id}`,
      }),
      providesTags: ['Note'],
    }),
    createNote: build.mutation<INote, ICreateNoteDto>({
      query: (body) => ({
        url: `/notes`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Notes'],
    }),
    updateNote: build.mutation<INote, IUpdateNoteDto>({
      query: (body) => ({
        url: `/notes/${body.id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['Notes', 'Note'],
    }),
    deleteNote: build.mutation<INote, IUpdateNoteDto>({
      query: (body) => ({
        url: `/notes/${body.id}`,
        method: 'DELETE',
        body,
      }),
      invalidatesTags: ['Notes'],
    }),
  }),
});
export const {
  useGetNotesQuery,
  useGetNoteQuery,
  useCreateNoteMutation,
  useUpdateNoteMutation,
  useDeleteNoteMutation,
} = notesApi;
