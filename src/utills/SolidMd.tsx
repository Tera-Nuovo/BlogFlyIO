import Markdoc from "@markdoc/markdoc";
import render from "solidjs-markdoc";
//import SolidMarkdown from "solid-markdown";

export function SolidMd({ content }: { content: string }) {
    return render(Markdoc.transform(Markdoc.parse(content)));
}
