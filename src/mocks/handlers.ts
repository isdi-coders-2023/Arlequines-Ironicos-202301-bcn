import { rest } from "msw";
import {
  beerApiUrl,
  beersPerPage,
  currentPage,
} from "../hooks/useBeerApi/useBeerApi";
import convertKebabCaseToCamelCase from "../utils/convertKebabCaseToCamelCase/convertKebabCaseToCamelCase";
import handlerBody from "./handlerResponseBody";

export const handlers = [
  rest.get(
    `${beerApiUrl}page=${currentPage}&per_page=${beersPerPage}`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json(convertKebabCaseToCamelCase(handlerBody))
      );
    }
  ),
];

export const errorHandler = [
  rest.get(
    `${beerApiUrl}page=${currentPage}&per_page=${beersPerPage}`,
    (req, res, ctx) => {
      return res(ctx.status(404));
    }
  ),
];
