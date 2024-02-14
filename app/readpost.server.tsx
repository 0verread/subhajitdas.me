import { parse, transform, type RenderableTreeNodes } from "@markdoc/markdoc";

export function markdown(markdown: string): RenderableTreeNodes {
  return transform(parse(markdown));
}