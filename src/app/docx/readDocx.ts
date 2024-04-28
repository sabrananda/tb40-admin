"use server";
import {
  Paragraph,
  patchDocument,
  PatchType,
  ShadingType,
  Table,
  TableCell,
  TableRow,
  TextRun,
  WidthType,
} from "docx";
import * as fs from "fs";

export const editDocx = async () => {
  try {
    const doc = await patchDocument(
      fs.readFileSync("public/template/result.docx"),
      {
        patches: {
          nama: {
            type: PatchType.PARAGRAPH,
            children: [
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
                        children: [new Paragraph("tes")],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          },
          plr4013: {
            type: PatchType.PARAGRAPH,
            children: [
              new Table({
                columnWidths: [100, 5505],
                rows: [
                  new TableRow({
                    children: [
                      new TableCell({
                        width: {
                          size: 100,
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
        },
      }
    );
    fs.writeFileSync("public/template/result2.docx", doc);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

editDocx()
  .then(() => {
    console.log("Document edited successfully.");
  })
  .catch((error) => {
    console.error(`Failed to edit document: ${error}`);
  });
