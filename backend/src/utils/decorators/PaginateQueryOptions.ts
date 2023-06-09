import {
  ApiExtraModels,
  ApiOkResponse,
  ApiProperty,
  ApiPropertyOptional,
  ApiQuery,
  getSchemaPath,
} from '@nestjs/swagger';
import { Type, applyDecorators } from '@nestjs/common';

class PaginatedResponseMetaDto {
  @ApiProperty()
  public itemsPerPage: number;

  @ApiProperty()
  public totalItems: number;

  @ApiProperty()
  public currentPage: number;

  @ApiProperty()
  public totalPages: number;

  @ApiProperty()
  public sortBy: string[][];

  @ApiProperty()
  public searchBy: string[];

  @ApiProperty()
  public search: string;

  @ApiPropertyOptional()
  public filter?: Record<string, string | string[]>;
}

class PaginatedResponseLinksDto {
  @ApiPropertyOptional()
  public first?: string;

  @ApiPropertyOptional()
  public previous?: string;

  @ApiProperty()
  public current: string;

  @ApiPropertyOptional()
  public next?: string;

  @ApiPropertyOptional()
  public last?: string;
}

class PaginatedResponseDto<T> {
  public data: T[];

  @ApiProperty()
  public meta: PaginatedResponseMetaDto;

  @ApiProperty()
  public links: PaginatedResponseLinksDto;
}

export function PaginateQueryOptions<DataDto extends Type<unknown>>(dataDto: DataDto, ...filterFields: string[]) {
  return applyDecorators(
    ApiExtraModels(PaginatedResponseDto, dataDto),
    ApiOkResponse({
      schema: {
        allOf: [
          { $ref: getSchemaPath(PaginatedResponseDto) },
          {
            properties: {
              data: {
                type: 'array',
                items: { $ref: getSchemaPath(dataDto) },
              },
            },
          },
        ],
      },
    }),
    ApiQuery({
      name: 'page',
      required: false,
      description: 'Page number (starting from 1)',
    }),
    ApiQuery({
      name: 'limit',
      required: false,
      description: 'Number of records per page',
    }),
    ApiQuery({
      name: 'search',
      required: false,
      description: 'Multi-column search term',
    }),
    ApiQuery({
      name: 'searchBy',
      required: false,
      description: "Limit columns to which apply 'search' term",
      isArray: true,
      type: 'string',
    }),
    ApiQuery({
      name: 'sortBy',
      required: false,
      description: 'Format: _field_:_direction_ [direction may be ASC or DESC] e.g. id:DESC',
    }),
    ...filterFields.map((field) =>
      ApiQuery({
        name: 'filter.' + field,
        required: false,
        description:
          'Format: $_comp_:_value_ [comp may be $eq, $not, $null, $in, $gt, $gte, $lt, $lte, $btw, $ilike] e.g. $eq:1',
      }),
    ),
  );
}
