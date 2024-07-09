import { ForDto, isForDto } from "./forDto";
import { PrintDto, isPrintDto } from "./printDto";
import { VariablesDto, isVariablesDto } from "./variablesDto";
export type AllDto = ForDto | PrintDto | VariablesDto;

export const isAllDto = (item: any): item is AllDto => {
  return isForDto(item) || isPrintDto(item) || isVariablesDto(item);
};

export const isAllDtoArray = (data: any): data is AllDto[] => {
  return Array.isArray(data) && data.every(isAllDto);
};
