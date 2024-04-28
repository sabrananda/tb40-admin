"use server";
import {
  Document,
  HeadingLevel,
  ImageRun,
  Packer,
  Paragraph,
  ShadingType,
  Table,
  TableCell,
  TableRow,
  WidthType,
} from "docx";
import path from "path";
import * as fs from "fs";

export async function docxHandler() {
  const doc = new Document({
    sections: [
      {
        children: [
          new Paragraph({
            text: "tes123 ini dari node js",
            heading: HeadingLevel.HEADING_1,
            children: [
              new ImageRun({
                // type: "png",
                altText: {
                  title: "This is an ultimate title",
                  description: "This is an ultimate image",
                  name: "My Ultimate Image",
                },
                transformation: { height: 123, width: 123 },
                data: fs.readFileSync("./public/resultImage/kiri_atas.png"),
              }),
            ],
          }),

          new Table({
            columnWidths: [3505, 5505],
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 3505,
                      type: WidthType.DXA,
                    },
                    shading: {
                      fill: "b79c2f",
                      type: ShadingType.REVERSE_DIAGONAL_STRIPE,
                      color: "auto",
                    },
                    children: [new Paragraph("tes")],
                  }),
                ],
              }),
            ],
          }),
        ],
      },
    ],
  });
  const buffer = await Packer.toBuffer(doc);
  const pkg = fs.writeFileSync("public/template/tes.docx", buffer);

  // .then((buffer) => {
  //   fs.writeFileSync("public/template/tes.docx", buffer);
  // });
  // const buffer = fs.writeFileSync("public/template/tes1.docx", "buffer {{nama}}");

  console.log(pkg);
}
