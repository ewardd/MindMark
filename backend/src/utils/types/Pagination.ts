export enum PaginationSortEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}

// TODO: [MM-60] Deprecated. Update
//dev.to/omardiaa48/custom-pagination-decorator-in-nestjs-pagination-has-never-been-easier-3bl6
export interface IPagination<T> {
  skip?: number;
  take?: number;
  sort?: { field: keyof T; by: PaginationSortEnum }[];
  search?: { field: string; value: string }[];
}
